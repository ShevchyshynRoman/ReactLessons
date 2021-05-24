import styles from './Profile.module.css'
import Posts from "./MyPosts/Posts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const PostData = [
    {id: 1, message: 'Hi, how are you?', likesCount: 3},
    {id: 2, message: 'It\'s my first post', likesCount: 7}
]


const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <Posts PostData={PostData}/>
        </div>
    )
}

export default Profile;