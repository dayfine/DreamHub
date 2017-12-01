import { TASK_STATUS } from '../../constants'

export const GoalTaskMapper = (tasks, goalId) => {
  const ret = {}
  const _tasks = tasks.filter(t => t.goalId === goalId)

  Object.values(TASK_STATUS).forEach(status => {
    ret[status] = _tasks.filter(task => task.status === status)
  })

  return ret
}

export const MapGoalToTasks = goals => [].concat(...goals.map(g => g.tasks))

// Not used at the moment
export const MapTaksToGoals = (task, goals) => {
  return goals
}

// For task status update
export const TaskStatusMapper = {
  [TASK_STATUS.CREATED]: [
    { text: 'Started working on it', status: TASK_STATUS.IN_PROGRESS },
    { text: 'Finished it, yeh!', status: TASK_STATUS.COMPLETED },
    { text: 'Maybe later', status: TASK_STATUS.LATER },
  ],
  [TASK_STATUS.LATER]: [
    { text: 'I am working on it', status: TASK_STATUS.IN_PROGRESS },
    { text: 'I got it done', status: TASK_STATUS.COMPLETED },
  ],
  [TASK_STATUS.IN_PROGRESS]: [
    { text: 'Still working on it', status: TASK_STATUS.IN_PROGRESS },
    { text: 'Done, yeeeeh!', status: TASK_STATUS.COMPLETED },
    { text: 'Taking a break from it', status: TASK_STATUS.LATER },
  ]
}

export const stalledTasksMapper = tasks => {
  console.log('In mapper', tasks)
  const timeDiffToDay = task => {
    return (new Date() - new Date(task.updatedAt)) / 1000 / 3600 / 24
  }

  return tasks.filter(t => {
    return t.status !== TASK_STATUS.COMPLETED &&
           timeDiffToDay(t) > 0 // Dev only, should be 3
  })
}
