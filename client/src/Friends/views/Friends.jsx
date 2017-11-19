import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addFriend, updateFriend, deleteFriend, fetchFriends, findFriend} from '../actions';

class Friend extends Component {
  constructor(props){
    super(props);
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
    .then(res => console.log(res))
    // this.setState({ newFriend: {} });
  }
  handleChange(ev) {
    console.log(ev.target.value)
    this.setState({ search: ev.target.value });
  }
  render(){
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
                <li className="friend-item">
                name 
                </li>
                  
        </ul>
      </div>
    )
  }
}

const mapStateToProps = ({ newFriends }) => {
  return { newFriends };
};
const mapDispatch = { addFriend, updateFriend, deleteFriend, fetchFriends, findFriend };

export default connect(mapStateToProps, mapDispatch)(Friend);
