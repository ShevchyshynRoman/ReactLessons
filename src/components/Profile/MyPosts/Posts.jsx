import React from 'react'
import styles from './Posts.module.css'
import Post from "./Post/Post";


const Posts = (props) => {
    let PostsElements = props.state.postData.map(post => <Post message={post.message} likesCount={post.likesCount}
                                                               id={post.id}/>)

    let newPostText = React.createRef();
    let addPost = () => {
        debugger;
        let text = newPostText.current.value;
        props.addPost(text);
    }


    return (
        <div className={styles.posts_wrapper}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostText}> </textarea>
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