import styles from './Posts.module.css'
import Post from "./Post/Post";

const Posts = (props) => {
    return (
        <div className={styles.posts_wrapper}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={styles.posts}>
                <Post message='Hi,how are you?'
                      likesCount='3'/>
                <Post message="It's my first post"
                      likesCount='7'/>
            </div>
        </div>
    )
}

export default Posts;