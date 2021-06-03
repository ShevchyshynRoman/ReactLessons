import {rerenderEntireTree} from "../render";

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
        ]
    },
    sideBar: {
        friends: [
            {name: 'Vasya'},
            {name: 'Serega'},
            {name: 'Tohan'}
        ]
    },
}

export let addPost = () => {
    let newPost = {
        id:3,
        message: state.profilePage.newPostText,
        likesCount: 0,
    }
    state.profilePage.postData.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}
export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export default state;



