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
import { createGoal } from '../actions'
import { connect } from 'react-redux'


class Quiz extends React.Component {
  constructor () {
    super()
    this.state = {
      sliderNum: 1,
      goal: [],
      currentUser: 'Current User'
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (event) {
    // to be removed
  }

  handleSubmit(event){
    event.preventDefault();
    createGoal(event.target.myInput.value)
    event.target.myInput.value='';
  }

  render(){
    const { sliderNum, goal, currentUser } = this.state;
    const { questionStyle, titleStyle, bodyStyle, inputStyle, buttonStyle, textareaStyle, sliderStyle } = styles;
    const { handleSubmit, handleChange } = this;

    const tempQuestions = ['Welcome Message', 'Do you have a new goal?', 'Is your deadline realistic?' ];
    //Welcome {currentUser}, do you have a new goal?
    return (
        <Grid container >

           {
              tempQuestions.map(question => {
               return (
                 <form style={questionStyle} onSubmit={handleSubmit}>
                    <h3 style={titleStyle}>{question}</h3>
                    <Divider />
                    <p style={bodyStyle}></p>
                    <Input style={inputStyle} onChange={handleChange} name="myInput" placeholder="Be as specific as possible." autoFocus/>
                    <input label="How important is this?" onChange={(event)=> this.setState({sliderNum: event.target.value })} type="range" min="1" max="10" value={sliderNum} style={sliderStyle} />
                    <p style={bodyStyle}>{sliderNum}</p>
                    <footer>
                      <Button size='small' color='accent' style={buttonStyle}>Skip</Button>
                      <Button size='small' color='primary' style={buttonStyle}>Next</Button>
                    </footer>
                </form>
               )
              })
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
