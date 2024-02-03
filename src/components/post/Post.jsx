import React, { useState } from 'react'
import "./post.css"
import { MoreVert } from "@mui/icons-material"
import { Users } from "../../dummyData.js"

export default function Post({ post }) {
    const [like, setlike] = useState(post.like);
    const [isLiked, setIsLiked] = useState(false);
    const likeHandler = () => {
        setlike(isLiked? like - 1: like+1)
        setIsLiked(!isLiked)
    }

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
                    <img src={post.photo} alt="" className='postimage' />
                </div>
                <div className="postbottom">
                    <div className="postbottomleft">
                        <img src="assets/like.png" alt="" className='likeicon' onClick={likeHandler} />
                        <img src="assets/heart.png" alt="" className='likeicon' onClick={likeHandler} />
                        <span className="postlikecounter">{like} people liked it</span>
                    </div>
                    <div className="postbottomright">
                        <span className="postcommenttext">{post.comment} comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
