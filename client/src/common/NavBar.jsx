import React from 'react'
import { Link } from 'react-router-dom'

import { views as Auth } from '../Auth'
import ProperButton from './ProperButton'
import Checkup from '../Tasks/views/Checkup'

import { withStyles } from 'material-ui/styles'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import TextField from 'material-ui/TextField'

const styles = theme => ({
  root: {
    width: '100%',
    background: '#80cbc4',
    display: 'flex'
  },
  rootClear: {
    width: '100%',
    background: 'rgba(0, 0, 0, 0.0)',
    display: 'flex'
  },
  title: {
    fontFamily: 'Permanent Marker',
    fontSize: '2em',
    padding: '0 24px 0 0',
    '&:hover': {
      color: '#eee'
    }
  },
  textFieldRoot: {
    padding: 0,
    minWidth: 120,
    flex: '0 1 25%'
  },
  textFieldInput: {
    borderRadius: 4,
    background: theme.palette.common.white,
    border: '1px solid #eee',
    padding: '10px 12px',
    width: 'calc(100% - 24px)',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:focus': {
      borderColor: '#81d4fa',
      boxShadow: '0 0 0 0.2rem rgb(223,223,255)'
    }
  }
})

const NavBar = ({ clear, classes }) => {
  return (
    <AppBar className={clear ? classes.rootClear : classes.root}>
      <Toolbar>
        <Typography
          type='headline'
          className={classes.title}
          component={Link}
          to='/'
        >
          DreamHub
        </Typography>
        <TextField
          placeholder='Search DreamHub'
          InputProps={{
            disableUnderline: true,
            classes: {
              input: classes.textFieldInput
            }
          }}
          className={classes.textFieldRoot}
        />
        <ProperButton component={Link} to='/home'>
          Home
        </ProperButton>
        <ProperButton component={Link} to='/explore'>
          Explore
        </ProperButton>
        <div style={{flex: '1 5 15%'}} />
        <Checkup />
        <Auth />
      </Toolbar>
    </AppBar>
  )
}

export default withStyles(styles)(NavBar)
