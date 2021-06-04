let rerenderEntireTree = () => {
    // subscribe(observer = rerenderEntireTree
}

let state = {
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
}
// Posts
export const addPost = () => {
    let newPost = {
        id: 3,
        message: state.profilePage.newPostText,
        likesCount: 0,
    }
    state.profilePage.postData.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}
export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}
// Dialogs
export const addMessage = () => {
    let dialogMessage = {
        id:4,
        message: state.dialogsPage.newDialogText
    }
    state.dialogsPage.messages.push(dialogMessage)
    state.dialogsPage.newDialogText = '';
    rerenderEntireTree(state)
}
export const updateNewDialogText = (newText) => {
    state.dialogsPage.newDialogText = newText
    rerenderEntireTree(state)
}
//
export let subscribe = (observer) => {
    rerenderEntireTree = observer
}

window.state = state
export default state;



