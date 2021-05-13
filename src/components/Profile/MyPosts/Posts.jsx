import style from './Posts.module.css'
import Post from "./Post/Post";

const Posts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div>
                <div>
                    <Post/>
                </div>
            </div>
        </div>
    )
}

export default Posts;