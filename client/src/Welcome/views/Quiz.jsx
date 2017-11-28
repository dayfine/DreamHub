import React from 'react';
import Grid from 'material-ui/Grid';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Button from 'material-ui/Button';
import Input from 'material-ui/Input';
//import Slider from 'material-ui/Slider';
//import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import styles from './styles';

import { createGoal, fetchGoals } from '../actions';
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
    const { sliderNum, goal, currentUser, counter } = this.state;
    const { questionStyle, titleStyle, bodyStyle, inputStyle, buttonStyle, textareaStyle, sliderStyle } = styles;
    const { handleSubmit, handleChange, handleNextClick, handleBackClick, handleSkipClick } = this;
    console.log('THEM Fetch GOAL PROPS', this.props.fetchGoals)
    return (
        <Grid container >
          
           {
              goalWizard.map(question => {

                   <div style={questionStyle} key={question.id}>
                     {formDisplay(question, this.state, handleChange, handleSubmit, handleNextClick, handleBackClick, handleSkipClick)}
                  </div>
                )
              }).filter((question, i) => this.state.counter === i)
            }
            
            <p>Goals go here: </p>

        </Grid>
    )
  }
}


const mapState = state => {
  console.log('This is the state', state)
  return {}
}

const mapDispatch = { createGoal }

const mapState = state => {
  console.log('This is the state', state)
  return state
}

const mapDispatch = { createGoal, fetchGoals }

export default connect(mapState, mapDispatch)(Quiz);
