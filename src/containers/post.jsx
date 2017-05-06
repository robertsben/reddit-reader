import React from 'react'
import { connect } from 'react-redux'

import Post from '../components/post.jsx'

function mapStateToProps(state) {
  return state.data
}

const PostContainer = connect(mapStateToProps)(Post)

export default PostContainer