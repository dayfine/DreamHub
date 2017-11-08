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
        <a href='/api/auth/google'><button>Login with Google</button></a>
        <Form />
      </main>
    )
  }
}

export default App;
