import React from 'react';
import Grid from 'material-ui/Grid';
import styles from './styles';

import { createGoal } from '../../Goals/actions';
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
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleNextClick = this.handleNextClick.bind(this);
    this.handleBackClick = this.handleBackClick.bind(this);
    this.handleSkipClick = this.handleSkipClick.bind(this);
  }

  handleChange(event){
    this.setState({sliderNum: event.target.value })
  }

  handleSubmit(event){
    event.preventDefault();
    console.log('This is the event target from handleSubmit', event.target.name)
//    this.props.createGoal(event.target.myInput.value)
//    event.target.myInput.value='';
  }

  handleNextClick(event){
    this.setState({counter: this.state.counter+1});

  }

  handleSkipClick(){
    this.setState({counter: this.state.counter+1});
  }

  handleBackClick(){
    this.setState({counter: this.state.counter-1});
  }

  render(){
    const { counter } = this.state;
    const { questionStyle } = styles;
    const { handleSubmit, handleChange, handleNextClick, handleBackClick, handleSkipClick } = this;
    console.log('THEM Fetch GOAL PROPS', this.props.fetchGoals)

    return (
      <Grid container >
         {goalWizard.map(question => {
            return (
              <div style={questionStyle} key={question.id}>
                {formDisplay(question, this.state, handleChange, handleSubmit, handleNextClick, handleBackClick, handleSkipClick)}
              </div>
            )}).filter((question, i) => counter === i)
          }
          <p>Goals go here: </p>
      </Grid>
    )
  }
}

const mapState = state => ({
  goals: state.goals,
  currentUser: state.currentUser
})

const mapDispatch = { createGoal }

export default connect(mapState, mapDispatch)(Quiz);
