import React from 'react'
import { ListItem } from 'material-ui/List'

const Post = (data) => (
  <ListItem
    primaryText={data.title}
    // secondaryText={data}
  />
)

export default Post