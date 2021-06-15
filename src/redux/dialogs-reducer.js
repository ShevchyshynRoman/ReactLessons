const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_DIALOG_TEXT = 'UPDATE-NEW-DIALOG-TEXT';

let initialState = {
    dialogs: [
        {id: 1, name: 'Mykhailo'},
        {id: 2, name: 'Roman'},
        {id: 3, name: 'Danilo'},
        {id: 4, name: 'Anton'},
        {id: 5, name: 'Vasyl'},
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'You are welcome!'}
    ],
    newDialogText: 'newDialogTestText'
}

const dialogsReducer = (state = initialState,action) => {
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