import React from 'react'
import {List, ListItem} from 'material-ui/List'

const App = () => (
  <List>
    <ListItem
      primaryText="Hi, friend."
      secondaryText={
        <p>
          Look, we're working on some stuff here, okay...
        </p>
      }
    />
  </List>
)

export default App