import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addFriend, updateFriend, deleteFriend, fetchFriends, findFriend, removeFriend } from '../actions'

import Divider from 'material-ui/Divider'

class Friend extends Component {
  state = {
    newFriend: {},
    search: ''
  }

  handleSubmit = ev => {
    ev.preventDefault()
    this.props.findFriend(this.state.search)
    // .then(res => console.log(res))
    // this.setState({ newFriend: {} });
  }
  handleChange = ev => {
    console.log(ev.target.value)
    this.setState({ search: ev.target.value })
  }
  handleDelete = id => {
    this.props.removeFriend(id)
  }
  render () {
    const { newFriend, search } = this.state
    const { friends } = this.props
    const { handleSubmit, handleChange, handleDelete} = this

    return (
      <div className='container'>
        <form onSubmit={handleSubmit}>
          Add Friend:
          <input type='text' placeholder='Search friend by email' onChange={handleChange} value={search} />
          <button>Submit</button>
        </form>
        <br />
        <div>
          My Friends
        </div>

        <ul>
          {friends.map(friend => {
            return (
              <li key={friend.id}>
                <h2>{friend.name}</h2>
                <h3>{friend.email}</h3>
                {friend.goals.map(goal => {
                  return (
                    <div key={goal.id}>
                      <h4>{goal.title}</h4>
                      <h5>>>> {goal.description}</h5>
                    </div>
                  )
                })}
                <button
                  onClick={handleDelete.bind(this, friend.id)}
                  className='btn btn-sm btn-danger'>Delete Friend</button>
                <Divider light />
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  friends: state.friends
})
const mapDispatch = { addFriend, updateFriend, deleteFriend, fetchFriends, findFriend, removeFriend }

export default connect(mapStateToProps, mapDispatch)(Friend)
