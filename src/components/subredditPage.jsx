import React from 'react'
import List from 'material-ui/List'
import Subheader from 'material-ui/Subheader'
import PostsContainer from '../containers/posts.jsx'
import loadSubreddit from '../actions/loadReddit'

const styles = {
  title: {
    fontSize: '200%'
  }
}

export default class SubredditPage extends React.Component {
  componentWillMount() {
    const { dispatch } = this.props
    dispatch(loadSubreddit(this._getSubName()))
  }

  render() {
    return (
      <List>
        <Subheader inset style={styles.title}>{`/r/${this._getSubName()}`}</Subheader>
        <PostsContainer />
      </List>
    )
  }

  _getSubName() {
    return this.props.match.params.subreddit || 'all'
  }
}
