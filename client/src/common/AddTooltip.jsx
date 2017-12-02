import React from 'react'
import { connect } from 'react-redux'

import { withStyles } from 'material-ui/styles'
import Button from 'material-ui/Button'
import Icon from 'material-ui/Icon'
import Tooltip from 'material-ui/Tooltip'

const styles = theme => ({
  absolute: {
    flip: false,
    position: 'absolute',
    bottom: 60,
    left: 32
  }
})

const AddTooltip = props => {
  const { classes } = props
  return (
    <div>
      <Tooltip placement='bottom' title='Add new goal'>
        <Button
          fab color='accent'
          className={classes.absolute}
        >
          <Icon children='add' />
        </Button>
      </Tooltip>
    </div>
  )
}

export default withStyles(styles)(AddTooltip)
