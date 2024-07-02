import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem.jsx";
import MessageItem from "./Message/Message.jsx";



const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialog__list}>
                <ul>
                    {props.state.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} key={dialog.id}/>)}
                </ul>
            </div>
            <div className={classes.messages}>
                {props.state.messagesData.map(message => <MessageItem message={message.message} id={message.id} key={message.id}/>)}
            </div>
        </div>
    )
}

export default Dialogs