import { NavLink } from "react-router-dom";
import "../profile.module.css";




const Friends = (props) => {


    let friends = props.state.map(friends => {
        return <div><NavLink>{friends.name}</NavLink></div>
    })
    

    return (
        <div className="friends">

            friends
            <div>
            {friends}
            </div>
        </div>
    )
}
export default Friends;