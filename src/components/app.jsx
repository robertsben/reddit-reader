import React from 'react'
import {List, ListItem} from 'material-ui/List'

const App = ({primary, secondary}) => (
  <List>
    <ListItem
      primaryText={primary}
      secondaryText={secondary}
    />
  </List>
)

export default App