import React from 'react'
import { connect } from 'react-redux'

import App from '../components/app.jsx'
import loadSubreddit from '../actions/loadReddit'

function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch) {
  return {
    loadSubreddit: (sub) => {
      console.log("Hello!!!!!")
    }
  }
}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App)

export default AppContainer