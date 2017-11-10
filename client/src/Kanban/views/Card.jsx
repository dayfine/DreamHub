import React from 'react'
import { connect } from 'react-redux'

import { withStyles } from 'material-ui/styles'
import Card, { CardContent, CardHeader } from 'material-ui/Card'

const styles = {
  agileCard: {
    width: 150,
    height: 120
  }
}

const AgileCard = props => {
  const { classes } = props
  return (
    <div className={classes.agileCard}>
      <Card>
        <CardContent>
            every card shows a goal
          </CardContent>
      </Card>
    </div>

  )
}

const StyledComponent = withStyles(styles)(AgileCard)

const mapState = state => ({
  timer: state.timer
})

export default connect(mapState)(StyledComponent)
