import * as React from 'react'
import {useApp} from './provider'
import {canLike} from './utils'
import {PostView} from './post-view'

function Post({post}) {
  const {user, toggleLike} = useApp()

  async function handleClick() {
    if (!(await canLike(post, user))) return

    toggleLike(post)
  }

  return <PostView post={post} onLikeClick={handleClick} />
}

export {Post}
