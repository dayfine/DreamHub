import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import { connect } from 'react-redux'

import FriendGoalItem from './FriendGoalItem'
import classnames from 'classnames';
import Card, { CardHeader, CardMedia, CardContent, CardActions } from 'material-ui/Card';
import Collapse from 'material-ui/transitions/Collapse';
import Avatar from 'material-ui/Avatar';
import Icon from 'material-ui/Icon'
import IconButton from 'material-ui/IconButton';
import Button from 'material-ui/Button'
import red from 'material-ui/colors/red';

import { removeFriend } from '../actions'

const styles = theme => ({
  card: {
    maxWidth: 400,
    marginButtom: 12
  },
  media: {
    height: 194,
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginRight: 10
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  // avatar: {
  //   backgroundColor: red[500],
  // },
  flexGrow: {
    flex: '0.5 1 auto'
  },
  controlGroup: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
});

class FriendCard extends Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded });
  }
  handleUnfriend = () => {
    const { friend, removeFriend } = this.props
    removeFriend(friend.id)
  }

  render() {
    const { classes, friend } = this.props;
    return (
      <Card className={classes.card}>
        <div className={classes.controlGroup}>
          <CardHeader
            avatar={
              <Avatar
                aria-label='friend.name'
                className={classes.avatar}
                alt={friend.name}
                src={`/public/images/${friend.imgUrl}`}
              />
            }
            title={friend.name}
            subheader={friend.email}
          />
          <IconButton
            className={classnames(classes.expand, {
              [classes.expandOpen]: this.state.expanded,
            })}
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="Show more"
          >
            <Icon>expand_more</Icon>
          </IconButton>
        </div>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardActions>
            <Button
              raised
              onClick={this.handleUnfriend}
              >Unfriend
            </Button>
            <Button>Poke</Button>
          </CardActions>
          <CardContent>
            {friend.goals.map(goal => {
              return (
                <FriendGoalItem goal={goal} />
              )
            })}
          </CardContent>
        </Collapse>
      </Card>
    );
  }
}

const mapDispatch = { removeFriend }

export default  connect(null, mapDispatch)(
                withStyles(styles)(
                  FriendCard
                ));
