import styles from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import lookingForAJob from '../../../assets/images/successJob.png'
import dontLookingForAJob from '../../../assets/images/dislike.png'

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
     return (
        <div>
            <div>
                <img
                    src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350'/>
            </div>
            <div className={styles.description}>
                <div>
                    <img src={props.profile.data.photos.large}/>
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

                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;