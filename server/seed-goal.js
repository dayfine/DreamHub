const peruTrip = {
  title: 'Travel to Peru',
  description: '',
  progress: 'Accomplished',
  budget: 1200,
  userId: 3,
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
  userId: 3,
  categoryId: 1,
  tasks: [
    { title: 'Get a GPU', description: 'Budget under $300', status: 'Completed' },
    { title: 'Set up AWS', description: 'Get a free tier account and request access to P2', status: 'Completed' },
    { title: 'Set up Python env on AWS', description: 'Research first and use available scripts', status: 'Completed' },
    { title: 'Watch Lesson 1 Video', description: 'With notes', status: 'Completed' },
    { title: 'Do Lesson 1 Homework', description: 'Upload result to Kaggle', status: 'Completed' }
  ]
}

const loseWeight = {
  title: 'Lose at least 80 lbs of fat',
  description: '',
  progress: 'In Progress',
  budget: null,
  userId: 4,
  categoryId: 1,
  tasks: [
    { title: 'Go to gym', description: 'Go to gym at least three times a week', status: 'In Progress' },
    { title: 'Get food journaling app', description: 'Download LoseIt!', status: 'Completed' },
    { title: 'Count calories', description: 'Count calories for every meal', status: 'In Progress' },
    { title: 'Find a Meet Up group to join', description: 'Research groups and find one nearby', status: 'In Progress' }
  ]
}

const learnFrench = {
  title: 'Learn French fluently',
  description: '',
  progress: 'In Progress',
  budget: null,
  userId: 5,
  categoryId: 1,
  tasks: [
    { title: 'Download French app', description: 'Download Duolingo', status: 'Completed' },
    { title: 'Practice', description: 'Complete a section every day', status: 'In Progress' },
    { title: 'Practive vocabulary', description: 'Find a list of most common French words', status: 'Completed' },
    { title: 'Practice pronunciation', description: 'Find YouTube videos to practice pronunciation', status: 'In Progress'}
  ]
}

const travelUSA = {
  title: 'Travel to each of the 50 states',
  description: '',
  progress: 'In Progress',
  budget: 2000,
  userId: 6,
  categoryId: 1,
  tasks: [
    { title: 'Research each state', description: 'Find out points of interest I want to visit in each state', status: 'Completed' },
    { title: 'Buy a map to track places visited', description: 'Use pins on the map to show those locations', status: 'Completed' },
    { title: 'Budget', description: 'Save at least $50 a week to put into budget fund', status: 'In Progress' },
    { title: 'Find travel buddy Meet Up group', description: 'Find a local group of people who want to start planning a traip', status: 'Completed' }
  ]
}

module.exports = [ peruTrip, learnML, loseWeight, learnFrench, travelUSA ]
