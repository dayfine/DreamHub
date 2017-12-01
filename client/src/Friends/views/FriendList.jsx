import React from 'react'
import { connect } from 'react-redux'


import FriendSearch from './FriendSearch.jsx'
import FriendView from './FriendView.jsx'

import Typography from 'material-ui/Typography'
import Divider from 'material-ui/Divider'

const Friend = props => {
  const { friends } = props

  return (
    <div className='container'>
      <FriendSearch />
      <Divider />
      <Typography type='headline'>
        My Friends
      </Typography>
      <ul>
        {friends.map(friend => {
          return (
            <FriendView key={friend.id} friend={friend}/>
          )
        })}
      </ul>
    </div>
  )
}

const mapState = state => ({
  friends: state.friends
})

const mapDispatch = {}

export default connect(mapState, mapDispatch)(Friend)
