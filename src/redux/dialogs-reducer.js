const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_DIALOG_TEXT = 'UPDATE-NEW-DIALOG-TEXT';

const dialogsReducer = (state,action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let dialogMessage = {
                id: 4,
                message: state.newDialogText
            }
            state.messages.push(dialogMessage)
            state.newDialogText = '';
            return state;
        case UPDATE_NEW_DIALOG_TEXT:
            state.newDialogText = action.newText;
            return state;
        default:
            return state;
    }

}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE})
export const updateNewMessageTextActionCreator = (text) => ({type: UPDATE_NEW_DIALOG_TEXT, newText: text})

export default dialogsReducer;