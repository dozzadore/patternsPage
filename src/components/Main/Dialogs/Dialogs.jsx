import style from "./dialogs.module.css";
import React from "react";
import ProfileInfo from "../Profile/ProfileInfo/ProfileInfo";
import Message from "./Message/Message";
import DialogItem from './DialogItem/DialogItem';

  

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let messageElements = state.message.map( message => <Message message={message.message} key={message.id}/>)
    let dialogsElements = state.dialogs.map( dialog => <DialogItem name={dialog.name} id={dialog.id} key={dialog.id}/>)
    let newMessageBody = state.newMassageBody;
    
    let newMessage = () => {
        props.sendMessage();
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body)
    }


    return(
        <div className={style.Dialogs}>
            <ProfileInfo />
            <div className={style.messages}>
                <div className={style.textValue}>
                    <textarea 
                    onChange={onNewMessageChange}
                    value={newMessageBody}
                    placeholder="Your message"></textarea>
                    <button onClick={newMessage}>ent</button>
                </div>
                <div className={style.messagesItems}>
                {messageElements}
                </div>
            </div>
            <div className={style.dialogItems}>
                {dialogsElements}
            </div>
        </div>
    ); 
};

export default Dialogs;