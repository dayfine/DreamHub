import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'

import { addFriend } from '../actions'

import Divider from 'material-ui/Divider'

class FriendSearch extends Component {
  state = {
    matchedUser: {},
  }

  handleSubmit = ev => {
    ev.preventDefault()
    const email = ev.target.email.value
    return axios.get(`/api/friends/email/${email}`)
      .then(res => res.data)
      .then(user => {
        console.log(user)
        return user ? this.setState({ matchedUser: user })
                    : this.setState({ matchedUser: null })
      })
  }

  render () {
    const { matchedUser } = this.state
    const { addFriend } = this.props
    console.log(matchedUser)

    return (
      <div className='container'>
        <form onSubmit={this.handleSubmit}>
          Add Friend:
          <input
            type='text' name='email'
            placeholder='Search friend by email' />
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

const mapDispatch = { addFriend }

export default connect(null, mapDispatch)(FriendSearch)
