import React from 'react'

import styles from './styles'
import { withStyles } from 'material-ui/styles'
import Divider from 'material-ui/Divider'
import Input from 'material-ui/Input'
import Button from 'material-ui/Button'
import TextField from 'material-ui/TextField'

import questions from '../questions'

// Make human a variable for the current user

const QuestionWizard = props => {
  const { idx, handleAnswer, classes } = props
  const question = questions[idx]

  return (
    <div className={classes.questionStyle}>
      <form className={classes.formStyle} onSubmit={handleAnswer} key={question.id}>
        <span> {idx + 1} of {questions.length} </span>
        <h3 className={classes.titleStyle}>{question.title}</h3>
        <Divider />
        <p className={classes.bodyStyle}>
          <em>{question.description}</em>
        </p>

        {
        question.hasInput &&
        <Input id='inputId'
          className={classes.inputStyle}
          name='inputtext'
          placeholder={question.placeholderMessage}
          autoFocus />}

        {
        question.hasBoolean &&
        <div className={classes.bodyStyle}>
          <input type='radio' name={question.booleanName} value=' Yes ' /> Yes
          <input type='radio' name={question.booleanName} value=' No ' /> No
        </div>
      }

        {
        question.hasSlider &&
        <div>
          <input label='How important is this?'
            type='range' min='1' max='10'
            value={idx}
            className={classes.sliderStyle} />
          <p className={classes.bodyStyle}>{idx}</p>
        </div>
      }

        {
       question.hasTimeline &&
       <div>
         <Input className={classes.inputStyle} label='Ultimate Goal' placeholder='What is your ultimate goal?' type='text' />
         <Input className={classes.inputStyle} label='12 month goal' placeholder='What is your 12 month goal?' type='text' />
         <Input className={classes.inputStyle} label='Three month goal' placeholder='What is your three month goal?' type='text' />
         <Input className={classes.inputStyle} label='Weekly goal' placeholder='What is your weekly goal?' type='text' />
         <Input className={classes.inputStyle} label='Daily goal' placeholder='What are your daily goals?' type='text' />
       </div>
    }

        {
      question.hasTextarea &&
      <div>
        <TextField className={classes.inputStyle} multiline rows='4' />
      </div>
    }

        {
      question.hasMultiInputs &&
      <div>
        <Input className={classes.inputStyle} name={question.inputName} placeholder={question.placeholderMessage} autoFocus />
        <Button size='small' color='primary'>+</Button>
      </div>
    }

      </form>
    </div>
  )
}

export default withStyles(styles)(QuestionWizard)
