import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'

import Autosuggest from 'react-autosuggest'
import TextField from 'material-ui/TextField'
import Paper from 'material-ui/Paper'
import { MenuItem } from 'material-ui/Menu'
import match from 'autosuggest-highlight/match'
import parse from 'autosuggest-highlight/parse'
import { withStyles } from 'material-ui/styles'

import { GOAL_PROGRESS } from '../../constants'

const styles = {
  container: {
    width: '60%',
    margin: '0 auto',
    position: 'relative',
    height: 50,
  },
  suggestionsContainerOpen: {
    position: 'absolute',
    left: 0,
    right: 0,
  },
  suggestion: {
    display: 'block',
  },
  suggestionsList: {
    margin: 0,
    padding: 0,
    listStyleType: 'none',
  },
  textField: {
    width: '100%',
  },
}

const renderInput = inputProps => {
  const { classes, autoFocus, value, ref, ...other } = inputProps;

  return (
    <TextField
      autoFocus={autoFocus}
      className={classes.textField}
      value={value}
      inputRef={ref}
      InputProps={{
        classes: {
          input: classes.input,
        },
        ...other,
      }}
    />
  )
}

const renderMatch = (goal, { query, isHighlighted }) => {
  const matches = match(goal.title, query);
  const parts = parse(goal.title, matches);

  return (
    <MenuItem selected={isHighlighted} component="div">
      <div>
        {parts.map((part, index) => {
          return part.highlight ? (
            <span key={index} style={{ fontWeight: 300 }}>
              {part.text}
            </span>
          ) : (
            <strong key={index} style={{ fontWeight: 500 }}>
              {part.text}
            </strong>
          );
        })}
      </div>
    </MenuItem>
  );
}

const renderMatchList = options => {
  const { containerProps, children } = options;

  return (
    <Paper {...containerProps} square>
      {children}
    </Paper>
  );
}

const getGoalTitle = goal => goal.title

const getGoals = (value, goals) => {
  const inputVal = value.trim()
  if (inputVal.length === 0) return []

  const inputRegex = new RegExp(inputVal, 'i')
  let count = 0;

  return goals.filter(goal => {
    const keep = count < 5 && inputRegex.test(goal.title)

    if (keep) count += 1

    return keep;
  })
}



class GoalAutosuggest extends Component {
  state = {
    value: '',
    suggestions: [],
  };

  goals = []

  componentDidMount() {
    return axios.get('/api/goals/search', {params: {progress: 'Accomplished'}})
      .then(result => result.data)
      .then(goals => {
        this.goals = goals
      })
      .catch(console.error)
  }

  getMatches = ({ value }) => {
    this.setState({ suggestions: getGoals(value, this.goals) })
  };

  clearMatches = () => {
    this.setState({ suggestions: [] })
  };

  handleChange = (event, { newValue }) => {
    this.setState({ value: newValue })
  };

  render() {
    const { classes } = this.props

    return (
      <Autosuggest
        theme={{
          container: classes.container,
          suggestionsContainerOpen: classes.suggestionsContainerOpen,
          suggestionsList: classes.suggestionsList,
          suggestion: classes.suggestion,
        }}
        suggestions={this.state.suggestions}
        getSuggestionValue={getGoalTitle}
        onSuggestionsFetchRequested={this.getMatches}
        onSuggestionsClearRequested={this.clearMatches}
        renderInputComponent={renderInput}
        renderSuggestionsContainer={renderMatchList}
        renderSuggestion={renderMatch}
        inputProps={{
          autoFocus: true,
          classes,
          placeholder: 'What goal do you have?',
          value: this.state.value,
          onChange: this.handleChange,
        }}
      />
    );
  }
}

const mapState = state => ({
})

export default  connect(mapState)(
                withStyles(styles)(
                  GoalAutosuggest
                ))
