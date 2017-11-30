import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import App from './App'

import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import { Provider } from 'react-redux'
import store from './Store'

import registerServiceWorker from './registerServiceWorker'
import { black, white, red } from 'material-ui/colors'

const theme = createMuiTheme({
  palette: {
    primary: black,
    secondary: white,
    error: red
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
