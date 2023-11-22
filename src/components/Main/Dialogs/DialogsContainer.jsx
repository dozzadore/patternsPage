import React from "react";
import { updateNewMessageTextActionCreator, sendMessageCreator } from "../../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

  

const DialogsContainer = (props) => {

    let state = props.store.getState().dialogsPage;
    
    let newMessage = () => {
        props.store.dispatch(sendMessageCreator())
    }
    let onNewMessageChange = (body) => {
        props.store.dispatch(updateNewMessageTextActionCreator(body))
    }


    return <Dialogs 
        updateNewMessageBody={onNewMessageChange}
        sendMessage={newMessage}
        dialogsPage={state}
    />
};

export default DialogsContainer;