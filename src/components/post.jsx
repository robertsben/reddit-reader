import React from 'react'
import { ListItem } from 'material-ui/List'
import Avatar from 'material-ui/Avatar'
import Divider from 'material-ui/Divider'

const Post = (data) => (
  <section>
    <ListItem
      primaryText={data.title}
      secondaryText={<a href={data.url}>{data.url}</a>}
      leftAvatar={<Avatar src={data.thumbnail}/>}
      onClick={() => {window.open('https://reddit.com' + data.permalink)}}
    />
    <Divider />
  </section>
)

export default Post