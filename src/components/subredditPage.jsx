import React from 'react'
import { List } from 'material-ui/List'
import PostsContainer from '../containers/posts.jsx'
import loadSubreddit from '../actions/loadReddit'

export default class SubredditPage extends React.Component {
  componentWillMount() {
    const { dispatch, match } = this.props
    dispatch(loadSubreddit(match.params.subreddit || 'all'))
  }

  render() {
    return (
      <List>
        <PostsContainer />
      </List>
    )
  }
}
