import React, { Component } from 'react';
import { views as GoalForm } from './Goals';

class App extends Component {
  constructor(){
    super();
  }

  componentDidMount(){

  }

  render(){
    return (
      <main>
        <GoalForm />
        <a href='/api/auth/google'><button>Login with Google</button></a>
      </main>
    )
  }
}

export default App;
