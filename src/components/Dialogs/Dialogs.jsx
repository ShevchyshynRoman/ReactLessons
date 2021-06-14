import styles from './Dialogs.module.css'
import React from 'react'
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";


const Dialogs = (props) => {
    let state = props.store.getState().dialogsPage;

    let DialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>) //мапимо массив DialogsData для відмаьовування <DialogItem/>
    let MessagesElements = state.messages.map(m => <MessageItem message={m.message} id={m.id}/>) //мапимо массив MessagesData для відмаьовування <MessageItem/>

    let onSendMessageClick = () => {
        //props.addMessage()
        //props.dispatch({type: 'ADD-MESSAGE'})
        props.dispatch(addMessageActionCreator())
    }
    let onNewMessageChange = (event) => {
        let text = event.target.value;
        //props.updateNewDialogText(text)
        //props.dispatch({ type: 'UPDATE-NEW-DIALOG-TEXT', newText: text})
        props.dispatch(updateNewMessageTextActionCreator(text)) // передаємо text з textarea
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
                                  value={state.newDialogText}/>
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