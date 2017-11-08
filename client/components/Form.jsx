import React, { Component } from 'react';

class Form extends Component {
  constructor(){
    super();
    this.state = {
      message: ''
    }
    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleSubmit(event){
    event.preventDefault();
    console.log('Submit Event target value:', event.target.value);
  }
  
  handleChange(event){
    console.log('Change event', event.target.value);
    this.setState({message: event.target.value});

  }
  
  render(){
    const { handleSubmit, handleChange } = this;
    const { message } = this.state
    return (
      <div>
        <form onSubmit={ handleSubmit }>
          <input type="text" placeholder='Write your story' autoFocus onChange={ handleChange }/>
          <button>Submit</button>
        </form>
        <br />
        <div>{ message }</div>
      </div>
    )
  }
}

export default Form;