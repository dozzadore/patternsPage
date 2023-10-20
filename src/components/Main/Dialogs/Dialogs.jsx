import "./dialogs.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/1" + props.id;
    return (
        <div className="dialogItem  active">
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}
const Message = (props) => {
    return <div className="message">{props.message}</div>
 
}

const Dialogs = (props) => {

    return(
        <div className="Dialogs">
            <div className="messages">
                <Message message="Hi" />
                <Message message="HiHiHiHiHi" />
                <Message message="HiHiHiHiHiHiHi" />
            </div>
            <div className="dialogItems">
                <DialogItem name="Pavel1" id="1"/>
                <DialogItem name="Pavel2" id="2"/>
                <DialogItem name="Pavel3" id="3"/>
                <DialogItem name="Pavel4" id="4"/>
                <DialogItem name="Pavel5" id="5"/>
                <DialogItem name="Pavel6" id="6"/>
                
            </div>
        </div>
    );
};

export default Dialogs;