import React from 'react'
import { connect } from 'react-redux'

import { withStyles } from 'material-ui/styles'
import Button from 'material-ui/Button'
import Icon from 'material-ui/Icon'
import Tooltip from 'material-ui/Tooltip'

import { setCurrTask } from './currentTaskReducer'

const styles = theme => ({
  absolute: {
    flip: false,
    position: 'absolute',
    bottom: 32,
    right: 32
  }
})

const AddTooltip = props => {
  const { classes, setCurrTask } = props
  return (
    <div>
      <Tooltip placement='bottom' title='Add new event'>
        <Button
          fab color='accent'
          className={classes.absolute}
          onClick={setCurrTask.bind(this, -1)}
          >
          <Icon children='add' />
        </Button>
      </Tooltip>
    </div>
  )
}

export default withStyles(styles)(AddTooltip)
