import React from 'react'
import { NavLink } from 'react-router-dom'

import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';

const NavTabs = props => {
  return (
    <div style={{ paddingTop: 120 }}>
      <AppBar position='relative' color='default'>
        <Tabs
          indicatorColor="primary"
          textColor="primary"
          fullWidth
          centered
        >
          <Tab label="Item One" component={NavLink} to='/' />
          <Tab label="Item Two" />
          <Tab label="Item Three" />
        </Tabs>
      </AppBar>
    </div>

  )
}

export default NavTabs
