import style from ".././dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/1" + props.id;
    return (
        <div className={style.dialogItem}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}


export default DialogItem;