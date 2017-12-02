import React from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import ProperButton from '../../common/ProperButton'

import { logout } from '../actions'

const AuthForm = ({ authenticated, onLogOut }) => {
  return authenticated
    ? (
      <div style={{display: 'inline-flex', flexGrow: 2, justifyContent: 'flex-end'}}>
        <ProperButton component={Link} to='/me'>
          My Profile
        </ProperButton>
        <ProperButton onClick={onLogOut}>
          Logout
        </ProperButton>
      </div>
    ) : (
      <div style={{display: 'inline-flex', flexGrow: 2, justifyContent: 'flex-end'}}>
        <ProperButton component={Link} to='/login'>
          Sign In
        </ProperButton>
        <ProperButton component={Link} to='/signup'
        >
          Sign Up
        </ProperButton>
      </div>

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

export default withRouter(connect(mapState, mapDispatch)(AuthForm))
