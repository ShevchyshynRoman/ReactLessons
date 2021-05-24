import styles from './Profile.module.css'
import Posts from "./MyPosts/Posts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <Posts PostData={props.PostData}/>
        </div>
    )
}

export default Profile;