import React from 'react'

const initialState = {
  messages: {
    primary: "Hello, world!",
    secondary: <p>We've got some stuff going on here!</p>
  }
}

export default function reducer(state=initialState, action) {
  switch(action.type) {
    default:
      return state
  }
}