import React from 'react'
import Paper from 'material-ui/Paper'
import { withStyles } from 'material-ui/styles'

const styles = {
  center: {
    flex: '0 0 auto',
    textTransform: 'none',
    margin: '20px auto 0 auto',
    fontSize: '1em',
    backgroundColor: '#f1f1f1'
  }
}

const CenterPaper = props => {
  const {classes, ...rest} = props
  return (
    <Paper className={classes.center} {...rest}>
      {props.children}
    </Paper>
  )
}

export default withStyles(styles)(CenterPaper)
