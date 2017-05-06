import React from 'react'
import * as types from '../actions/actionTypes'

const initialState = {
  data: {
    children: []
  }
}

export default function reducer(state=initialState, action) {
  switch(action.type) {
    case types.LOAD_SUBREDDIT_SUCCESS:
      return {...action.subredditData}
    default:
      return state
  }
}