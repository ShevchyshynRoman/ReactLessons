import style from './Post.module.css'

const Post = () => {
    return (
        <div className={style.item}>
            <img src="https://www.shareicon.net/data/512x512/2016/05/29/772559_user_512x512.png" alt="avatar"/>
            Some text
            <div>
                <span>Like</span> 0
            </div>
        </div>
    )
}

export default Post;