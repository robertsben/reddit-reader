import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import thunk from 'redux-thunk'
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import reducer from './reducers/index.jsx'
import AppContainer from './containers/app.jsx'
import loadSubreddit from './actions/loadReddit'

const store = createStore(reducer, applyMiddleware(thunk))

// store.dispatch(loadSubreddit('all'))

// @see: http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin()
ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={AppContainer} />
          <Route path="/:subreddit?"
                 render={({ match }) => (
                   <AppContainer loadSubreddit={store.dispatch(loadSubreddit(match.params.subreddit))}/>
                 )}/>
        </Switch>
      </BrowserRouter>
    </MuiThemeProvider>
  </Provider>
  , document.getElementById('app')
)
