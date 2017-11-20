import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Motion, spring } from 'react-motion'

import Grid from 'material-ui/Grid'
import Column from './Column'
import { taskMapper } from '../util/mappers'
import AddCard from '../../common/AddCard'
import { getTasks, createTask } from '../../Tasks'
import { fetchBoard } from '../actions'

import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

class Kanban extends Component {
  constructor(props) {
    super(props);
    this.state = { type: 'task', value: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const goalId = this.props.location.pathname.slice(-1) * 1; // TO DO: need a better way to get the path param here
    this.props.getTasks(goalId);
    this.props.fetchBoard(goalId);
  }

  handleChange(ev) {
    this.setState({ value: ev.target.value });
  }

  // handles adding new goal
  handleSubmit(ev) {
    ev.preventDefault();
    const goalId = this.props.location.pathname.slice(-1) * 1; // TO DO: need a better way to get the path param here
    this.props.createTask(goalId * 1, this.state.value);
    this.setState({ value: '' });
  }

  render () {
    const { tasks, currentGoal } = this.props
    return (
      <div>
        <h2>Goal: { currentGoal.title }</h2>
        <AddCard { ...this.state } { ...this } />
        <Grid container style={{height: 'calc(100vh - 80px)'}}>
          {tasks.map(([status, tasks]) => {
            return (
              <Grid item xs={3} key={status}>
                <Column header={status} tasks={tasks} />
              </Grid>
            )
          })}
        </Grid>
      </div>
    )
  }
}

const mapState = state => ({
  tasks: Object.entries(taskMapper(state.tasks)), // filter here
  currentGoal: state.cards
})

const mapDispatch = { getTasks, createTask, fetchBoard };

const DragContext = DragDropContext(HTML5Backend)(Kanban)

export default connect(mapState, mapDispatch)(DragContext)
