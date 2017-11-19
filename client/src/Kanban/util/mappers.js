import { STATUS } from '../../constants'


export const taskMapper = tasks => {
  const ret = {}

  Object.values(STATUS).forEach(status => {
    ret[status] = tasks.filter(task => task.status === status)
  })

  return ret
}
