import React from 'react'
import styles from './Posts.module.css'
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/store";


const Posts = (props) => {
    let state = props.store.getState().profilePage
    let PostsElements = state.postData.map(post => <Post message={post.message} likesCount={post.likesCount}
                                                         id={post.id}/>)
    let addPost = () => {
        //props.addPost();
        //props.dispatch({type: 'ADD-POST'})
        props.dispatch(addPostActionCreator())
    }
    let onPostChange = (event) => {
        let text = event.target.value;
        //props.updateNewPostText(text);
        ///let action = {type: 'UPDATE-NEW-POST-TEXT', newText: text};
        ///props.dispatch(action)
        props.dispatch(updateNewPostTextActionCreator(text)) //передаємо text з textarea
    }


    return (
        <div className={styles.posts_wrapper}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange}
                              value={state.newPostText}/> {/*Передаємо зі state newPostText*/}
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={styles.posts}>
                {PostsElements} {/*Відмальовуємо <Post/>*/}
            </div>
        </div>
    )
}

export default Posts;