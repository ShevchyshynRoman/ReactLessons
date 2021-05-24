import styles from './Posts.module.css'
import Post from "./Post/Post";



const Posts = (props) => {
    let PostsElements = props.PostData.map(post => <Post message={post.message} likesCount={post.likesCount} id={post.id}/>)

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