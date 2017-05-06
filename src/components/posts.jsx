import React from 'react'
import PostContainer from '../containers/post.jsx'
import { Divider } from 'material-ui/Divider'

const Posts = ({children}) => (
  <div>
    {children.map(
      child => <PostContainer
        key={child.data.id}
        {...child.data}
      />
    )}
  </div>
)

export default Posts