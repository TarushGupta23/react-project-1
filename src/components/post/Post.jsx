import React from 'react'
import "./post.css"
import {MoreVert} from "@mui/icons-material"

export default function Post() {
  return (
    <div className='post'>
        <div className="postwrapper">
            <div className="posttop">
                <div className="posttopleft">
                    <img src="/assets/person/1.jpeg" alt="Profile image" className='postprofileimage' />
                    <span className='postusername'>Tarush Gupta</span>
                    <span className='postdate'>5 mins ago</span>
                </div>
                <div className="posttopright">
                    <MoreVert />
                </div>
            </div>
            <div className="postcenter">
                <span className="posttext">Hey! its my first post</span>
                <img src="assets/post/1.jpeg" alt="" className='postimage'/>
            </div>
            <div className="postbottom">
                <div className="postbottomleft">
                    <img src="assets/like.png" alt="" className='likeicon'/>
                    <img src="assets/heart.png" alt="" className='likeicon'/>
                    <span className="postlikecounter">32 people liked it</span>
                </div>
                <div className="postbottomright">
                    <span className="postcommenttext">9 comments</span>
                </div>
            </div>
        </div>
    </div>
  )
}
