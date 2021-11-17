import styles from './Dialogs.module.css'
import React from 'react'
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import {Field, reduxForm} from "redux-form";




const Dialogs = (props) => {
    let state = props.dialogsPage
    let DialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} key={d.id}/>) //мапимо массив DialogsData для відмаьовування <DialogItem/>
    let MessagesElements = state.messages.map(m => <MessageItem message={m.message} id={m.id} key={m.id}/>) //мапимо массив MessagesData для відмаьовування <MessageItem/>

    const addNewMessage = (values) => {
        props.addMessage(values.newMessageBody)
    }

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogs_items}>
                {DialogsElements}
            </div>
            <div className={styles.dialogs_messages}>
                {MessagesElements}
                <div>
                    <AddMessageFormRedux onSubmit={addNewMessage}/>
                </div>
            </div>
        </div>
    )
}

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Enter your message'} component={'textarea'} name={'newMessageBody'}/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}
const AddMessageFormRedux = reduxForm({
    // a unique name for the form
    form: 'dialogAddMessageFormRedux'
})(AddMessageForm)

export default Dialogs;