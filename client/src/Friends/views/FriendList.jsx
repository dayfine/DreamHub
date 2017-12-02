import React, { Component } from 'react'
import { connect } from 'react-redux'

import FriendSearch from './FriendSearch.jsx'
import FriendView from './FriendView.jsx' 
import FriendGoalView from './FriendGoalView.jsx' 

import Typography from 'material-ui/Typography'
import Divider from 'material-ui/Divider'

class Friend extends Component{
  constructor(props){
    super(props)
    this.state = { expanded: false, friendId: 0 };
    this.handleExpandClick = this.handleExpandClick.bind(this)
  }
  
  handleExpandClick = (id) => {
    this.setState({ expanded: !this.state.expanded, friendId: id });
  }

  render(){
    const { friends } = this.props
    return (
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <FriendSearch />
            <Divider />
            <Typography type='headline'>
              My Friends
            </Typography>
            <ul>
              {friends.map(friend => {
                return (
                  <FriendView key={friend.id} 
                              friend={friend} 
                              handleExpandClick={this.handleExpandClick} 
                              expanded={this.state.expended} />
                )
              })}
            </ul>
          </div>
          <div className='col'>
            <FriendGoalView friend={friends.find(f=>f.id===this.state.friendId)}/>
          </div>
        </div>
      </div>
    )
  }
}

const mapState = state => ({
  friends: state.friends,
  friendId: 0
})

const mapDispatch = {}

export default connect(mapState, mapDispatch)(Friend)
