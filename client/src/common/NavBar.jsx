import React from 'react'
import { Link } from 'react-router-dom'

import { views as Auth } from '../Auth'
import ProperButton from './ProperButton'
import Checkup from '../Tasks/views/Checkup'

import { withStyles } from 'material-ui/styles'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import Icon from 'material-ui/Icon'
import IconButton from 'material-ui/IconButton'
import TextField from 'material-ui/TextField'

const styles = theme => ({
  root: {
    width: '100%',
    backgroundColor: 'black',
    display: 'flex'
  },
  title: {
    fontFamily: 'Permanent Marker',
    fontSize: '1.75em',
    padding: '0 24px 0 0',
    '&:hover': {
      color: '#eee'
    }
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 16
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
      boxShadow: '0 0 0 0.2rem rgb(223,223,255)',
    },
  },
})

const NavBar = props => {
  const { classes } = props
  return (
    <AppBar position='fixed' className={classes.root}>
      <Toolbar>
        <IconButton className={classes.menuButton} color='inherit' aria-label='Menu'>
          <Icon>menu</Icon>
        </IconButton>
        <Typography
          type='headline'
          color='inherit'
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
              input: classes.textFieldInput,
            },
          }}
          className={classes.textFieldRoot}
        />
        <ProperButton color='contrast'>
          Goals
        </ProperButton>
        <ProperButton color='contrast'>
          Explore
        </ProperButton>
        <div style={{flex: '1 5 20%'}} />
        <Checkup />
        <Auth />
      </Toolbar>
    </AppBar>
  )
}

export default withStyles(styles)(NavBar)
