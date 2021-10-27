import "./closeFriend.css"

export default function CloseFriend({user}) {
    return (
        <li className="sideBarFriend">
        <img className="sidebarFriendImg" src={user.profilePicture} alt="" />
        <span className="sidebarFriendName">{user.username}</span>
    </li>
    )
}