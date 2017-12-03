import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { withStyles } from 'material-ui/styles'
import Icon from 'material-ui/Icon'
import IconButton from 'material-ui/IconButton'
import Typography from 'material-ui/Typography'
import Divider from 'material-ui/Divider'
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
  },
  title: {
    display: 'flex',
    padding: 24,
    color: 'white',
    backgroundColor: '#4f9a94',
    fontSize: '1.35em',
    justifyContent: 'space-between',
    minHeight: 72
  },
  flex: {
    flex: '1 0 auto'
  },
  hr: {
    width: '100%'
  }
}

const Resolution = props => {
  const { editGoal, goal, classes, onClose } = props

  const onConfirmatoin = () => {
    editGoal({...goal, progress: GOAL_PROGRESS.ACCOMPLISHED})
    onClose()
  }

  return !goal ? (<div />) : (
    <div>
      <div className={classes.title}>
        <Typography type='headline' color='inherit' className={classes.flex}>
          {goal.title}
        </Typography>
        <IconButton
          color='inherit'
          onClick={onClose}
          aria-label='Close'
        >
          <Icon style={{fontSize: '1em'}}>clear</Icon>
        </IconButton>
      </div>
      <div className={classes.formContainer}>
        Good job, you have finished all the tasks under this goal!
        Are you ready to cross it off your dream list?
        <ProperButton
          raised
          color='primary'
          onClick={onConfirmatoin}
        >
          Yes!
        </ProperButton>
        <Divider className={classes.hr} />
        <Typography type='subheading' color='accent'>
          Add something else
        </Typography>
        <QuickAddTask goalId={goal.id} />
      </div>
    </div>
  )
}

const mapDispatch = ({ editGoal })

export default connect(null, mapDispatch)(
                withStyles(styles)(
                  Resolution
                ))
