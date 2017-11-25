import React from 'react'
import { connect } from 'react-redux'
import Button from 'material-ui/Button'

const AuthForm = ({ authenticated }) => {
  const form = {
    caption: authenticated ? 'Logout' : 'Login with Google',
    href: authenticated ? '/api/auth/logout' : '//localhost:3001/api/auth/google'
  }
  return (
    <Button color='contrast' href={form.href}>
      {form.caption}
    </Button>
  )
}

const mapState = state => ({
  authenticated: state.authenticated
})

export default connect(mapState)(AuthForm)
