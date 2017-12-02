const peruTrip = {
  title: 'Travel to Peru',
  description: '',
  progress: 'Accomplished',
  budget: 1200,
  userId: 2,
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
  userId: 2,
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

const runNYCMarathon = {
  title: 'Run NYC Marathon',
  description: '',
  progress: 'Accomplished',
  budget: 1500,
  userId: 3,
  categoryId: 3,
  tasks: [
    { title: 'Register for NYRR Membership', description: 'Apply to become a registered runner', status: 'Completed' },
    { title: 'Select 9 different races', description: 'Apply for 9 races in order to qualify for NYC Marathon', status: 'Completed' },
    { title: 'Run New York Mini 10K', description: 'Prepare and run for New York Mini 10K', status: 'Completed' },
    { title: 'Run Brooklyn R-U-N 5K', description: 'Prepare and run for Brooklyn R-U-N 5K', status: 'Completed' },
    { title: 'Run Manhattan Half Marathon', description: 'Prepare and run for Manhattan Half Marathon', status: 'Completed' },
    { title: 'Run Brooklyn Half Marathon', description: 'Prepare and run for Brooklyn Half Marathon', status: 'Completed' },
    { title: 'Run Queens Half Marathon', description: 'Prepare and run for Queens Half Marathon', status: 'Completed' },
    { title: 'Run NYRR Midnight Run', description: 'Prepare and run for NYRR Midnight Run', status: 'Completed' },
    { title: 'Run NYRR Retro 5-Miler', description: 'Prepare and run for NYRR Retro 5-Miler', status: 'Completed' },
    { title: 'Run Bronx 10 Mile Marathon', description: 'Prepare and run for Bronx 10 Mile Marathon', status: 'Completed' },
    { title: 'Run Staten Island Half Marathon', description: 'Prepare and run for Staten Island Half Marathon', status: 'Completed' },
    { title: 'Run TCS New York City Marathon', description: 'Prepare and run TCS New York City Marathon', status: 'Completed' }
  ]
}

const wedding = {
  title: 'Wedding planning',
  description: '',
  progress: 'Accomplished',
  budget: 5000,
  userId: 3,
  categoryId: 5,
  tasks: [
    { title: 'Research DJ / MC', description: 'Decide who should DJ and MC the event', status: 'Completed' },
    { title: 'Research Venue', description: 'Decide location of wedding', status: 'Completed' },
    { title: 'Research Food and Drinks', description: 'Decide what types of food to serve at wedding', status: 'Completed' },
    { title: 'Research suits wedding dress', description: 'Find the perfect outfit for wedding', status: 'Completed' },
    { title: 'Send out invitations', description: 'Let everyone know about your wedding', status: 'Completed' }
  ]
}

const fantasyDraft = {
  title: 'Draft the best fantasy team',
  description: '',
  progress: 'Accomplished',
  budget: 500,
  userId: 3,
  categoryId: 5,
  tasks: [
    { title: 'Research sports team players at position', description: 'Calculate which players are the best at which position', status: 'Completed' },
    { title: 'Decide time and location of the draft', description: 'Decide time and location of the draft', status: 'Completed' },
    { title: 'Meet at draft and select your players on your turn', description: 'On your turn, select best available player', status: 'Completed' },
    { title: 'Make the playoffs', description: 'Hope that you make the playoffs based on your record', status: 'Completed' },
    { title: 'Win the league', description: 'Win league and get paid winnings', status: 'Completed' }
  ]
}

const resellSneakers = {
  title: 'Sell Yeezys',
  description: '',
  progress: 'Accomplished',
  budget: 1000,
  userId: 3,
  categoryId: 5,
  tasks: [
    { title: 'Set alarm for reminder', description: 'Need to set up computers to purchase Yeezys', status: 'Completed' },
    { title: 'Research which online store sites', description: 'Find which online markets will have sneakers for sale', status: 'Completed' },
    { title: 'Purchase Yeezys', description: 'Buy sneakers online', status: 'Completed' },
    { title: 'Take pictures of sneakers', description: 'Prepare pictures of product you will sell', status: 'Completed' },
    { title: 'List on eBay', description: 'List Yeezys on eBay for 4x the amount you paid', status: 'Completed' },
    { title: 'Prepare shipment to buyer', description: 'Double box Yeezys and pre-purchase postage', status: 'Completed' },
    { title: 'Drop off at Post Office', description: 'Drop off package at Post Office', status: 'Completed' }
  ]
}

module.exports = [ 
  peruTrip, learnML, runNYCMarathon, wedding, fantasyDraft, resellSneakers, 
  loseWeight, learnFrench, travelUSA 
]
