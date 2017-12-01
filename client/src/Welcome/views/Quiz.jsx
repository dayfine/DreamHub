import React from 'react';
import { connect } from 'react-redux';

import CenterPaper from '../../common/CenterPaper'
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button'
import Divider from 'material-ui/Divider'

import styles from './styles';

import { createGoal } from '../../Goals/actions';

import goalWizard, { formDisplay } from './goalWizard';

class Quiz extends React.Component {
  constructor () {
    super()
    this.state = {
      sliderNum: 1,
      currentUser: 'Current User',
      counter: 0,
      goals: [{id: 0, description: 'butter'}, {id: 1, description: 'dchicken'}],
      answers: {
        setGoal: '',
        progressTrack: '',
        excitement: 0,
        deadline: '',
        longShortTerms: [],
        emotionalReason: '',
        conflict: false,
        affirmations: []
      }
    }
  }

  handleChange = ev => {
    this.setState({sliderNum: ev.target.value })
  }

  handleAnswer = ev => {
    ev.preventDefault();
    console.log(this.state.answer)
//    console.log('answers obj', this.state.answers)
//    this.setState({answers: { this.state.answers.setGoal: inputEvent.value }})
//    console.log('answers obj', this.state.answers)

    // this.props.createGoal(inputEvent.value)
  }

  handleNextClick = ev => {
    this.handleSkipClick()
    this.handleAnswer(ev)
  }

  handleSkipClick = () => {
    const { counter } = this.state;
    this.setState({ counter: counter > 6 ? 0 : (counter + 1) })
  }

  handleBackClick = () => {
    this.setState({counter: this.state.counter-1});
  }

  render(){
    const { counter } = this.state;
    const { questionStyle } = styles;
    const question = goalWizard[counter]

    return (
      <CenterPaper>
        <span> {counter+1} of {goalWizard.length} </span>
        <div style={questionStyle} key={question.id}>
          {formDisplay(question, this.state, this.handleChange)}
        </div>
        <Divider />
        <div style={styles.buttonFooter}>
          <Button size='small' color='primary' onClick={this.handleBackClick}>
            Back
          </Button>
          <Button size='small' color='accent' onClick={this.handleSkipClick}>
            Skip
          </Button>
          <Button size='small' color='primary' onClick={this.handleNextClick}>
            Next
          </Button>
        </div>
      </CenterPaper>
    )
  }
}

const mapState = (state, ownProps) => {
  console.log('State =', state)
  return {
    goals: state.goals,
    currentUser: state.currentUser
    }
}
const mapDispatch = { createGoal }

export default connect(mapState, mapDispatch)(Quiz);

