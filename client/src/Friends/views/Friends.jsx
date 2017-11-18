import React, { Component } from 'react';

class Form extends Component {
  constructor(){
    super();
    this.state = {
      friends: {}
    }
  }

  render(){
    return (
      <div>
      here
        <form>
          Add Friend:
          <input type="text" placeholder='Search friend by email'/>
          <button>Submit</button>
        </form>
        <br />
        <div>
          My Friends
        </div>
      </div>
    )
  }
}

export default Form;
