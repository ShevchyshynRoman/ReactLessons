import React from 'react'
import styles from './Posts.module.css'
import Post from "./Post/Post";
import {Field, reduxForm, reset} from "redux-form";
import {maxLengthCreator, required} from "../../../utilities/validators/validators";
import {Element} from "../../common/FormsControls/FormControls";


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

const Textarea = Element('textarea')
const maxLength10 = maxLengthCreator(10);
const addPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} placeholder={'Post message'} name={'newPostBody'} validate={[required,maxLength10]}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const afterSubmit = (result,dispatch) => {
    dispatch(reset('profileAddPostFormRedux'));
}

const AddPostReduxForm = reduxForm({
    // a unique name for the form
    form: 'profileAddPostFormRedux',
    onSubmitSuccess: afterSubmit,
})(addPostForm)


export default MyPosts;