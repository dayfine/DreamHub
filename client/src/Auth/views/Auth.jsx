import React from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import ProperButton from '../../common/ProperButton'

import { logout } from '../actions'

const AuthForm = ({ authenticated, onLogOut }) => {
  return authenticated
    ? (
      <ProperButton color='contrast' onClick={onLogOut}>
        Logout
      </ProperButton>
    ) : (
      <div style={{display: 'inline-flex', flexGrow: 2}}>
        <ProperButton
          component={Link}
          to='/login'
          color='contrast'
        >
          Sign In
        </ProperButton>
        <ProperButton
          component={Link}
          to='/signup'
          color='contrast'
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
