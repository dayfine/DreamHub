import React from 'react'
import { withStyles } from 'material-ui/styles'

const styles = {
  root: {
    position: 'static',
    bottom: 0,
    height: 40,
    background: '#ccc',
    color: 'white'
  },
  rootClear: {
    position: 'static',
    bottom: 0,
    height: 40,
    background: 'rgba(0, 0, 0, 0.0)'
  },
  flexGroup: {
    padding: 5,
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

const Footer = ({ clear, classes }) => {
  return (
    <footer className={clear ? classes.rootClear : classes.root}>
      <div className={classes.flexGroup}>
        <a href='https://github.com/dayfine/DreamHub' target='blank'>
          <img
            className={classes.logo}
            src={`/public/images/githublogo${clear ? '-dark' : ''}.png`}
            alt='Github Repo'
          />
        </a>
        <span className={classes.names}>Built by: Anthony, Burcu, Di, and Jerry</span>
      </div>
    </footer>
  )
}

export default withStyles(styles)(Footer)
