import style from "./dialogs.module.css";

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

    

    return(
        <div className={style.Dialogs}>
            <ProfileInfo />
            <div className={style.messages}>
                {messageElements}
            </div>
            <div className={style.dialogItems}>
                {dialogsElements}
            </div>
        </div>
    ); 
};

export default Dialogs;