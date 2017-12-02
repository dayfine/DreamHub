import { updateGoal } from '../actions'
import { TASK_STATUS, GOAL_PROGRESS } from '../../constants'

export const mapCategoryToGoal = (categories, goals) => {
  let cat
  goals.forEach(g => {
    cat = categories.find(c => c.id === g.categoryId)
    g.category = cat ? cat.name : 'Uncategorized'
  })

  return goals
}

// Update Goal
export const MapTaksToGoals = (task, goals) => {
  return goals
}

// Map tasks to goal while after for status
export const goalProgressMapper = (goals, tasks) => {
  goals.forEach(g => {
    g.tasks = tasks.filter(task => task.goalId === g.id)

    let ready = g.tasks.every(t => TASK_STATUS.COMPLETED)

    if (ready) {
      updateGoal({...g, progress: GOAL_PROGRESS.READY})
    }

    // lastUpdated, ready = true
  })

  return goals
}
