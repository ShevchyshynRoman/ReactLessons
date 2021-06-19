import React from 'react'
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {
    let state = props.store.getState();

    let addMessage = () => {
        props.store.dispatch(addMessageActionCreator())
    }
    let updateNewMessageText = (text) => {
        let action = updateNewMessageTextActionCreator(text)
        props.store.dispatch(action) // передаємо text з textarea
    }

    return (
        <Dialogs addMessage={addMessage}
                 updateNewMessageText={updateNewMessageText}
                 dialogs={state.dialogsPage.dialogs}
                 messages={state.dialogsPage.messages}
                 newDialogText={state.dialogsPage.newDialogText}/>
    )
}

export default DialogsContainer;