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
    error: null,
    search: '',
  }

  handleAdd = friend => {
    this.props.addFriend(friend)
    this.setState({ matchedUser: null, error: null, search: '' })
  }

  handleChange = ev => {
    this.setState({ search: ev.target.value })
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
        return user ? this.setState({ matchedUser: user })
                    : this.setState({ error: notFound })
      })
  }

  renderAddButton = matchedUser => {
    const { friends } = this.props
    const added = friends.find(f => f.id === matchedUser.id)
    return added
      ? (
        <span>Already a friend</span>
      ) : (
        <button onClick={this.handleAdd.bind(this, matchedUser)}>
          Add
        </button>
      )
  }

  render () {
    const { matchedUser, error, search } = this.state
    const { classes } = this.props

    return (
      <div className='container'>
        <form onSubmit={this.handleSubmit}>
          Add Friend:
          <input
            type='text'
            name='email'
            value={ search }
            onChange={ this.handleChange }
            placeholder='Search friend by email' />
          <button>Submit</button>
        </form>
        {matchedUser && (
          <div>
            {this.renderAddButton(matchedUser)}
            <UserCard user={matchedUser} goals={[]}/>
          </div>
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
const mapState = state => ({
  friends: state.friends
})

const mapDispatch = { addFriend }

export default connect(mapState, mapDispatch)(
                withStyles(styles)(
                  FriendSearch
                ))
