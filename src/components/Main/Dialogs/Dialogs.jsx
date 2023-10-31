import style from "./dialogs.module.css";
import React from "react";
import ProfileInfo from "../Profile/ProfileInfo/ProfileInfo";
import Message from "./Message/Message";
import DialogItem from './DialogItem/DialogItem';


  

const Dialogs = (props) => {

    let messageElements = props.state.message.map( message => {
    return <Message message={message.message} key={message.id}/>
})

    let dialogsElements = props.state.dialogs.map( dialog => {
    return <DialogItem name={dialog.name} id={dialog.id} key={dialog.id}/>
    })

    let newMessage = () => {
        let text = newMessageElement.current.value;
        alert(text)
      
    }
    let newMessageElement = React.createRef();

    return(
        <div className={style.Dialogs}>
            <ProfileInfo />
            <div className={style.messages}>
                <div className={style.textValue}>
                    <textarea ref={newMessageElement}></textarea>
                    <button onClick={newMessage}>ent</button>
                </div>
                {messageElements}
            </div>
            <div className={style.dialogItems}>
                {dialogsElements}
            </div>
        </div>
    ); 
};

export default Dialogs;