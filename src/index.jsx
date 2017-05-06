import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import reducer from './reducers/index.jsx'
import AppContainer from './containers/app.jsx'
import loadSubreddit from './actions/loadReddit'

const store = createStore(reducer, applyMiddleware(thunk))

store.dispatch(loadSubreddit('all'))

// @see: http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin()
ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <AppContainer />
    </MuiThemeProvider>
  </Provider>
  , document.getElementById('app')
)
