import styles from './Posts.module.css'
import Post from "./Post/Post";

const PostData = [
    {id: 1, message: 'Hi, how are you?', likesCount: 3},
    {id: 2, message: 'It\'s my first post', likesCount: 7}
]

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
                <Post message={PostData[0].message} likesCount={PostData[0].likesCount}/>
                <Post message={PostData[1].message} likesCount={PostData[1].likesCount}/>
            </div>
        </div>
    )
}

export default Posts;