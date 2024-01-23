import "./topbar.css"
import {Search, Person, Chat, Notifications} from '@mui/icons-material';

export default function Topbar() {
    return (
        <div className="topbarcontainer">
            <div className="topbarleft">
                <span className="logo">Lamasocial</span>
            </div>
            <div className="topbarcenter">
                <div className="searchbar">
                    <Search className="searchicon" />
                    <input type="text" placeholder="search for friend, post or video" className="searchinput" />
                </div>
            </div>
            <div className="topbarright">
                <div className="topbarlinks">
                    <span className="tobbarlink">homepage</span>
                    <span className="tobbarlink">Timeline</span>
                </div>
                <div className="topbaricons">
                    <div className="topbariconitem">
                        <Person />
                        <span className="topbariconbadge">1</span>
                    </div>
                    <div className="topbariconitem">
                        <Chat />
                        <span className="topbariconbadge">4</span>
                    </div>
                    <div className="topbariconitem">
                        <Notifications />
                        <span className="topbariconbadge">1</span>
                    </div>
                </div>
                <img src="/assets/person/1.jpeg" alt="" className="topbarimg"/>
            </div>
        </div>
    )
}