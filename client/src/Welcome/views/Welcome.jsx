import React from 'react';
import Quiz from './Quiz';

//get user name from props
const Welcome = ()=> {
  const questionStyle = {
    backgroundColor: 'piunk'
  }
  return (
    <div style={questionStyle} >
      <h1>Welcome,</h1>
      <Quiz />
    </div>
  )
}

export default Welcome;