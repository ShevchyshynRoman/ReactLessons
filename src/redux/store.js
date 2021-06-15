
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
        sideBar: {},
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


    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sideBar = sidebarReducer(this._state.sideBar, action);
        this._CallSubscriber();
    }

}


window.store = store
export default store;



