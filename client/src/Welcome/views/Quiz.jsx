import React from 'react';
import { connect } from 'react-redux';

import CenterPaper from '../../common/CenterPaper'
import { withStyles } from 'material-ui/styles'
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button'
import Divider from 'material-ui/Divider'

import { createGoal } from '../../Goals/actions';
import QuestionWizard from './QuestionWizard';

const styles = {
  quizContainer: {
    width: '50vw',
    height: '60vh',
  },
  buttonGruop: {
    display: 'flex',
    backgroundColor: '#ccc'
  },
  flex: {
    flex: 1
  },
}

class Quiz extends React.Component {
  constructor () {
    super()
    this.state = {
      idx: 0,
      answers: {},
    }
  }

  handleChange = ev => {
    const update = {}
    update[ev.target.name] = ev.target.value
    this.setState({
      answers: { ...this.state.answers, ...update },
    })
  }

  handleAnswer = ev => {
    ev.preventDefault();
    // Needs userId in here
    this.props.createGoal(this.state.answers)
  }

  handleNextClick = ev => {
    this.handleSkipClick()
  }

  handleSkipClick = () => {
    const { idx } = this.state
    this.setState({ idx: idx > 6 ? 0 : (idx + 1) })
  }

  handleBackClick = () => {
    const { idx } = this.state
    this.setState({ idx: idx === 0 ? 0 : idx - 1 });
  }

  render(){
    const { idx } = this.state
    const { classes } = this.props

    return (
      <CenterPaper style={{padding: 0 }}>
        <div className={classes.quizContainer}>
          <QuestionWizard
            idx={idx}
            answers={this.state.answers}
            handleAnswer={this.handleAnswer}
            handleChange={this.handleChange}
          />
        </div>
        <Divider />
        <div className={classes.buttonGruop}>
          <Button onClick={this.handleBackClick} color='primary' className={classes.flex} >
            Back
          </Button>
          <Button onClick={this.handleSkipClick} color='accent' className={classes.flex} >
            Skip
          </Button>
          <Button onClick={this.handleNextClick} color='primary' className={classes.flex} >
            Next
          </Button>
        </div>
      </CenterPaper>
    )
  }
}

const mapDispatch = { createGoal }

export default connect(null, mapDispatch)(
                withStyles(styles)(
                  Quiz
                ))

