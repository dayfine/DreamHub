import React, { Component } from 'react'
import { connect } from 'react-redux'

import Grid from 'material-ui/Grid'
import Column from './Column'

import { GoalTaskMapper } from '../util/mappers'
import AddCard from '../../common/AddCard'
import { getGoalTasks, createTask } from '../actions'

import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

class Kanban extends Component {
  constructor(props) {
    super(props);
    this.state = { type: 'task', value: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  // componentDidMount() {
  //   const goalId = this.props.location.pathname.slice(-1);
  //   this.props.getGoalTasks(goalId);
  // }

  handleChange(ev) {
    this.setState({ value: ev.target.value });
  }

  // handles adding new goal
  handleSubmit(ev) {
    ev.preventDefault();
    this.props.createTask(1, this.state.value); // TODO: goalId is hardcoded
    this.setState({ value: '' });
  }

  render () {
    const { tasks } = this.props
    return (
      <div>
        <h2>Goal: Travel</h2> {/*TODO: goal is hardcoded*/}
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

const mapState = (state, ownProps) => {
  const { goalId } = ownProps.match.params
  return {
    tasks: Object.entries(GoalTaskMapper(state.tasks, +goalId)) // filter here
  }
}

const mapDispatch = { getGoalTasks, createTask };

const DragContext = DragDropContext(HTML5Backend)(Kanban)

export default connect(mapState, mapDispatch)(DragContext)
