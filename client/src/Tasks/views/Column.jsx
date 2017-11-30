import React, { Component } from 'react';
import { connect } from 'react-redux';

import Card from './Card';

import { withStyles } from 'material-ui/styles'
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import Typography from 'material-ui/Typography';

import { DropTarget } from 'react-dnd'
import { DragItemTypes } from '../../constants'
import { editTask } from '../../Tasks/actions'


const styles = theme => ({
  paper: {
    backgroundColor: '#c9c9c9',
  },
})

const columnTarget = {
  drop (props, monitor) {
    const oldTask = monitor.getItem()
    const status = props.header
    props.editTask({...oldTask, status})
  }
};

const collect = (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver()
});

// Used by Kanban
const Column = props => {
  const { header, tasks, connectDropTarget, classes } = props
  return connectDropTarget(
    <div className="swimlane-container">
      <Paper classes={{root: "swimlane"}} className={classes.paper}>
        <div className="swimlane-hed">
          <Typography type='headline' >
            { tasks.length } Tasks
          </Typography>
          <Typography type='display1' >
            <div>{ header }</div>
          </Typography>
        </div>
        <Divider light />
        {tasks.map(task => {
          return (<Card key={task.id} task={task} />)
        })}
      </Paper>
    </div>
  )
}

const mapDispatch = ({ editTask });

export default  connect(null, mapDispatch)(
                DropTarget(DragItemTypes.CARD, columnTarget, collect)(
                withStyles(styles)(
                  Column
                )))
