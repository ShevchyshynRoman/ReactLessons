import React from 'react'
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";


const DialogsContainer = () => {
    return (
        <StoreContext.Consumer>
            {
            (store) => {
                let state = store.getState().dialogsPage;

                let addMessage = () => {
                    store.dispatch(addMessageActionCreator())
                }
                let updateNewMessageText = (text) => {
                    let action = updateNewMessageTextActionCreator(text)
                    store.dispatch(action) // передаємо text з textarea
                }

                return (
                    <Dialogs addMessage={addMessage}
                             updateNewMessageText={updateNewMessageText}
                             dialogs={state.dialogs}
                             messages={state.messages}
                             newDialogText={state.newDialogText}/>
                )
            }
        }
        </StoreContext.Consumer>
    )
}

export default DialogsContainer;