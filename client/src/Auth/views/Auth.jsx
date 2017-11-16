import React from 'react'
import { connect } from 'react-redux'

const AuthForm = props => {
  return (
    <a href='//localhost:3001/api/auth/google'><button>Login with Google</button></a>
  )
}

const mapState = state => ({
  user: state.currentUser
})

export default connect(mapState)(AuthForm)
