import React, { Component } from 'react';
import axios from 'axios'

export default class TestForm extends Component {
  constructor(props){
    super(props);
    this.state={
      name: '',
      password: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleSubmit(event){
    event.preventDefault();
    console.log('Event:', event.target.password.value);
    
    axios.post('/user')
      .then(res => res.data)
      .then(user => console.log('Here is the user?', user))
      .catch(err => console.log('Error', err.message));
  }
  
  handleChange(){
    
  }
  
  render(){
    const { handleChange, handleSubmit } = this;
    const style = {
      marginRight: 10
    }
    
    return (
      <div className="TestForm">
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="User Name" autoFocus style={style}/>
          <input type="password" name="password" placeholder="Enter Password"/><br/>
          <button style={style}>Submit</button>
        </form>
      </div>
    )
  }
}