import React, {Component} from 'react';
import { connect } from 'react-redux';
import Button from 'material-ui/Button';
import Icon from 'material-ui/Icon'
import IconButton from 'material-ui/IconButton'
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';


// Use a list of tasks here



// New tasks

// I am working on it
// I finished it, yehhh
// maybe later
// Later
// I am working on it
// I got it done
// In progress
// still working
// taking a break
// done, yeeaaah

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
    const { tasks } = this.props
    console.log(tasks)

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
  tasks: state.tasks
})

export default connect(mapState)(Checkup);
