import styles from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import lookingForAJob from '../../../assets/images/successJob.png'
import dontLookingForAJob from '../../../assets/images/dislike.png'
import user from '../../../assets/images/user.png'
import ProfileStatus from "./ProfileStatus";



const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            {/*<div>
                <img
                    src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350'/>
            </div>*/}
            <div className={styles.description}>
                <div>
                    {props.profile.data.photos.large
                        ? <img className={styles.userAvatar} src={props.profile.data.photos.large}/>
                        : <img className={styles.userAvatar} src={user} alt="No Photo"/>}
                </div>
                <div>
                    <div> Full Name:
                        <span> {props.profile.data.fullName}</span>
                    </div>
                    <div> About me:
                        <span> {props.profile.data.aboutMe}</span>
                    </div>
                    <div>
                        Contacts:<span> {props.profile.data.contacts.vk}</span>
                    </div>
                    <div> Job looking:
                        <span>{props.profile.data.lookingForAJob
                            ? <img className={styles.jobImg} src={lookingForAJob}/>
                            : <img className={styles.jobImg} src={dontLookingForAJob}/>
                        }</span>
                    </div>
                    <div> Job description:
                        <span> {props.profile.data.lookingForAJobDescription}</span>
                    </div>
                    <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>

                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;