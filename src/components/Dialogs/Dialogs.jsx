import styles from './Dialogs.module.css'
import React from 'react'
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";



const Dialogs = (props) => {
    let state = props.dialogsPage
    let DialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} key={d.id}/>) //мапимо массив DialogsData для відмаьовування <DialogItem/>
    let MessagesElements = state.messages.map(m => <MessageItem message={m.message} id={m.id} key={m.id}/>) //мапимо массив MessagesData для відмаьовування <MessageItem/>

    let onSendMessageClick = () => {
        props.addMessage()
    }
    let onNewMessageChange = (event) => {
        let text = event.target.value;
        props.updateNewMessageText(text)
    }


    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogs_items}>
                {DialogsElements} {/*Відмальовуємо DialogItem*/}
            </div>
            <div className={styles.dialogs_messages}>
                {MessagesElements} {/*Відмальовуємо MessageItem*/}
                <div>
                    <div>
                        <textarea onChange={onNewMessageChange}
                                  value={props.dialogsPage.newDialogText}/>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Add Message</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;