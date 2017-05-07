import React from 'react'
import * as types from '../actions/actionTypes'

const initialState = {
  data: {
    children: []
  }
}

export default function reducer(state=initialState, action) {
  console.log(action)
  switch(action.type) {
    case types.LOAD_SUBREDDIT_REQUEST:
      return {...state, loading: true}
    case types.LOAD_SUBREDDIT_SUCCESS:
      return {...state, data: action.payload.data, loading: false}
    default:
      return state
  }
}