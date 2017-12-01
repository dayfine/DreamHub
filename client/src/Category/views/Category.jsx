import React, { Component } from 'react'
import { connect } from 'react-redux'

import { withStyles } from 'material-ui/styles'
import Input, { InputAdornment } from 'material-ui/Input'
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List'
import Icon from 'material-ui/Icon'
import IconButton from 'material-ui/IconButton'
import Paper from 'material-ui/Paper'
import Divider from 'material-ui/Divider'

import { createCategory } from '../actions'

const styles = theme => ({
  searchInputBox: {
    margin: 10,
    borderRadius: 10,
    border: '1px solid #eee',
    padding: '12px 16x',
    width: 'calc(100%-20)',
    display: 'flex',
    alignItems: 'center'
  },
  list: {
    maxHeight: 300,
    overflow: 'scroll'
  }
})

const catFilter = (term, categories) => {
  const regex = new RegExp(term, 'i')
  return categories.filter(cat => regex.test(cat.name))
}

class Category extends Component {
  state = {
    search: ''
  }

  handleChange = ev => {
    this.setState({ search: ev.target.value })
  }

  render () {
    const { categories, classes } = this.props

    return (
      <Paper>
        <div className={classes.searchInputBox}>
          <IconButton>
            <Icon>search</Icon>
          </IconButton>
          <Input
            className={classes.searchInput}
            onChange={this.handleChange}
            placeholder='Find category...'
            disableUnderline
            />
        </div>
        <Divider />
        <List className={classes.list}>
          {catFilter(this.state.search, categories).map(category => {
            return (
              <ListItem button key={category.id}>
                <Icon style={{color: category.color}}>fiber_manual_record</Icon>
                <ListItemText secondary={category.name} />
              </ListItem>
            )
          })}
        </List>
        <Divider />
        <div>create a new category</div>
      </Paper>
    )
  }
}

const mapState = state => ({
  categories: state.categories
})

const mapDispatch = ({ createCategory })

export default connect(mapState, mapDispatch)(
                withStyles(styles)(
                  Category
                ))
