import React from 'react';
import Grid from 'material-ui/Grid';
import styles from './styles';

import { createGoal, fetchAllGoals } from '../../Goals/actions';
import { connect } from 'react-redux';
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
    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleNextClick = this.handleNextClick.bind(this);
    
  }
  
  componentDidMount(){
    console.log('goala', this.props.goals)
    this.props.fetchAllGoals()
  }

  handleChange(ev) {
    this.setState({sliderNum: ev.target.value })
  }

  handleSubmit(ev) {
    ev.preventDefault();
    let inputEvent = document.getElementById('inputId')
//    console.log('answers obj', this.state.answers)
//    this.setState({answers: { this.state.answers.setGoal: inputEvent.value }})
//    console.log('answers obj', this.state.answers)

    this.props.createGoal(inputEvent.value)
  }

  handleNextClick(ev) {
    const { counter } = this.state;
    counter > 6 ?
      this.setState({counter: 0}) :
      this.setState({counter: counter+1});
    
    this.handleSubmit(ev)
    
  }

  handleSkipClick = () => {
    const { counter } = this.state;
    counter > 6 ?
      this.setState({counter: 0}) :
      this.setState({counter: counter+1});
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
        
          <div style={goalsListDisplay}>Goals: {this.props.goals.map(goal => {
              return <p key={goal.id}>Title: {goal.title}<br/>Descrption: {goal.description}</p>
            })} </div>
      </div>
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
const mapDispatch = { createGoal, fetchAllGoals }

export default connect(mapState, mapDispatch)(Quiz);

