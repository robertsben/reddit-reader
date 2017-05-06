import React from 'react'
import { List } from 'material-ui/List'
import PostsContainer from '../containers/posts.jsx'

const App = ({kind, data}) => (
  <List>
    <PostsContainer />
  </List>
)

export default App