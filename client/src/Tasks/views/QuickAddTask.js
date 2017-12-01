import React, { Component } from 'react'
import { connect } from 'react-redux'


import { withStyles } from 'material-ui/styles'
import TextField from 'material-ui/TextField'
import Icon from 'material-ui/Icon'
import IconButton from 'material-ui/IconButton'

import { createTask } from '../actions'

const styles = {
  formGroup: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
}

const QuickAddForm = props => {
  const { createTask, goalId, classes } = props

  const handleSubmit = ev => {
    ev.preventDefault();
    const title = ev.target.title.value
    if (title.length > 0) createTask({ goalId, title })
    ev.target.title.value = ''
  }

  return (
    <form onSubmit={handleSubmit} className={classes.formGroup}>
      <TextField
        name='title'
        placeholder='Add new task'
      />
      <IconButton
        type='submit'
        aria-label='AddTask'>
        <Icon>add</Icon>
      </IconButton>
    </form>
  )
}

const mapDispatch = { createTask };

export default  connect(null, mapDispatch)(
                withStyles(styles)(
                  QuickAddForm
                ));
