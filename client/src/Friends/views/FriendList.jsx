import React from 'react'
import { connect } from 'react-redux'
import { fetchFriends, removeFriend } from '../actions'
import FriendSearch from './FriendSearch.jsx'

import Divider from 'material-ui/Divider'

const Friend = props => {
  const { friends, removeFriend } = props

  return (
    <div className='container'>
      <FriendSearch />
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
                onClick={removeFriend.bind(this, friend.id)}
                className='btn btn-sm btn-danger'
              >
                Delete Friend
              </button>
              <Divider light />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

const mapStateToProps = state => ({
  friends: state.friends
})

const mapDispatch = { fetchFriends, removeFriend }

export default connect(mapStateToProps, mapDispatch)(Friend)
