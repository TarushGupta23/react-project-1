import React from 'react'
import './profile.css'
import Topbar from '../../components/topbar/TopBar'
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from '../../components/feed/Feed'

export default function Profile() {
    return (
    <>
        <Topbar />
        <div className="profile">
            <Sidebar />
            <div className="profileright">
                <div className="profilerighttop">
                    <div className="profilecover">
                        <img src="assets/post/3.jpeg" alt="" className="profilecoverimg" />
                        <img src="assets/person/7.jpeg" alt="" className="profileuserimg" />
                    </div>
                    <div className="profileinfo">
                        <h4 className="profileinfoname">The Name</h4>
                        <h4 className="profileinfodesc">Hello friends</h4>
                    </div>
                </div>
                <div className="profilerightbottom">
                    <Feed />
                </div>
            </div>
        </div>
    </>
    )
}
