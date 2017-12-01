import React from 'react'

import styles from './styles'
import { withStyles } from 'material-ui/styles'
import Divider from 'material-ui/Divider'
import Input from 'material-ui/Input'
import Button from 'material-ui/Button'
import TextField from 'material-ui/TextField'
import Typography from 'material-ui/Typography'

import questions from '../questions'

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

const RenderConfirmationButton = ({idx}) => {
  return idx === questions.length - 1 && (
    <Button>+</Button>
  )
}

const QuestionWizard = props => {
  const { idx, handleAnswer, classes } = props
  const question = questions[idx]

  return (
    <div>
      <form className={classes.formStyle} onSubmit={handleAnswer} key={question.id}>
        <span> {idx + 1} of {questions.length} </span>
        <div className={classes.title}>
          <Typography align='center' type='headline'>
            {question.title}
          </Typography>
        </div>
        <Divider />
        <div className={classes.body}>
          <Typography align='center' type='caption'>
            {question.description}
          </Typography>
          {question.controls.map((control, idx) => {
            return (
              <RenderInput control={control} key={idx} />
            )
          })}
          <RenderConfirmationButton idx={idx} />
        </div>
      </form>
    </div>
  )
}

export default withStyles(styles)(QuestionWizard)
