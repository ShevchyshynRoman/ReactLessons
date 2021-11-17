import React from 'react'
import styles from './Posts.module.css'
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";



const MyPosts = (props) => {

    let PostsElements = props.postData.map(p => <Post message={p.message} likesCount={p.likesCount} id={p.id}  key={p.id}/>)

    const addNewPost = (values) => {
        props.addPost(values.newPostBody)
    }

    return (
        <div className={styles.posts_wrapper}>
            <h3>My posts</h3>
            <AddPostReduxForm onSubmit={addNewPost}/>
            <div className={styles.posts}>
                {PostsElements}
            </div>
        </div>
    )
}

const addPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field  component={'textarea'} name={'newPostBody'}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}
 const AddPostReduxForm = reduxForm({
    // a unique name for the form
    form: 'profileAddPostFormRedux'
})(addPostForm)



export default MyPosts;