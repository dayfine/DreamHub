import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import App from './App'

import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import { Provider } from 'react-redux'
import store from './Store'

import registerServiceWorker from './registerServiceWorker'
import { teal, white, red } from 'material-ui/colors'

const theme = createMuiTheme({
  palette: {
    primary: teal,
    secondary: red,
    error: white
  }
})

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
)
registerServiceWorker()
