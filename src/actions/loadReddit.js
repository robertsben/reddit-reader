import fetchSubreddit from '../api/reddit'
import * as types from '../actions/actionTypes'
import { CALL_API } from 'redux-api-middleware'

export default function loadSubreddit(subreddit) {
  return {
    [CALL_API]: {
      endpoint: `https://www.reddit.com/r/${subreddit}.json`,
      method: 'GET',
      types: [
        types.LOAD_SUBREDDIT_REQUEST,
        types.LOAD_SUBREDDIT_SUCCESS,
        // {
        //   type: types.LOAD_SUBREDDIT_SUCCESS,
        //   payload: ({ response }) => {
        //     return response
        //   }
        // },
        types.LOAD_SUBREDDIT_FAILURE
      ]
    }
  }
}

//
// function loadSubredditSuccess(subredditData) {
//   return {
//     type: types.LOAD_SUBREDDIT_SUCCESS,
//     subredditData: subredditData
//   }
// }

// export default function loadSubreddit(subreddit) {
//   return function(dispatch) {
//     return fetchSubreddit(subreddit).then(json => {
//       dispatch(loadSubredditSuccess(json))
//     }).catch(error => {
//       throw(error)
//     })
//   }
// }

//
// import { CALL_API } from `redux-api-middleware`;
//
// const REQUEST = '/user/REQUEST';
// const RECEIVE = '/user/RECEIVE';
// const FAILURE = '/user/FAILURE';
//
// export function fetchUser(id) {
//   return {
//     [CALL_API]: {
//       endpoint: `http://www.example.com/api/users/${id}`,
//       method: 'GET',
//       types: [REQUEST, RECEIVE, FAILURE]
//     }
//   }
// }