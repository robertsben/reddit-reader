import React from 'react'
import { connect } from 'react-redux'

import Posts from '../components/posts.jsx'

function mapStateToProps(state) {
  return state.data
}

const PostsContainer = connect(mapStateToProps)(Posts)

export default PostsContainer