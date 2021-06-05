let store = {
    _CallSubscriber(){
        // subscribe(observer = rerenderEntireTree)
    },
    _state: {
        profilePage: {
            postData: [
                {id: 1, message: 'Hi, how are you?', likesCount: 3},
                {id: 2, message: 'It\'s my first post', likesCount: 7}
            ],
            newPostText: 'it-kamasutra',
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
            newDialogText: 'test text'
        },
        sideBar: {
            friends: [
                {name: 'Vasya'},
                {name: 'Serega'},
                {name: 'Tohan'}
            ]
        },
    },
    getState(){
        return this._state
    },
    // Posts
    addPost() {
        let newPost = {
            id: 3,
            message: this._state.profilePage.newPostText,
            likesCount: 0,
        }
        this._state.profilePage.postData.push(newPost);
        this._state.profilePage.newPostText = '';
        this._CallSubscriber(this._state);
    },
    updateNewPostText(newText){
        this._state.profilePage.newPostText = newText;
        this._CallSubscriber(this._state);
    },
    // Dialogs
    addMessage() {
        let dialogMessage = {
            id:4,
            message: this._state.dialogsPage.newDialogText
        }
        this._state.dialogsPage.messages.push(dialogMessage)
        this._state.dialogsPage.newDialogText = '';
        this._CallSubscriber(this._state)
    },
    updateNewDialogText(newText) {
        this._state.dialogsPage.newDialogText = newText
        this._CallSubscriber(this._state)
    },
    subscribe(observer){
        this._CallSubscriber = observer
    }
}


window.store = store
export default store;



