import React, {Component} from 'react'
import { connect } from 'react-redux'

import { withStyles } from 'material-ui/styles'
import Card, { CardContent, CardMedia } from 'material-ui/Card'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'
import Icon from 'material-ui/Icon'
import IconButton from 'material-ui/IconButton'
import List, { ListItem, ListItemText } from 'material-ui/List'
import Dialog from 'material-ui/Dialog'
import Divider from 'material-ui/Divider'
import { grey } from 'material-ui/colors'

import { editTask } from '../actions'
import { TaskStatusMapper, stalledTasksMapper } from '../util/mappers'
import { truncate } from '../util/helpers'

const styles = {
  title: {
    display: 'flex',
    padding: 24,
    paddingTop: 36,
    color: 'white',
    backgroundColor: '#c85a54',
    fontSize: '1.35em',
    justifyContent: 'center',
    minHeight: 130
  },
  flexCard: {
    display: 'flex',
    borderBottom: "1px solid black"
  },
  goalInfo: {
    width: 320,
    height: 120
  },
  flex: {
    flex: '1 0 auto',
  }
}

// Put on NavBar when checkup is applicable. Needs test data. Needs special color
class Checkup extends Component {
  state = {
    open: false
  }

  onOpen = () => {
    this.setState({ open: true })
  }

  onClose = () => {
    this.setState({ open: false })
  }

  renderTaskOptions = (task, classes, editTask) => {
    const onUpdate = status => {
      editTask({...task, status})
    }

    return (
      <Card key={task.id} className={classes.flexCard} >
        <CardContent className={classes.goalInfo}>
          <Typography type="headline">
            {task.title}
          </Typography>
          <Typography type="subheading" color="secondary">
            {truncate(task.description, 40)}
          </Typography>
        </CardContent>
        <List className={classes.flexList}>
        {TaskStatusMapper[task.status].map(_ => {
          return (
            <ListItem
              key={_.status}
              dense
              onClick={onUpdate.bind(null, _.status)}
              button
            >
              <ListItemText primary={_.text} style={{fontSize: "1em"}}/>
            </ListItem>
          )
        })}
        </List>
        <Divider />
      </Card>
    )
  }

  render() {
    const { onOpen, onClose, renderTaskOptions } = this
    const { tasks, classes, editTask } = this.props

    return tasks.length > 0 && (
      <div>
        <Button color='accent' raised onClick={ onOpen }>Check In!</Button>
        <Dialog
          open={ this.state.open }
          onRequestClose={ onClose }
        >
          <div className={ classes.title }>
            <Typography type='headline' color='inherit' >
              How are you doing with the following tasks?
            </Typography>
             <IconButton
              className={ classes.flex }
              color='inherit'
              onClick={ onClose }
              aria-label='Close'
            >
              <Icon style={{fontSize: '1em'}}>clear</Icon>
            </IconButton>
          </div>
          <div className={ classes.list }>
          {tasks.map(task => renderTaskOptions(task, classes, editTask))}
          </div>
        </Dialog>
      </div>
    );
  }
}

const mapState = state => ({
  tasks: stalledTasksMapper(state.tasks)
})

const mapDispatch = ({ editTask })

export default  connect(mapState, mapDispatch)(
                withStyles(styles)(
                  Checkup
                ));
