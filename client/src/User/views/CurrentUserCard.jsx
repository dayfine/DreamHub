import React, { Component }  from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import Setting from './UserSetting'

import { withStyles } from 'material-ui/styles'
import Card, { CardMedia, CardContent, CardHeader } from 'material-ui/Card'

const styles = {
  media: {
    height: 140,
    width: 155,
    margin: '0 auto'
  },
};

// Create a separate modal to open setting, and pull in only for current user
class CurrentUserCard extends Component {
  state = {
    modalId: null
  }

  openModal = modalId => {
    this.setState({ modalId })
  }

  closeModal = () => {
    this.setState({ modalId: null })
  }

  render () {
    const { user, goals, classes } = this.props
    const { modalId } = this.state

    return !user ? (<div>Loading...</div>) : (
      <div>
        <Setting
          open={!!modalId}
          onClose={this.closeModal}
        />
        <Card>
          <CardMedia
            className={classes.media}
            image={`/public/images/${user.imgUrl}`}
            title='User Profile'
          />
          <CardHeader title={user.name} />
          <CardContent>
            Email: {user.email}
            <br />
            {user.goalCount || goals.length} Goals
            <br />
            {user.friendCount && (
              <span>{user.friendCount} Friends</span>
            )}
            <br />
            The goals above should be a link
            <br />
            <Link to={`friends`}>Friends</Link>
          </CardContent>
        </Card>
      </div>
    )
  }
}

const mapState = (state, ownProps) => ({
  user: state.currentUser,
  goals: state.goals
})

export default  connect(mapState)(
                withStyles(styles)(
                  CurrentUserCard
                ))
