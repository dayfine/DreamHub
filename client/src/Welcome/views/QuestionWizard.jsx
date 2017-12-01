import React from 'react'

import { withStyles } from 'material-ui/styles'
import Input from 'material-ui/Input'
import Button from 'material-ui/Button'
import TextField from 'material-ui/TextField'
import Typography from 'material-ui/Typography'

import questions from '../questions'

const styles = {
  root: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    minWidth: 270,
    minHeight: 370
  },
  title: {
    padding: 12,
    paddingTop: 24,
    backgroundColor: '#4f9a94'
  },
  description: {
    flex: 1,
    margin: 24
  },
  inputs: {
    flex: 3,
    display: 'flex',
    margin: 48,
    marginTop: 18,
    flexDirection: 'column',
    justifyContent: 'flex-start'
  }
}

const RenderInput = props => {
  const { control } = props

  switch (control.type) {
    case 'text':
      return (<Input autoFocus {...control} />)

    case 'radio':
      return (
        <div>
          <input {...control} value='true' /> Yes
          <input {...control} value='false' /> No
        </div>
      )

    case 'range':
      return (<input {...control} />)

    case 'date':
      return (<input {...control} />)

    case 'textarea':
      return (<TextField multiline rows='4' />)

    default:
      return (<div>Unknown Input Type</div>)
  }
}

const RenderConfirmationButton = ({idx, handleAnswer}) => {
  return idx === questions.length - 1 && (
    <Button onClick={handleAnswer}>+</Button>
  )
}

const QuestionWizard = props => {
  const { idx, handleAnswer, handleChange, classes } = props
  const question = questions[idx]

  return (
    <div className={classes.root}>
      <span> {idx + 1} of {questions.length} </span>
      <Typography align='center' type='headline' className={classes.title}>
        {question.title}
      </Typography>
      <Typography align='left' type='body2' className={classes.description}>
        {question.description}
      </Typography>
      <div className={classes.inputs}>
        {question.controls.map((control, idx) => {
          return (
            <RenderInput control={{...control, onChange: handleChange}} key={idx} />
          )
        })}
        <RenderConfirmationButton idx={idx} handleAnswer={handleAnswer} />
      </div>
    </div>
  )
}

export default withStyles(styles)(QuestionWizard)
