import React, { Component } from 'react';

const AddCard = ({ value, type, handleChange, handleSubmit }) => {
  return (
    <form onSubmit={ handleSubmit }>
      <input type="text" value={ value } onChange={ handleChange } placeholder={ `Add new ${ type }...` } className="goal-input" />
      <button type="submit" className="btn btn-sm btn-primary">+</button>
    </form>
  )
}

export default AddCard;
