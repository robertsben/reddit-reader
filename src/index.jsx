import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import injectTapEventPlugin from 'react-tap-event-plugin';
import reducer from './reducers/index.jsx'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppContainer from './containers/app.jsx'

let store = createStore(reducer)

// @see: http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin()
ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <AppContainer />
    </MuiThemeProvider>
  </Provider>
  , document.getElementById('app'))
