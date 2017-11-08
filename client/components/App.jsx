import React, { Component } from 'react';
import Form from './Form.jsx';

class App extends Component {
  constructor(){
    super();
    this.state = {

    }
  }

  render(){
    return (
      <main>
        <Form />
        <a href='/api/auth/google'><button>Login with Google</button></a>
      </main>
    )
  }
}

export default App;
