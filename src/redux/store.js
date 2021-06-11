// POSTS
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
// DIALOGS
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_DIALOG_TEXT = 'UPDATE-NEW-DIALOG-TEXT';

let store = {
    _state: {
        profilePage: {
            postData: [
                {id: 1, message: 'Hi, how are you?', likesCount: 3},
                {id: 2, message: 'It\'s my first post', likesCount: 7}
            ],
            newPostText: 'newPostTestText',
        },
        dialogsPage: {
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
        },
        sideBar: {
            friends: [
                {name: 'Vasya'},
                {name: 'Serega'},
                {name: 'Tohan'}
            ]
        },
    },
    _CallSubscriber() {
        // subscribe(observer = rerenderEntireTree)
    },
    // Methods for change _state
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._CallSubscriber = observer
    },
    //
    dispatch(action) {
        // POSTS //
        if (action.type === ADD_POST) {
            let newPost = {
                id: 3,
                message: this._state.profilePage.newPostText,
                likesCount: 0,
            }
            this._state.profilePage.postData.push(newPost);
            this._state.profilePage.newPostText = '';
            this._CallSubscriber(this._state);
        }
        else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._CallSubscriber(this._state);
        }
        // DIALOGS //
        else if (action.type === ADD_MESSAGE) {
            let dialogMessage = {
                id: 4,
                message: this._state.dialogsPage.newDialogText
            }
            this._state.dialogsPage.messages.push(dialogMessage)
            this._state.dialogsPage.newDialogText = '';
            this._CallSubscriber(this._state)
        }
        else if (action.type === UPDATE_NEW_DIALOG_TEXT) {
            this._state.dialogsPage.newDialogText = action.newText;
            this._CallSubscriber(this._state);
        }
    }
}

// POSTS ACTION CREATORS
export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})
//DIALOGS ACTION CREATORS
export const addMessageActionCreator = () => ({type: ADD_MESSAGE})
export const updateNewMessageTextActionCreator = (text) => ({type: UPDATE_NEW_DIALOG_TEXT, newText: text})

window.store = store
export default store;



