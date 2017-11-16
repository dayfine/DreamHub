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
      <main>
        <h1>Do It!</h1>
        {
          // TO DO:
          // if user not logged in: <a href='/api/auth/google'><button>Login with Google</button></a> else:
          <GoalForm userId={ 1 } /> // userId hardcoded. need to change this.
        }
      </main>
    )
  }
}

export default App;
