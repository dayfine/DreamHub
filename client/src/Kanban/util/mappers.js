import { TASK_STATUS } from '../../constants'

export const taskMapper = tasks => {
  const ret = {}

  Object.values(TASK_STATUS).forEach(status => {
    ret[status] = tasks.filter(task => task.status === status)
  })

  return ret
}
