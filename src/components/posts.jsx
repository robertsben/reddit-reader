import React from 'react'
import PostContainer from '../containers/post.jsx'

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