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
import { createGoal } from '../actions';
import { connect } from 'react-redux';
import goalWizard, { formDisplay } from './goalWizard';


class Quiz extends React.Component{
  constructor(){
    super();
    this.state ={
      sliderNum: 1,
      goal: [],
      currentUser: 'Current User',
      counter: 0,
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleSubmit(event){
    event.preventDefault();
    createGoal(event.target.myInput.value)
    event.target.myInput.value='';
  }
  
  render(){
    const { sliderNum, goal, currentUser, counter } = this.state;
    const { questionStyle, titleStyle, bodyStyle, inputStyle, buttonStyle, textareaStyle, sliderStyle } = styles;
    const { handleSubmit, handleChange } = this;
    
    return (
        <Grid container >
          
           {
              goalWizard.map(question => {
                 return ( 
                   <form style={questionStyle} onSubmit={handleSubmit} key={question.id}>
                     {formDisplay(question)}
                     <Button size='small' color='accent' style={buttonStyle} onClick={()=> this.setState({counter: this.state.counter-1})}>Skip</Button>
                     <Button size='small' color='primary' style={buttonStyle} onClick={()=> this.setState({counter: this.state.counter+1})}>Next ( {this.state.counter} )</Button>
                   </form>
                )
              }).filter((question, i) => this.state.counter === i)
            }
            
            

        </Grid>
    )
  }
} 

const mapState = state => ({
  userId: state.currentUser.id
})

const mapDispatch = { createGoal };

export default connect(mapState, mapDispatch)(Quiz);