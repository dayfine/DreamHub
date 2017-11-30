import React from 'react'
import { connect } from 'react-redux'
import { fetchFriends, removeFriend } from '../actions'
import FriendSearch from './FriendSearch.jsx'
import FriendView from './FriendView.jsx'

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
              <FriendView friend={friend}/> 
              <button
                onClick={removeFriend.bind(this, friend.id)}
                className='btn btn-sm btn-danger'
              >
                Delete Friend
              </button>
              <br/><br/>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

const mapState = state => ({
  friends: state.friends
})

const mapDispatch = { fetchFriends, removeFriend }

export default connect(mapState, mapDispatch)(Friend)
