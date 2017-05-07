import React from 'react'
import { connect } from 'react-redux'

import App from '../components/subredditPage.jsx'
import loadSubreddit from '../actions/loadReddit'

function mapStateToProps(state) {
  return state
}

const SubredditPageContainer = connect(mapStateToProps)(App)

export default SubredditPageContainer