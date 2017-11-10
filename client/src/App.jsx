import React, { Component } from 'react'
import { views as Kanban } from './Kanban'

class App extends Component {
  constructor () {
    super()
  }

  componentDidMoun () {

  }

  render () {
    return (
      <main>
        <Kanban />
        <a href='/api/auth/google'><button>Login with Google</button></a>
      </main>
    )
  }
}

export default App
