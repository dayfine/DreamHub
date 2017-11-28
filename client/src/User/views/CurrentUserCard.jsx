import React, { Component }  from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import Setting from './UserSetting'

import Card, { CardContent, CardHeader } from 'material-ui/Card'

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
    const { user, goals } = this.props
    const { modalId } = this.state

    return (
      <div>
        <Setting
          open={!!modalId}
          onClose={this.closeModal}
        />
        <Card>
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
  user: ownProps.user || state.currentUser,
  goals: ownProps.goals || state.goals
})

export default connect(mapState)(CurrentUserCard)
