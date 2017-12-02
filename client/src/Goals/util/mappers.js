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
