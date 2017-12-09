import React from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import ProperButton from '../../common/ProperButton'

import { logout } from '../actions'

const storage = window.localStorage

const AuthForm = ({ onLogOut }) => {
  return storage.authToken
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

const mapDispatch = (dispatch, ownProps) => ({
  onLogOut () {
    dispatch(logout(ownProps.history))
  }
})

export default withRouter(connect(null, mapDispatch)(AuthForm))
