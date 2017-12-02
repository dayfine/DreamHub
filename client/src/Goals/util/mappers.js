import { updateGoal } from '../actions'

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
    let lastUpdated, completed = true
    for (let task of tasks) {
      if (task.goalId === g.id) {

      }
    }
  })

  return goals
}
