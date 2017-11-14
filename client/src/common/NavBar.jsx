import React from 'react'

import { withStyles } from 'material-ui/styles'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import Icon from 'material-ui/Icon'
import IconButton from 'material-ui/IconButton'

const style = theme => ({
  root: {
    width: '100%',
    color: '#fff'
  },
  flex: {
    flex: 1
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
        <Typography type='display1' color='inherit' className={classes.flex}>
          Welcome to Capstone

        </Typography>
        <Button color='inherit'>Login</Button>
      </Toolbar>
    </AppBar>
  )
}

export default withStyles(style)(NavBar)
