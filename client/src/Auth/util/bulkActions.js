import { setGoals } from '../../Goals/actions'
import { setTasks } from '../../Tasks/actions'
import { setUser, removeUser } from '../../User/actions'
import { setFriends } from '../../Friends/actions'
import { MapGoalToTasks } from '../../Tasks/util/mappers'

export const setData = user => dispatch => {
  dispatch(setUser(user))
  dispatch(setGoals(user.goals))
  dispatch(setTasks(MapGoalToTasks(user.goals)))
  dispatch(setFriends(user.friends))
}

export const resetData = () => dispatch => {
  dispatch(removeUser())
  dispatch(setGoals([]))
  dispatch(setTasks([]))
  dispatch(setFriends([]))
}
