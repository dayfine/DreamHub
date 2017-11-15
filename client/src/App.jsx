import React, { Component } from 'react';
import { views as GoalForm } from './Goals';
import store, { getGoals } from './Store';

class App extends Component {
  constructor(){
    super();
  }

  componentDidMount(){
    store.dispatch(getGoals());
  }

  render(){
    return (
      <main className="container-fluid">
        <h1>Get It Done</h1>
        <GoalForm />
        <a href='/api/auth/google'><button>Login with Google</button></a>
      </main>
    )
  }
}

export default App;
