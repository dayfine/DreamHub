import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import { connect } from 'react-redux'

import ProperButton from '../../common/ProperButton'
import { withStyles } from 'material-ui/styles'
import Input from 'material-ui/Input'
import List, { ListItem, ListItemText } from 'material-ui/List'
import Icon from 'material-ui/Icon'
import IconButton from 'material-ui/IconButton'
import Paper from 'material-ui/Paper'
import Divider from 'material-ui/Divider'
import Popover from 'material-ui/Popover'
import { SwatchesPicker } from 'react-color'

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
  },
  addBar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  addIcon: {
    marginRight: 10,
  }
})

const catFilter = (term, categories) => {
  const regex = new RegExp(term, 'i')
  return categories.filter(cat => regex.test(cat.name))
}

class Category extends Component {
  state = {
    search: '',
    color: '#ff8a80',
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
    this.setState({ search: '', color: '#ff8a80' })
  }

  archor = null

  onRequestOpen = () => {
    this.setState({
      open: true,
      anchorEl: findDOMNode(this.archor),
    });
  }

  onRequestClose = () => {
    this.setState({ open: false })
  }

  onColorChangeComplete = (color, event) => {
    this.setState({ color: color.hex })
    this.onRequestClose()
  };


  render () {
    const { categories, classes } = this.props
    const { search, color, open, anchorEl,} = this.state

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
          {catFilter(search, categories).map(category => {
            return (
              <ListItem button key={category.id}>
                <Icon style={{color: category.color}}>fiber_manual_record</Icon>
                <ListItemText secondary={category.name} />
              </ListItem>
            )
          })}
        </List>
        <Divider />
        <div className={classes.addBar}>
          <ProperButton onClick={this.handleAdd}>
            <Icon className={classes.addIcon}>add</Icon>
            Create new category
          </ProperButton>
          <IconButton
            ref={node => { this.archor = node }}
            onClick={this.onRequestOpen}
          >
            <Icon style={{ color }}>fiber_manual_record</Icon>
          </IconButton>
          <Popover
            open={open}
            anchorEl={anchorEl}
            onRequestClose={this.onRequestClose}
            anchorOrigin={{
              vertical: 'center',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
          >
            <SwatchesPicker onChangeComplete={this.onColorChangeComplete} />
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
