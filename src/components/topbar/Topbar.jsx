import "./topbar.css"
import { Search, Person, Chat, Notifications } from "@material-ui/icons"
import { Link } from "react-router-dom"

export default function Topbar() {
    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                <Link to="/" style={{textDecoration:"none"}}><span className="logo">Sakthisocial</span></Link>
            </div>
            <div className="topbarCenter">
                <span className="searchbar">
                  <Search className="searchIcons" />
                  <input placeholder="Search for friend, post and video" className="searchInput" />
                </span>
            </div>
            <div className="topbarRight">
                <div className="tobarLinks">
                    <span className="topbarLink">Homepage</span>
                    <span className="topbarLink">Timeline</span>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                      <Person />
                      <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                      <Chat />
                      <span className="topbarIconBadge">2</span>
                    </div>
                    <div className="topbarIconItem">
                      <Notifications />
                      <span className="topbarIconBadge">5</span>
                    </div>
                </div>
                <img src="/assets/person/1.jpeg" alt="" className="topbarImg" />
            </div>
        </div>
    );
}
