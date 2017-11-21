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

export const MapTaksToGoals = (task, goals) => {
  return goals
}
