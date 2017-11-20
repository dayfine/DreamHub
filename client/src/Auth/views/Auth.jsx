import React from 'react'
import { connect } from 'react-redux'
import Button from 'material-ui/Button'

const AuthForm = props => {
  const loggedIn = !!props.user.id
  const form = {
    caption: loggedIn ? 'Logout' : 'Login with Google',
    href: loggedIn ? '/api/auth/logout' : '//localhost:3001/api/auth/google'
  }
  return (
    <Button color='contrast' href={form.href}>
      {form.caption}
    </Button>
  )
}

const mapState = state => ({
  user: state.currentUser
})

export default connect(mapState)(AuthForm)
