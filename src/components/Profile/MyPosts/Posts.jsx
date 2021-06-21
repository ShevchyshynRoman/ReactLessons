import React from 'react'
import styles from './Posts.module.css'
import Post from "./Post/Post";


const Posts = (props) => {

    let PostsElements = props.postData.map(post => <Post message={post.message} likesCount={post.likesCount}
                                                         id={post.id}/>)
    let onAddPost = () => {
        props.addPost();
    }
    let onPostChange = (event) => {
        let text = event.target.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={styles.posts_wrapper}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange}
                              value={props.newPostText}/> {/*Передаємо зі state newPostText*/}
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={styles.posts}>
                {PostsElements} {/*Відмальовуємо <Post/>*/}
            </div>
        </div>
    )
}

export default Posts;