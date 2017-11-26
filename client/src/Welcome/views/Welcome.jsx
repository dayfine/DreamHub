import React from 'react';
import Quiz from './Quiz';

//get user name from props
const Welcome = ()=> {
  const quizStyle = {
    margin: `10vh`
  }
  
  
  return (
    <div >
      <div style={quizStyle}>
        <Quiz />
      </div>
    </div>
  )
}

export default Welcome;