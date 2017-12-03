import React from 'react'
import { connect } from 'react-redux'

import CenterPaper from '../../common/CenterPaper'

import { withStyles } from 'material-ui/styles'
import Card, {CardContent} from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'
import Popover from 'material-ui/Popover'

import { auth } from '../actions'

const styles = theme => ({
  cardContainer: {
    padding: '32px 10px 0 10px',
    height: 360,
    display: 'flex',
    margin: -16,
    background: '#fafafa'
  },
  fieldGroup: {
    minWidth: 280,
    flex: '0 0 auto',
    padding: '16px 0'
  },
  error: {
    marginTop: 4,
    background: '#c85a54',
    color: 'white',
    textTransform: 'uppercase'
  }
})

const AuthForm = props => {
  const { name, displayName, handleSubmit, error, classes } = props

  return (
    <CenterPaper>
      <Card className={classes.cardContainer}>
        <CardContent>
          <Typography type='headline' >
            { name === 'login' ? 'Sign in to' : 'Sign up for'} DreamHub
          </Typography>

          <form onSubmit={handleSubmit} name={name}>
            <div className={classes.fieldGroup}>
              <Typography type='display1' align='center'>
                <TextField
                  name='email'
                  label='Email'
                  margin='normal'
                  fullWidth
                  required
                />
              </Typography>
              <Typography type='display1' align='center'>
                <TextField
                  name='password'
                  type='password'
                  label='Password'
                  margin='normal'
                  fullWidth
                  required
                />
              </Typography>
            </div>
            <div className='d-flex justify-content-between'>
              <Button raised type='submit' color='accent'>
                {displayName}
              </Button>
              <a href='/api/auth/google'>
                <img src={`../../public/images/gsignin.png`} style={{width: 'auto', height: 44}} />
              </a>
            </div>
            {error && error.response &&
              <Typography type='subheading' align='center' className={classes.error} >
                {error.response.data.message}
              </Typography>
            }
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
