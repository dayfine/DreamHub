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
  const { classes, goal } = props
  return (
    <Card>
      <CardHeader title={goal.title} />
      <CardContent>
        {JSON.stringify(goal.tasks)}
      </CardContent>
    </Card>
  )
}

const StyledComponent = withStyles(styles)(AgileCard)

const mapState = state => ({
  timer: state.timer
})

export default connect(mapState)(StyledComponent)
