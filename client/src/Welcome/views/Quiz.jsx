import React from 'react';
import { connect } from 'react-redux';

import CenterPaper from '../../common/CenterPaper'
import { withStyles } from 'material-ui/styles'
import Button from 'material-ui/Button'

import { createGoal } from '../../Goals/actions'
import QuestionWizard from './QuestionWizard'
import questions from '../questions'

const styles = {
  quizContainer: {
    width: '50vw',
    height: '60vh',
    backgroundColor: 'white'
  },
  buttonGruop: {
    display: 'flex',
    backgroundColor: '#ccc'
  },
  flex: {
    flex: 1
  },
}

class Quiz extends React.Component {
  constructor () {
    super()
    this.state = {
      idx: 0,
      answers: {},
    }
  }

  // Note: this implmentation mixes controlled and uncontrolled components.
  //       it might make more sense to let inputs each have internal state,
  //       and then push to parent on page flips. That's more codes tho.
  handleChange = ev => {
    const update = {}
    update[ev.target.name] = ev.target.value
    this.setState({
      answers: { ...this.state.answers, ...update },
    })
  }

  handleAnswer = ev => {
    console.log(this.state)
    // Needs userId in here
    this.props.createGoal(this.state.answers)
  }

  handleNextClick = ev => {
    this.handleSkipClick()
  }

  handleSkipClick = () => {
    this.setState({ idx: this.state.idx + 1 })
  }

  handleBackClick = () => {
    this.setState({ idx: this.state.idx - 1 })
  }

  render(){
    const { idx } = this.state
    const { classes } = this.props
    const len = questions.length

    return (
      <CenterPaper style={{padding: 0 }}>
        <div className={classes.quizContainer}>
          <QuestionWizard
            idx={idx}
            answers={this.state.answers}
            handleAnswer={this.handleAnswer}
            handleChange={this.handleChange}
          />
        </div>
        <div className={classes.buttonGruop}>
          <Button
            onClick={this.handleBackClick}
            color='primary'
            className={classes.flex}
            disabled={idx===0}
          >
            Back
          </Button>
          <Button
            onClick={this.handleSkipClick}
            color='accent'
            className={classes.flex}
            disabled={idx===len-1}
          >
            Skip
          </Button>
          <Button
            onClick={this.handleNextClick}
            color='primary'
            className={classes.flex}
            disabled={idx===len-1}
          >
            Next
          </Button>
        </div>
      </CenterPaper>
    )
  }
}

const mapDispatch = { createGoal }

export default connect(null, mapDispatch)(
                withStyles(styles)(
                  Quiz
                ))

