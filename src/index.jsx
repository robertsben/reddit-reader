import React from 'react'
import ReactDOM from 'react-dom'
import MuiApp from './components/muiappwrapper.jsx'
import injectTapEventPlugin from 'react-tap-event-plugin';

// @see: http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin()
ReactDOM.render(<MuiApp />, document.getElementById('app'))
