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
    const { questionStyle } = styles;
    const { handleSubmit, handleChange, handleNextClick, handleBackClick, handleSkipClick } = this;
    //console.log(goalWizard)

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
