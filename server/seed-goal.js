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

module.exports = [ peruTrip, learnML ]
