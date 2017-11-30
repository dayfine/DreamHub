import React from 'react'
import Button from 'material-ui/Button'
import { withStyles } from 'material-ui/styles'

const styles = {
  proper: {
    flex: '0 0 auto',
    textTransform: 'none',
    fontWeight: 700,
    fontSize: '1em',
    '&:hover': {
      color: '#ddd'
    }
  }
}

const ProperButton = props => {
  const {classes, ...rest} = props
  return (
    <Button className={classes.proper} {...rest}>
      {props.children}
    </Button>
  )
}

export default withStyles(styles)(ProperButton)
