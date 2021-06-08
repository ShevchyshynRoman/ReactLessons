import styles from './Dialogs.module.css'
import React from 'react'
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";


const Dialogs = (props) => {
    let DialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>) //мапимо массив DialogsData для відмаьовування <DialogItem/>
    let MessagesElements = props.dialogsPage.messages.map(m => <MessageItem message={m.message} id={m.id}/>) //мапимо массив MessagesData для відмаьовування <MessageItem/>

    let newMessageText = React.createRef();
    let addMessage = () => {
        //props.addMessage()
        props.dispatch({type: 'ADD-MESSAGE'})
    }
    let onDialogChange = () => {
        let text = newMessageText.current.value;
        //props.updateNewDialogText(text)
        props.dispatch({ type: 'UPDATE-NEW-DIALOG-TEXT', newText: text})
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
                        <textarea ref={newMessageText} onChange={onDialogChange}
                                  value={props.dialogsPage.newDialogText}> </textarea>
                    </div>
                    <div>
                        <button onClick={addMessage}>Add Message</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;