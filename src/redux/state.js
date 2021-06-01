import {rerenderEntireTree} from "../render";

let state = {
    profilePage: {
        postData: [
            {id: 1, message: 'Hi, how are you?', likesCount: 3},
            {id: 2, message: 'It\'s my first post', likesCount: 7}
        ]
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

export let addPost = (newMessage) => {
    debugger;
    let newPost = {
        id:3,
        message: newMessage,
        likesCount: 0,
    }
    state.profilePage.postData.push(newPost);
    rerenderEntireTree(state);
}

export default state;



