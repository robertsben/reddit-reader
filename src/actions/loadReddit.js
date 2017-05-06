import fetchSubreddit from '../api/reddit'
import * as types from '../actions/actionTypes'

function loadSubredditSuccess(subredditData) {
  return {
    type: types.LOAD_SUBREDDIT_SUCCESS,
    subredditData: subredditData
  }
}

export default function loadSubreddit(subreddit) {
  return function(dispatch) {
    return fetchSubreddit(subreddit).then(json => {
      dispatch(loadSubredditSuccess(json))
    }).catch(error => {
      throw(error)
    })
  }
}