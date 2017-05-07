import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import thunk from 'redux-thunk'
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import reducer from './reducers/index.jsx'
import SubredditPageContainer from './containers/subredditPage.jsx'

const store = createStore(reducer, applyMiddleware(thunk))

// @see: http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin()
ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <BrowserRouter>
          <Route path="/:subreddit?" component={SubredditPageContainer}/>
      </BrowserRouter>
    </MuiThemeProvider>
  </Provider>
  , document.getElementById('app')
)
