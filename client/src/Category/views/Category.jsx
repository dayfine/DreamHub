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
import { editGoal } from '../../Goals/actions'

// This reusable componennt expects either a goal prop or a passIdBack function
// to execute the category change


const styles = theme => ({
  root: {
    minWidth: 200,
    maxWidth: 360,
    zIndex: 100,
    margin: '0 auto'
  },
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
  constructor(props) {
    super()
    this.state = {
      category: props.category,
      listOpen: false,
      search: '',
      color: '#ff8a80',
      paletteOpen: false,
      anchorEl: null,
    }
  }

  onOpenForm = () => {
    this.setState({ listOpen: true })
  }

  handleChange = ev => {
    this.setState({ search: ev.target.value })
  }

  handleSelect = category => {
    const { passIdBack, goal, editGoal } = this.props
    const categoryId = category ? category.id : null

    if (!passIdBack && goal) {
      editGoal({ ...goal, categoryId })
    }
    if (passIdBack && !goal) {
      editGoal({ ...goal, categoryId })
    }
    this.setState({ category, listOpen: false })
  }

  handleAdd = () => {
    const { search, color } = this.state
    if (search === '') return

    return this.props.createCategory({ color, name: search})
      .then( category => {
        this.setState({
          category,
          search: '',
          color: '#ff8a80',
          listOpen: false
        })
      })
  }

  archor = null

  onRequestOpen = () => {
    this.setState({
      paletteOpen: true,
      anchorEl: findDOMNode(this.archor),
    })
  }

  onRequestClose = () => {
    this.setState({ paletteOpen: false })
  }

  onColorChangeComplete = (color, event) => {
    this.setState({ color: color.hex })
    this.onRequestClose()
  }

  render () {
    const { categories, classes } = this.props
    const { category, listOpen, search, color, paletteOpen, anchorEl,} = this.state

    return !listOpen
      ? (
      <ListItem
        button
        onClick={this.onOpenForm}
        className={classes.root}
      >
        <Icon
          style={{color: category ? category.color : '#000'}}
        >
          fiber_manual_record
        </Icon>
        <ListItemText
          secondary={ category ? category.name : 'Uncategoriezed'}
        />
      </ListItem>
      ) : (
      <Paper className={classes.root}>
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
          <ListItem
            button
            key={0}
            onClick={this.handleSelect.bind(null, null)}
          >
            <Icon style={{color: '#000'}}>fiber_manual_record</Icon>
            <ListItemText secondary='Uncategoriezed' />
          </ListItem>
          {catFilter(search, categories).map(_category => {
            return (
              <ListItem
                button
                key={_category.id}
                onClick={this.handleSelect.bind(null, _category)}
              >
                <Icon style={{color: _category.color}}>fiber_manual_record</Icon>
                <ListItemText secondary={_category.name} />
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
            open={paletteOpen}
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

const mapDispatch = ({ createCategory, editGoal })

export default connect(mapState, mapDispatch)(
                withStyles(styles)(
                  Category
                ))
