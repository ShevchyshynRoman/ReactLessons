import React from 'react'
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import Posts from "./Posts";


const PostsContainer = (props) => {
    let state = props.store.getState();

    let addPost = () => {
        props.store.dispatch(addPostActionCreator())
    }
    let updateNewPostText = (text) => {
       let action = updateNewPostTextActionCreator(text)
        props.store.dispatch(action) //передаємо text з textarea
    }


    return <Posts addPost={addPost}
                  updateNewPostText={updateNewPostText}
                  newPostText={state.profilePage.newPostText}
                  postData={state.profilePage.postData}/>
}

export default PostsContainer;