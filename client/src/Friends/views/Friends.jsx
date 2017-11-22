import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addFriend, updateFriend, deleteFriend, fetchFriends, findFriend } from '../actions';

import Divider from 'material-ui/Divider';

class Friend extends Component {
  constructor (props) {
    super (props);
    this.state = {
      newFriend: {},
      search: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  // handles search friend email
  handleSubmit(ev) {
    ev.preventDefault();
    console.log('searchfor '+this.state.search)
    console.log('THESE ARE THE PROPS:', this.props);
    this.props.findFriend(this.state.search)
    // .then(res => console.log(res))
    // this.setState({ newFriend: {} });
  }
  handleChange(ev) {
    console.log(ev.target.value)
    this.setState({ search: ev.target.value });
  }
  render() {
    const { newFriend, search } = this.state;
    const { friends } = this.props;
    const { handleSubmit, handleChange } = this;

    return (
      <div className="container">
        <form onSubmit={ handleSubmit }>
          Add Friend:
          <input type="text" placeholder='Search friend by email' onChange={ handleChange } value={ search }/>
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
const mapDispatch = { addFriend, updateFriend, deleteFriend, fetchFriends, findFriend };

export default connect(mapStateToProps, mapDispatch)(Friend);
