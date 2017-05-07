import React from 'react'
import { connect } from 'react-redux'

import App from '../components/app.jsx'
import loadSubreddit from '../actions/loadReddit'

function mapStateToProps(state) {
  return state
}

const AppContainer = connect(mapStateToProps)(App)

export default AppContainer