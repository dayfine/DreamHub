import React, { Component } from 'react'
import { connect } from 'react-redux'

import { withStyles } from 'material-ui/styles'
import Dialog from 'material-ui/Dialog'
import Button from 'material-ui/Button'
import Icon from 'material-ui/Icon'
import Tooltip from 'material-ui/Tooltip'
import GoalForm from './GoalForm'

const styles = theme => ({
  absolute: {
    flip: false,
    position: 'absolute',
    bottom: 60,
    left: 32
  }
})

class AddTooltip extends Component {
  state = {
    open: false
  }

  openModal = () => {
    this.setState({ open: true })
  }

  closeModal = () => {
    this.setState({ open: false })
  }

  render () {
    const { classes } = this.props
    return (
      <div>
        <Dialog
          open={ this.open }
          onRequestClose={ this.closeModal }
        >
          <GoalForm />
        </Dialog>
        <Tooltip placement='bottom' title='Add new goal'>
          <Button
            fab color='accent'
            className={classes.absolute}
            onClick={this.openModal}
          >
            <Icon children='add' />
          </Button>
        </Tooltip>
      </div>
    )
  }
}

export default withStyles(styles)(AddTooltip)
