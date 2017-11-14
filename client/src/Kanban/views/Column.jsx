import React, { Component } from 'react'
import Card from './Card'

const Column = ({header, goals}) => {
  return (
    <div>
      <div>{header}</div>
      {goals.map(goal => {
        return (<Card goal={goal} />)
      })}
    </div>
  )
}

export default Column
