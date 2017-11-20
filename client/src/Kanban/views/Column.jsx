import React, { Component } from 'react';
import { connect } from 'react-redux';

import Card from './Card';

import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import Typography from 'material-ui/Typography';

import { DropTarget } from 'react-dnd';
import { DragItemTypes } from '../../constants';
import { actions } from'../../Tasks';

const { editTask } = actions;

const columnTarget = {
  drop (props, monitor) {
    const oldTask = monitor.getItem()
    const status = props.header
    const updatedTask = Object.assign({}, oldTask, {status})
    props.editTask(updatedTask)
  }
};

const collect = (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver()
});

const Column = props => {
  const { header, tasks, connectDropTarget, isOver } = props
  return connectDropTarget(
    <div className="swimlane-container">
      <Paper className="swimlane">
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
          return (<Card key={ task.title } task={ task } />)
        })}
      </Paper>
    </div>
  )
}

const mapDispatch = ({ editTask });

const DropTargetComp = DropTarget(DragItemTypes.CARD, columnTarget, collect)(Column);

export default connect(null, mapDispatch)(DropTargetComp);
