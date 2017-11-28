import React, { Component }  from 'react'
import { connect } from 'react-redux'

import Setting from './UserSetting'

import Card, { CardContent, CardHeader } from 'material-ui/Card'

// Create a separate modal to open setting, and pull in only for current user
class UserCard extends Component {
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
            {goals.length} Goals
            <br />
            The goals above should be a link
          </CardContent>
        </Card>
      </div>
    )
  }
}

const mapState = state => ({
  user: state.currentUser,
  goals: state.goals
})

export default connect(mapState)(UserCard)
