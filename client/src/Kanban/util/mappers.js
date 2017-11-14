import { STATUS } from '../../constants'

export const goalMapper = goals => {
  const ret = {}

  Object.values(STATUS).forEach(status => {
    ret[status] = goals.filter(g => g.status === status)
  })

  return ret
}
