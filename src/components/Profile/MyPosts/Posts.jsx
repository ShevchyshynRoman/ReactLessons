import styles from './Posts.module.css'
import Post from "./Post/Post";

const Posts = (props) => {
    return (
        <div className={styles.posts_wrapper}>
            My posts
            <div>
                <textarea></textarea>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div>
                <div>
                    <Post message='Hi,how are you?'
                          likesCount='3'/>
                    <Post message="It's my first post"
                          likesCount='7'/>
                </div>
            </div>
        </div>
    )
}

export default Posts;