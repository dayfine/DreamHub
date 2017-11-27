import React, {Component} from 'react';
import { connect } from 'react-redux';

import { withStyles } from 'material-ui/styles';
import Card, { CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography'
import Icon from 'material-ui/Icon'
import IconButton from 'material-ui/IconButton'
import List, { ListItem, ListItemText } from 'material-ui/List'
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';

import { TASK_STATUS } from '../constants'

const styles = {
  card: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  }
}

// Options for updating task status
const TaskStatusMapper = {
  [TASK_STATUS.CREATED]: [
    { text: 'Started working on it', status: TASK_STATUS.IN_PROGRESS },
    { text: 'Finished it, yeh!', status: TASK_STATUS.COMPLETED },
    { text: 'Maybe later', status: TASK_STATUS.LATER },
  ],
  [TASK_STATUS.LATER]: [
    { text: 'I am working on it', status: TASK_STATUS.IN_PROGRESS },
    { text: 'I got it done', status: TASK_STATUS.COMPLETED },
  ],
  [TASK_STATUS.IN_PROGRESS]: [
    { text: 'Still working on it', status: TASK_STATUS.IN_PROGRESS },
    { text: 'Done, yeeeeh!', status: TASK_STATUS.COMPLETED },
    { text: 'Taking a break from it', status: TASK_STATUS.LATER },
  ]
}

class Checkup extends Component {
  state = {
    open: false,
  };

  onOpen = () => {
    this.setState({ open: true });
  };

  onClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { onOpen, onClose } = this
    const { tasks, classes } = this.props

    return (
      <div>
        <Button onClick={ onOpen }>Check Your Progress</Button>
        <Dialog
          open={this.state.open}
          onRequestClose={ onClose }
        >
          <DialogTitle>How are you doing with the following tasks?</DialogTitle>
          <DialogContent>
            <DialogContentText>
              You have not worked on any of your goal since
            </DialogContentText>
            {tasks.map(task => {
              return (
                <Card key={task.id} className={classes.card}>
                  <div className={classes.details}>
                    <CardContent className={classes.content}>
                      <Typography type="headline">{task.title}</Typography>
                      <Typography type="subheading" color="secondary">
                        {task.description}
                      </Typography>
                    </CardContent>
                  </div>
                  <List>
                  {TaskStatusMapper[task.status].map(_ => {
                    return (
                      <ListItem
                        key={_.status}
                        dense
                        button
                      >
                        <ListItemText primary={_.text} />
                      </ListItem>
                    )
                  })}
                  </List>
                </Card>
              )
            })}
          </DialogContent>
          <DialogActions>
            <IconButton
              onClick={ onClose }
              aria-label='Close'>
              <Icon>clear</Icon>
            </IconButton>
            <Button onClick={ onClose } color="primary" autoFocus>
              Agree
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

const mapState = state => ({
  tasks: state.tasks.filter(t => t.status !== TASK_STATUS.COMPLETED)
})

export default  connect(mapState)(
                withStyles(styles)(
                  Checkup
                ));
