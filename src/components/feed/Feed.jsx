import React from 'react'
import "./feed.css"
import Share from '../share/Share'
import Post from '../post/Post'
import {Posts} from "../../dummyData.js"

export default function Feed() {
  return (
    <div className='feed'>
      <div className="feedwrapper">
        <Share />
        {Posts.map(p=> {return <Post key={p.id} post={p} />} )}
      </div>
    </div>
  )
}
