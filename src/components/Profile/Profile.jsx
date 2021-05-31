import styles from './Profile.module.css'
import Posts from "./MyPosts/Posts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <Posts state={props.state}
                   addPost={props.addPost}/>
        </div>
    )
}

export default Profile;