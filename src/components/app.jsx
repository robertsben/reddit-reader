import React from 'react'
import {List, ListItem} from 'material-ui/List'

export default class App extends React.Component {
  render() {
    return (
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
  }
}
