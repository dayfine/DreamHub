import React from 'react';
import Grid from 'material-ui/Grid';
import styles from './styles';

import { createGoal, fetchGoals } from '../../Goals/actions';
import { connect } from 'react-redux';
import goalWizard, { formDisplay } from './goalWizard';

class Quiz extends React.Component {
  constructor () {
    super()
    this.state = {
      sliderNum: 1,
      goal: [],
      currentUser: 'Current User',
      counter: 0,
      answers: {}
    }
  }
  
  componentDidMount(){
    this.props.fetchGoals()
  }

  handleChange = ev => {
    this.setState({sliderNum: ev.target.value })
  }

  handleSubmit = ev => {
    ev.preventDefault();
    console.log('This is the event target from handleSubmit', ev.target.name)
//    this.props.createGoal(event.target.myInput.value)
//    event.target.myInput.value='';
  }

  handleNextClick = ev => {
    this.setState({counter: this.state.counter+1});

  }

  handleSkipClick = () => {
    this.setState({counter: this.state.counter+1});
  }

  handleBackClick = () => {
    this.setState({counter: this.state.counter-1});
  }

  render(){
    const { counter } = this.state;
    const { questionStyle, goalsListDisplay } = styles;
    const { handleSubmit, handleChange, handleNextClick, handleBackClick, handleSkipClick } = this;
    const question = goalWizard[counter];
    return (
      <div>
          <div style={questionStyle} key={question.id}>
            {formDisplay(question, this.state, handleChange, handleSubmit, handleNextClick, handleBackClick, handleSkipClick)}
          </div>
        
          <div style={goalsListDisplay}>Goals go here: {this.props.goals.map(goal => {
              console.log('This is the goal in the map', goal)
              return <p key={goal.id}>{goal.title}</p>
            })} </div>
      </div>
    )
  }
}

const mapState = state => ({
  goals: state.goals,
  currentUser: state.currentUser
})

const mapDispatch = { createGoal, fetchGoals }

export default connect(mapState, mapDispatch)(Quiz);

