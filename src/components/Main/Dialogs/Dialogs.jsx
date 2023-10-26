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

    let dialogsData = [
        {id: 1, name: 'Pavel1'},
        {id: 2, name: 'Pavel2'},
        {id: 3, name: 'Pavel3'},
        {id: 4, name: 'Pavel4'},
        {id: 5, name: 'Pavel5'},
        {id: 6, name: 'Pavel6'}
    ]
    let messageData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'HiHi'},
        {id: 3, message: 'HiHiHi'},
        {id: 4, message: 'HiHiHiHiHi'},
        {id: 5, message: 'PHiHiHiHiHiHi'},
        {id: 6, message: 'HiHiHiHiHiHi'}
    ]

    return(
        <div className="Dialogs">
            <div className="messages">
                <Message message={messageData[0].message} />
                <Message message={messageData[1].message} />
                <Message message={messageData[2].message} />
            </div>
            <div className="dialogItems">
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>

            </div>
        </div>
    ); 
};

export default Dialogs;