import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'

import { addFriend } from '../actions'
import { withStyles } from 'material-ui/styles'

import red from 'material-ui/colors/red'
import Divider from 'material-ui/Divider'

import UserCard from '../../User/views/UserCard'

const styles = {
  warning: {
    color: red[500]
  }
}

class FriendSearch extends Component {
  state = {
    matchedUser: null,
    error: null
  }

  handleAdd = () => {

  }

  handleSubmit = ev => {
    ev.preventDefault()
    const email = ev.target.email.value.trim()
    const notFound = new Error('No match is found.')
    if (email === '') {
      const err = new Error("You didn't enter anything.")
      return this.setState({ error: err})
    }

    return axios.get(`/api/friends/email/${email}`)
      .then(res => res.data)
      .then(user => {
        console.log(user, typeof user)
        return user ? this.setState({ matchedUser: user })
                    : this.setState({ error: notFound })
      })
  }

  render () {
    const { matchedUser, error } = this.state
    const { addFriend, classes } = this.props

    return (
      <div className='container'>
        <form onSubmit={this.handleSubmit}>
          Add Friend:
          <input
            type='text' name='email'
            placeholder='Search friend by email' />
          <button>Submit</button>
        </form>
        {matchedUser && (
          <UserCard user={matchedUser} goals={[]}/>
        )}
        {error && (
          <div className={classes.warning}>
            {error.message}
          </div>
        )}
      </div>
    )
  }
}

const mapDispatch = { addFriend }

export default connect(null, mapDispatch)(
                withStyles(styles)(
                  FriendSearch
                ))
