
export default function fetchSubreddit(subpath) {
  return fetch('https://www.reddit.com/r/' + subpath + '.json').then(response => {
    return response.json()
  }).catch(error => {
    return error
  })
}