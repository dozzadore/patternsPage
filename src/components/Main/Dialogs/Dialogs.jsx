import "./dialogs.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import ProfileInfo from "../Profile/ProfileInfo/ProfileInfo";



const Dialogs = (props) => {

    let messageData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'HiHi'},
        {id: 3, message: 'HiHiHi'},
        {id: 4, message: 'HiHiHiHiHi'},
        {id: 5, message: 'PHiHiHiHiHiHi'},
        {id: 6, message: 'HiHiHiHiHiHi'}
    ]

    let dialogsData = [
        {id: 1, name: 'Pavel1'},
        {id: 2, name: 'Pavel2'},
        {id: 3, name: 'Pavel3'},
        {id: 4, name: 'Pavel4'},
        {id: 5, name: 'Pavel5'},
        {id: 6, name: 'Pavel6'}
    ]

    let messageElements = messageData.map( message => <Message message={message.message} />)

    let dialogsElements = dialogsData.map( dialog => <DialogItem name={dialog.name} id={dialog.id}/>)


    return(
        <div className="Dialogs">
            <ProfileInfo />
            <div className="messages">
                {messageElements}
            </div>
            <div className="dialogItems">
                {dialogsElements}
            </div>
        </div>
    ); 
};

export default Dialogs;