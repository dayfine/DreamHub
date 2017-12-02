const peruTrip = {
  title: 'Travel to Peru',
  description: '',
  progress: 'Accomplished',
  budget: 1200,
  categoryId: 1,
  tasks: [
    { title: 'Obtain Visa', description: 'Check requirements online', status: 'Completed' },
    { title: 'Obtain Visa', description: 'Check requirements online', status: 'Completed' },
    { title: 'Book Machu Picchu Tour', description: 'Hiking Tour', status: 'Completed' },
    { title: 'Book Hotel @Cusco', description: 'Near the plaza', status: 'Completed' },
    { title: 'Research Activities in Lima', description: 'Just somewhere!', status: 'Completed' },
    { title: 'Visit doctor for vaccine', description: 'Also needs medicine for Malaria, etc', status: 'Completed' }
  ]
}

const learnML = {
  title: 'Learn Deep Learning',
  description: '',
  progress: 'Accomplished',
  budget: 300,
  categoryId: 1,
  tasks: [
    { title: 'Get a GPU', description: 'Budget under $300', status: 'Completed' },
    { title: 'Set up AWS', description: 'Get a free tier account and request access to P2', status: 'Completed' },
    { title: 'Set up Python env on AWS', description: 'Research first and use available scripts', status: 'Completed' },
    { title: 'Watch Lesson 1 Video', description: 'With notes', status: 'Completed' },
    { title: 'Do Lesson 1 Homework', description: 'Upload result to Kaggle', status: 'Completed' }
  ]
}

const apartmentSearch = {
  title: 'Find a new apartment',
  description: 'By end of July',
  progress: 'Stalled',
  tasks: [
    { title: 'Search apt rental sites', status: 'Created', priority: 50 },
    { title: 'Determine budget', status: 'Created', priority: 50, },
    { title: 'Prepare application docs', status: 'Created', priority: 25 },
    { title: 'Actively start searching', status: 'Created', priority: 25 },
    { title: 'Pick neighborhoods', status: 'Created', priority: 50 },
    { title: 'Ask around', status: 'Created', priority: 50 },
    { title: 'Check facebook and craigslist', status: 'Created', priority: 50 },
    { title: 'Make list to track locations', status: 'Created', priority: 25 }
  ]
}

const getHealthy = {
  title: 'Be healthy',
  description: 'Change your habits and do better stuff',
  progress: 'Stalled',
  tasks: [
    { title: 'Sleep 8 hours', priority: 100 },
    { title: 'Go to the gym twice a week', priority: 75 },
    { title: 'Eat better', description: 'Needs more detail', priority: 75 },
    { title: 'Limit binge watching to once a week', priority: 25 },
    { title: 'Go out to the nature', priority: 50 },
    { title: 'Prioritize family & friends more often', priority: 50 },
    { title: 'Treat yo self', description:'At least once a week', priority: 50 },
    { title: 'Take daily walks', priority: 75 },
    { title: 'Read more books', priority: 25 },
    { title: 'Meditate', priority: 25 },
    { title: 'Go to yoga', priority: 25 },
    { title: 'Review other habits', priority: 25 }
  ]
}

const amsterdamTrip = {
  title: 'Amsterdam Trip',
  description: 'Visiting Netherlands',
  progress: 'Abandoned',
  categoryId: 0,
  tasks: [
    { title: 'Check flights', description: 'check Google Flights', status: 'In Progress', priority: 100 },
    { title: 'Book plane ticket', status: 'Created', priority: 75, goalId: 1, },
    { title: 'Book stay', description: 'check airbnb & hotels', status: 'Created', priority: 75 },
    { title: 'Take vacation time', description: 'Talk to boss', status: 'Later', priority: 75 },
    { title: 'Pick 3 activities', status: 'Later', priority: 25 },
    { title: 'Commit to this goal', status: 'In Progress', priority: 50 },
    { title: 'Dream about it', status: 'In Progress', priority: 50 },
    { title: 'Start planning', status: 'Completed', priority: 50 }
  ]
}

module.exports = [ peruTrip, learnML ]
