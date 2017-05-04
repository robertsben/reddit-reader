import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import App from './app.jsx'

export default class MuiApp extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <App/>
      </MuiThemeProvider>
    )
  }
}