import React from 'react'
import styles from './Posts.module.css'
import Post from "./Post/Post";


const Posts = (props) => {
    let PostsElements = props.profilePage.postData.map(post => <Post message={post.message} likesCount={post.likesCount}
                                                         id={post.id}/>)

    let newPostText = React.createRef();
    let addPost = () => {
        //props.addPost();
        props.dispatch({type: 'ADD-POST'})
    }
    let onPostChange = () => {
        let text = newPostText.current.value;
        //props.updateNewPostText(text);
        props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText:text})
    }


    return (
        <div className={styles.posts_wrapper}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostText} onChange={onPostChange}
                              value={props.profilePage.newPostText}/> {/*Передаємо зі state newPostText*/}
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