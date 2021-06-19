import React from 'react'
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import Posts from "./Posts";
import StoreContext from "../../../StoreContext";


const PostsContainer = () => {
    return (
        <StoreContext.Consumer>
            {
            (store) => {
                let state = store.getState().profilePage;

                let addPost = () => {
                   store.dispatch(addPostActionCreator())
                }
                let updateNewPostText = (text) => {
                    let action = updateNewPostTextActionCreator(text)
                    store.dispatch(action) //передаємо text з textarea
                }
                return (
                    <Posts addPost={addPost}
                           updateNewPostText={updateNewPostText}
                           newPostText={state.newPostText}
                           postData={state.postData}/>
                )
            }
        }
        </StoreContext.Consumer>
    )
}

export default PostsContainer;