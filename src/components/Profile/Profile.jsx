import styles from './Profile.module.css'
import Posts from "./MyPosts/Posts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <Posts profilePage={props.profilePage}
                   dispatch={props.dispatch}/>
        </div>
    )
}

export default Profile;