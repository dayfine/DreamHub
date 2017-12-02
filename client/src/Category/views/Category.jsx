import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import { connect } from 'react-redux'

import { withStyles } from 'material-ui/styles'
import Input from 'material-ui/Input'
import List, { ListItem, ListItemText } from 'material-ui/List'
import Icon from 'material-ui/Icon'
import IconButton from 'material-ui/IconButton'
import Paper from 'material-ui/Paper'
import Divider from 'material-ui/Divider'
import Popover from 'material-ui/Popover'
import { Swatches } from 'react-color'

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
    search: '',
    color: '',
    open: false,
    anchorEl: null,
  }

  handleChange = ev => {
    this.setState({ search: ev.target.value })
  }

  handleAdd = () => {
    const { search, color } = this.state
    if (search === '') return
    this.props.createCategory({ color, name: search})
    this.setState({ search: '', color: '' })
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
        <div>
          <div onClick={this.handleAdd}>
            <IconButton >
              <Icon>add</Icon>
            </IconButton>
            Create new category
          </div>
          <Button
            ref={node => {
              this.button = node;
            }}
            raised
            className={classes.button}
            onClick={this.handleClickButton}
          >
            Open Popover
          </Button>
          <Popover
            open={open}
            anchorEl={anchorEl}
            anchorReference={anchorReference}
            anchorPosition={{ top: positionTop, left: positionLeft }}
            onRequestClose={this.handleRequestClose}
            anchorOrigin={{
              vertical: anchorOriginVertical,
              horizontal: anchorOriginHorizontal,
            }}
            transformOrigin={{
              vertical: transformOriginVertical,
              horizontal: transformOriginHorizontal,
            }}
          >
            <Swatches />
          </Popover>
        </div>
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
