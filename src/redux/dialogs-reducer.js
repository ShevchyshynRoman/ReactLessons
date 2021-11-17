const ADD_MESSAGE = 'ADD-MESSAGE';


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
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            let dialogMessage = action.newMessageBody
            return  {
                ...state,
                messages: [...state.messages, {id: 4, message:  dialogMessage}]
            }
        }
        default:
            return state;
    }
}
export const addMessage = (newMessageBody) => ({type: ADD_MESSAGE, newMessageBody})


export default dialogsReducer;