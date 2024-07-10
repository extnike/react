import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem.jsx";
import MessageItem from "./Message/Message.jsx";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/state.js";


const Dialogs = (props) => {

    let state = props.store.getState().dialogs
    let dialogElements = state.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}
                                                                           key={dialog.id}/>)
    let messageElements = state.messagesData.map(message => <MessageItem message={message.message} id={message.id}
                                                                               key={message.id}/>)
    let newMessageBody = state.newMessageBody

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }

    let onNewMessageChange = (e) => {
        let message = e.target.value
        props.store.dispatch(updateNewMessageBodyCreator(message))
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialog__list}>
                <ul>
                    {dialogElements}
                </ul>
            </div>
            <div className={classes.messages}>
                <div>{messageElements}</div>
                <div><textarea value={newMessageBody}
                               onChange={onNewMessageChange}
                                placeholder='Enter Message'/></div>
                <div>
                    <button onClick={onSendMessageClick}>Новое сообщение</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs