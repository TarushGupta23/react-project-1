import React from 'react'
import "./post.css"
import {MoreVert} from "@mui/icons-material"
import {Users} from "../../dummyData.js"

export default function Post({post}) {
  return (
    <div className='post'>
        <div className="postwrapper">
            <div className="posttop">
                <div className="posttopleft">
                    <img src={Users.filter((u) => u.id === post?.userId)[0].profilePicture} alt="Profile image" className='postprofileimage' />
                    <span className='postusername'>{Users.filter((u) => u.id === post?.userId)[0].username}</span>
                    <span className='postdate'>{post.date}</span>
                </div>
                <div className="posttopright">
                    <MoreVert />
                </div>
            </div>
            <div className="postcenter">
                <span className="posttext">{post?.desc}</span>
                {/* '?' is used as some posts donot contain description */}
                <img src={post.photo} alt="" className='postimage'/>
            </div>
            <div className="postbottom">
                <div className="postbottomleft">
                    <img src="assets/like.png" alt="" className='likeicon'/>
                    <img src="assets/heart.png" alt="" className='likeicon'/>
                    <span className="postlikecounter">{post.like} people liked it</span>
                </div>
                <div className="postbottomright">
                    <span className="postcommenttext">{post.comment} comments</span>
                </div>
            </div>
        </div>
    </div>
  )
}
