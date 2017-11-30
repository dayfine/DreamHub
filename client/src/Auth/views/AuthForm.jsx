import React from 'react'
import { connect } from 'react-redux'

import CenterPaper from '../../common/CenterPaper'

import { withStyles } from 'material-ui/styles'
import Card, {CardContent} from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import TextField from 'material-ui/TextField'

import { auth } from '../actions'

const styles = theme => ({
  // textField: {
  //   flex: '1 0 80%',
  // },
  flexContainer: {
    // display: 'flex',
    // // alignItems: 'center',
    // flexDirection: 'row',
    // // justify: 'center',
  }
})

const AuthForm = props => {
  const { name, displayName, handleSubmit, error, classes } = props

  return (
    <CenterPaper>
      <Card>
        <CardContent>
          <Typography type='headline' >
            { name === 'login' ? 'Sign in to' : 'Sign up for'} DreamHub
          </Typography>

          <form onSubmit={handleSubmit} name={name} className={classes.flexContainer}>
            <div>
              <TextField
                name='email'
                label='Email'
                margin='normal'
                fullWidth
                className={classes.textField}
              />
            </div>
            <div>
              <TextField
                name='password'
                type='password'
                label='Password'
                margin='normal'
                fullWidth
                className={classes.textField}
              />
            </div>
            <div className='row'>
              <div className='col-xs-6'>
                <button className='btn btn-primary' type='submit'>{displayName}</button>
              </div>
              <div className='col-xs-6'>
                <a href='/api/auth/google'>
                  Login With Google
                </a>
              </div>
            </div>
            {error && error.response && <div> {error.response.message} </div>}
          </form>
        </CardContent>
      </Card>
    </CenterPaper>
  )
}

const mapLogin = state => {
  return {
    name: 'login',
    displayName: 'Login',
    error: state.authenticated.err
  }
}

const mapSignup = state => {
  return {
    name: 'signup',
    displayName: 'Sign Up',
    error: state.authenticated.err
  }
}

const mapDispatch = (dispatch, ownProps) => ({
  handleSubmit (ev) {
    ev.preventDefault()
    const formName = ev.target.name
    const credentials = {
      email: ev.target.email.value,
      password: ev.target.password.value
    }

    dispatch(auth(credentials, ownProps.history, formName))
  }
})

export const Login = connect(mapLogin, mapDispatch)(withStyles(styles)(AuthForm))
export const Signup = connect(mapSignup, mapDispatch)(withStyles(styles)(AuthForm))
