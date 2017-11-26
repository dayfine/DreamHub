import React from 'react'
import Grid from 'material-ui/Grid'
import List, { ListItem, ListItemText } from 'material-ui/List'
import Divider from 'material-ui/Divider'
import Button from 'material-ui/Button'
import Input from 'material-ui/Input'
// import Slider from 'material-ui/Slider';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import styles from './styles'

class Quiz extends React.Component {
  constructor () {
    super()
    this.state = {
      sliderNum: 1,
      goal: []
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (event) {
    // to be removed
  }

  handleSubmit (event) {
    event.preventDefault()
    let { goal } = this.state
    let tempGoal
    if (goal !== '') {
      tempGoal = goal
      this.setState({ goal: `${tempGoal}  ${event.target.value}` })
    } else {
      this.setState({ goal: event.target.value })
    }
    event.target.myInput.value = ''
  }

  render () {
    const { sliderNum, goal } = this.state
    const { questionStyle, titleStyle, bodyStyle, inputStyle, buttonStyle, textareaStyle, sliderStyle } = styles
    const { handleSubmit, handleChange } = this
    return (
      <Grid container style={questionStyle}>
        <form onSubmit={handleSubmit}>
          <h3 style={titleStyle}>If your name was a color, what color would it be?</h3>
          <Divider />
          <p style={bodyStyle} />
          <Input style={inputStyle} onChange={handleChange} name='myInput' placeholder='Write a goal you have. Be specific.' />
          <input label='How important is this?' onChange={(event) => this.setState({sliderNum: event.target.value })} type='range' min='1' max='10' value={sliderNum} style={sliderStyle} />
          <p style={bodyStyle}>{sliderNum}</p>
          <p style={bodyStyle}>Your goal: {goal}</p>
          <Button size='small' color='accent' style={buttonStyle}>Skip</Button>
          <Button size='small' color='primary' style={buttonStyle}>Next</Button>
        </form>

      </Grid>
    )
  }
}

export default Quiz
