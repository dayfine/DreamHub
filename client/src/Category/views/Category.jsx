import React from 'react'
import { connect } from 'react-redux'

import { withStyles } from 'material-ui/styles'
import Typography from 'material-ui/Typography'
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List'
import Icon from 'material-ui/Icon'
import Paper from 'material-ui/Paper'
import Divider from 'material-ui/Divider'

import { createCategory } from '../actions'

const styles = {
}

const Category = props => {
  const { categories, classes } = props
  console.log(categories)
  return (
    <Paper>
      <div>search category</div>
      <Divider />
      <List>
        {categories.map(category => {
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

const mapState = state => ({
  categories: state.categories
})

const mapDispatch = ({ createCategory })

export default connect(mapState, mapDispatch)(
                withStyles(styles)(
                  Category
                ))
