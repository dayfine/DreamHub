import React from 'react';
import Quiz from './Quiz';

//get user name from props
const Welcome = ()=> {
  const quizStyle = {
    margin: `10vh`
  }
  
  
  return (
    <div >
      <h1>Welcome,</h1>
      <div style={quizStyle}>
        <Quiz />
      </div>
    </div>
  )
}

export default Welcome;