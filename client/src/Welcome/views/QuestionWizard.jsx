import React from 'react'

import { withStyles } from 'material-ui/styles'
import Input from 'material-ui/Input'
import Button from 'material-ui/Button'
import TextField from 'material-ui/TextField'
import Typography from 'material-ui/Typography'
import { LinearProgress } from 'material-ui/Progress'

import AutoCompleteGoal from '../../Goals/views/AutoCompleteGoal'
import { views as Category } from '../../Category'
import { views as Travel } from '../../Travel'
import questions from '../questions'

const styles = {
  root: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    minWidth: 270,
    minHeight: 370,
    backgroundColor: '#fafafa'
  },
  title: {
    padding: 12,
    paddingTop: 36,
    backgroundColor: '#4f9a94',
    color: '#eee'
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

const RenderInput = ({ control }) => {
  switch (control.type) {
    case 'text':
      return (<Input autoFocus {...control} />)

    case 'radio':
      return (
        <div style={{display: 'flex', justifyContent: 'space-around'}}>
          <Button {...control} raised color='primary' value='true'>Yes</Button>
          <Button {...control} raised color='accent' value='false'>No</Button>
        </div>
      )

    case 'range':
      return (<input {...control} />)

    case 'date':
      return (<input {...control} />)

    case 'textarea':
      return (<TextField multiline rows='4' {...control} />)

    case 'category':
      return (<Category {...control} />)

    case 'travel':
      return (<Travel {...control} />)

    case 'autoComplete':
      return (<AutoCompleteGoal {...control} />)

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
  const { idx, answers, handleAnswer, handleChange, classes } = props
  const question = questions[idx]

  return (
    <div className={classes.root}>
      <Typography align='center' type='headline' className={classes.title}>
        {question.title}
      </Typography>

      <Typography align='left' type='body2' className={classes.description}>
        {question.description}
      </Typography>

      <div className={classes.inputs}>
        {question.control &&
        <RenderInput
          control={{
            ...question.control,
            onChange: handleChange,
            value: answers[question.control.name]
          }}
        />}
        <RenderConfirmationButton
          idx={idx}
          handleAnswer={handleAnswer}
        />
      </div>

      <LinearProgress
        mode='determinate'
        value={100 * ((idx + 1) / questions.length)}
      />
    </div>
  )
}

export default withStyles(styles)(QuestionWizard)
