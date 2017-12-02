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

const runNYCMarathon = {
  title: 'Run NYC Marathon',
  description: '',
  progress: 'Accomplished',
  budget: 1500,
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

module.exports = [ peruTrip, learnML, runNYCMarathon, wedding, fantasyDraft, resellSneakers ]
