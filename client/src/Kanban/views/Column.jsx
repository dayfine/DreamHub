import React, { Component } from 'react'
import Card from './Card'

const Column = ({header, goals}) => {
  return (
    <div>
      <div>{header}</div>
      <Card />
    </div>
  )
}

export default Column
