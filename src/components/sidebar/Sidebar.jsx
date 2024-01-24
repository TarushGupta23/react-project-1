import React from 'react'
import "./sidebar.css"
import { Bookmark, Chat, Event, Group, HelpOutline, PlayCircle, RssFeed, School, WorkOutline } from '@mui/icons-material'

export default function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebarwrapper">
                <ul className="sidebarlist">
                    <li className="sidebarlistitem">
                        <RssFeed className='sidebaricon'/>
                        <span className="sidebaritemtext">Feed</span>
                    </li>
                    
                    <li className="sidebarlistitem">
                        <Chat className='sidebaricon'/>
                        <span className="sidebaritemtext">Chats</span>
                    </li>

                    <li className="sidebarlistitem">
                        <PlayCircle className='sidebaricon'/>
                        <span className="sidebaritemtext">Videos</span>
                    </li>

                    <li className="sidebarlistitem">
                        <Group className='sidebaricon'/>
                        <span className="sidebaritemtext">Groups</span>
                    </li>

                    <li className="sidebarlistitem">
                        <Bookmark className='sidebaricon'/>
                        <span className="sidebaritemtext">Bookmarks</span>
                    </li>

                    <li className="sidebarlistitem">
                        <HelpOutline className='sidebaricon'/>
                        <span className="sidebaritemtext">Questions</span>
                    </li>

                    <li className="sidebarlistitem">
                        <WorkOutline className='sidebaricon'/>
                        <span className="sidebaritemtext">Jobs</span>
                    </li>

                    <li className="sidebarlistitem">
                        <Event className='sidebaricon'/>
                        <span className="sidebaritemtext">Events</span>
                    </li>

                    <li className="sidebarlistitem">
                        <School className='sidebaricon'/>
                        <span className="sidebaritemtext">Courses</span>
                    </li>
                </ul>

                <button className='sidebarbutton'>Show More</button>
                <hr className='sidebarhr'/>
                <ul className="sidebarfriendlist">
                    <li className="sidebarfriend">
                        <img src="/assets/person/2.jpeg" alt="" className="sidebarfriendimg" />
                        <span className='sidebarfriendname'>Jane Doe</span>
                    </li>
                    
                    <li className="sidebarfriend">
                        <img src="/assets/person/2.jpeg" alt="" className="sidebarfriendimg" />
                        <span className='sidebarfriendname'>Jane Doe</span>
                    </li>
                    
                    <li className="sidebarfriend">
                        <img src="/assets/person/2.jpeg" alt="" className="sidebarfriendimg" />
                        <span className='sidebarfriendname'>Jane Doe</span>
                    </li>
                    
                    <li className="sidebarfriend">
                        <img src="/assets/person/2.jpeg" alt="" className="sidebarfriendimg" />
                        <span className='sidebarfriendname'>Jane Doe</span>
                    </li>
                    
                    <li className="sidebarfriend">
                        <img src="/assets/person/2.jpeg" alt="" className="sidebarfriendimg" />
                        <span className='sidebarfriendname'>Jane Doe</span>
                    </li>
                    
                    <li className="sidebarfriend">
                        <img src="/assets/person/2.jpeg" alt="" className="sidebarfriendimg" />
                        <span className='sidebarfriendname'>Jane Doe</span>
                    </li>
                    
                    <li className="sidebarfriend">
                        <img src="/assets/person/2.jpeg" alt="" className="sidebarfriendimg" />
                        <span className='sidebarfriendname'>Jane Doe</span>
                    </li>
                    
                    <li className="sidebarfriend">
                        <img src="/assets/person/2.jpeg" alt="" className="sidebarfriendimg" />
                        <span className='sidebarfriendname'>Jane Doe</span>
                    </li>
                    
                    <li className="sidebarfriend">
                        <img src="/assets/person/2.jpeg" alt="" className="sidebarfriendimg" />
                        <span className='sidebarfriendname'>Jane Doe</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}