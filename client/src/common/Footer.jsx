import React from 'react'
import { withStyles } from 'material-ui/styles'

const styles = {
  footer: {
    position: 'static',
    bottom: 0,
    height: 40,
    backgroundColor: '#ccc',
    padding: 5,
    color: 'white',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  logo: {
    height: 32
  },
  names: {
    padding: '0 10px'
  }
}

const Footer = ({classes}) => {
  return (
    <footer className={classes.footer}>
      <a href='https://github.com/dayfine/DreamHub' target='blank'>
        <img
          className={classes.logo}
          src='/public/images/githublogo.png'
          alt='Github Repo'
        />
      </a>
      <span className={classes.names}>Built by: Anthony, Burcu, Di, and Jerry</span>
    </footer>
  )
}

export default withStyles(styles)(Footer)
