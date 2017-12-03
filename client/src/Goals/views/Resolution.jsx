import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { withStyles } from 'material-ui/styles'
import Typography from 'material-ui/Typography'
import QuickAddTask from '../../Tasks/views/QuickAddTask'
import ProperButton from '../../common/ProperButton'

import { editGoal } from '../actions'
import { GOAL_PROGRESS } from '../../constants'

const styles = {
  formContainer: {
    padding: '24px 36px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    minHeight: 320,
    maxHeight: 720,
    minWidth: 400,
    maxWidth: 960,
    overflow: 'scroll'
  }
}

const Resolution = props => {
  const { editGoal, goal, classes, onClose } = props

  const onConfirmatoin = () => {
    editGoal({...goal, progress: GOAL_PROGRESS.ACCOMPLISHED})
  }

  return (
    <div className={classes.formContainer}>
      <div>{goal.title}</div>
      Good job, you have finished all the tasks under this goal!
      Are you ready to cross it off your dream list?
      <ProperButton
        raised
        color='primary'
        onClick={onConfirmatoin}
      >
        Yes!
      </ProperButton>
      Add something else
      <QuickAddTask goalId={goal.id} />

    </div>
  )
}

const mapDispatch = ({ editGoal })

export default connect(null, mapDispatch)(
                withStyles(styles)(
                  Resolution
                ))
