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
    newDialogText: ''
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_DIALOG_TEXT:
            return  {
                ...state,
                newDialogText: action.newText
            }
        case ADD_MESSAGE: {
            let dialogMessage = state.newDialogText
            return  {
                ...state,
                newDialogText: '',
                messages: [...state.messages, {id: 4, message: dialogMessage}]
            }
        }
        default:
            return state;
    }
}
export const addMessage = () => ({type: ADD_MESSAGE})
export const updateNewMessageText = (text) => ({type: UPDATE_NEW_DIALOG_TEXT, newText: text})

export default dialogsReducer;