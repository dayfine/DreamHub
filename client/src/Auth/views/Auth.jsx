import React from 'react'
import { connect } from 'react-redux'
import Button from 'material-ui/Button'

import { logout } from '../actions'

const AuthForm = ({ authenticated, onLogOut }) => {
  return authenticated
    ? (
      <Button color='contrast' onClick={onLogOut}>
        Logout
      </Button>
    ) : (
      <Button color='contrast' href='//localhost:3001/api/auth/google'>
        Login with Google
      </Button>
    )
}

const mapState = state => ({
  authenticated: state.authenticated
})

const mapDispatch = (dispatch, ownProps) => ({
  onLogOut () {
    dispatch(logout(ownProps.history))
  }
})

export default connect(mapState, mapDispatch)(AuthForm)
