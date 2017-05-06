import React from 'react'
import { connect } from 'react-redux'

import App from '../components/app.jsx'

function mapStateToProps(state) {
  return {...state.messages}
}

const AppContainer = connect(mapStateToProps)(App)

export default AppContainer