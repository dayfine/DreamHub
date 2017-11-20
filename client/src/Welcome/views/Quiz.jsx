import React from 'react';
import Grid from 'material-ui/Grid';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Button from 'material-ui/Button';
import Input from 'material-ui/Input';
//import Slider from 'material-ui/Slider';
//import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const questionStyle = {
    width: `45vw`,
    height: `40vh`,
    marginRight: 'auto',
    marginLeft: 'auto',
    borderRadius: `10px`,
    boxShadow: `3px 4px 10px grey`,
  }
  
  const titleStyle = {
    fontFamily: 'sans-serif',
    fontSize: `3vh`,
    width: '40vw',
    textAlign: 'center',
    marginRight: 'auto',
    marginLeft: 'auto',
    padding: `.3vw`
  }
  
  const bodyStyle = {
    padding: '1vw',
    textAlign: 'center',
    marginRight: 'auto',
    marginLeft: 'auto'
  }
  
  const inputStyle ={
    width: `60%`,
    marginRight: '4vw',
    marginLeft: '10vw'
  }
  
  const buttonStyle = {
    outline: 'none',
    width: `50%`,
  }
  
  const textareaStyles = {
    marginLeft: 'auto',
    marginRight: 'auto'
  }
  
  const sliderStyle = {
    marginLeft: '10vw',
    marginRight: '4vw',
    marginTop: '8vh',
    width: `60%`
  }
  
class Quiz extends React.Component{
  constructor(){
    super();
    this.state ={
      sliderNum: 5
    }
  }
  
  render(){
    let { sliderNum } = this.state;
  return (
      <Grid container style={questionStyle}>
        <List>
          <h3 style={titleStyle}>If your name was a color, what color would it be?</h3>
          <Divider />
          <p style={bodyStyle}>Write a goal you have. Be specific.</p>
          <Input style={inputStyle}/>
          <input onChange={(event)=> this.setState({sliderNum: event.target.value })} type="range" min="1" max="10" value={sliderNum} style={sliderStyle} />
        </List>
          <Button size='small' color='accent' style={buttonStyle}>Skip</Button>
          <Button size='small' color='primary' style={buttonStyle}>Next</Button>

      </Grid>
  )
  }
} 

export default Quiz;