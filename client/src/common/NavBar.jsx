import React from 'react'
import { Link } from 'react-router-dom'

import { withStyles } from 'material-ui/styles'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import Icon from 'material-ui/Icon'
import IconButton from 'material-ui/IconButton'

const style = theme => ({
  root: {
    width: '100%',
    backgroundColor: 'black',
  },
  title: {
    fontFamily: 'Permanent Marker',
    flex: 1,
    '&:hover': {
      color: '#eee'
    }
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
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

        {props.children}
      </Toolbar>
    </AppBar>
  )
}

export default withStyles(style)(NavBar)
