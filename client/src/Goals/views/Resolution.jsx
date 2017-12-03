import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { withStyles } from 'material-ui/styles'
import QuickAddTask from '../../Tasks/views/QuickAddTask'
import ProperButton from '../../common/ProperButton'

import { editGoal } from '../actions'

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
  const { classes } = props

  return (
    <div className={classes.formContainer}>
      <ProperButton>OK</ProperButton>
    </div>
  )
}

const mapDispatch = ({ editGoal })

export default connect(null, mapDispatch)(
                withStyles(styles)(
                  Resolution
                ))
