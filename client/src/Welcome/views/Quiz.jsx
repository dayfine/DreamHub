import React from 'react';
import Grid from 'material-ui/Grid';
import styles from './styles';

import { createGoal, fetchGoals, fetchAllGoals } from '../../Goals/actions';
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
    this.props.fetchAllGoals()
    
   
  }

  handleChange(ev) {
    this.setState({sliderNum: ev.target.value })
  }

  handleSubmit(ev) {
    ev.preventDefault();
    console.log('submit', ev.target)
//    this.props.createGoal(event.target.myInput.value)
//    event.target.myInput.value='';
  }

  handleNextClick(ev) {
    const { counter } = this.state;
    counter > 6 ?
      this.setState({counter: 0}) :
      this.setState({counter: counter+1});
    
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
              return <p key={goal.id}>{goal.description}</p>
            })} </div>
      </div>
    )
  }
}

const mapState = state => ({
  goals: state.goals,
  currentUser: state.currentUser
})

const mapDispatch = { createGoal, fetchGoals, fetchAllGoals }

export default connect(mapState, mapDispatch)(Quiz);

