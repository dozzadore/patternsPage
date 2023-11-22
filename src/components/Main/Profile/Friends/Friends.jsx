import { NavLink } from "react-router-dom";
import style from "./friends.module.css";




const Friends = (props) => {

    let friends = props.store.friends.map(friends => {
        
        return (
            <div className={style.friend}>
                <div>
                    <div className={style.avatar}>
                        <div className={style.onlineCheck}></div>
                    </div>
                </div>
                <NavLink>{friends.name}</NavLink>
            </div>
        )
    })
    

    return (
        <div className={style.friends}>

            My friends
            <div>
            {friends}
            </div>
        </div>
    )
}
export default Friends;