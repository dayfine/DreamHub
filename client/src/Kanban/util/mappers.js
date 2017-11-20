import { TASK_STATUS } from '../../constants'

export const goalTaskMapper = goals => {
  const ret = {}
  const tasks = [].concat(...goals.map(g => g.tasks))

  Object.values(TASK_STATUS).forEach(status => {
    ret[status] = tasks.filter(task => task.status === status)
  })

  return ret
}
