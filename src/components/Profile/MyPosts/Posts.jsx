import styles from './Posts.module.css'
import Post from "./Post/Post";

const PostData = [
    {id: 1, message: 'Hi, how are you?', likesCount: 3},
    {id: 2, message: 'It\'s my first post', likesCount: 7}
]
let PostsElements = PostData.map(post => <Post message={post.message} likesCount={post.likesCount} id={post.id}/>)

const Posts = (props) => {
    return (
        <div className={styles.posts_wrapper}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea> </textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={styles.posts}>
                {PostsElements} {/*Відмальовуємо <Post/>*/}
            </div>
        </div>
    )
}

export default Posts;