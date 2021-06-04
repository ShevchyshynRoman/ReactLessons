import styles from './Friends.module.css'
import OnePerson from "./OnePerson/OnePerson";

const Friends = (props) => {
    let personsElements = props.sideBar.friends.map( (n) => <OnePerson name={n.name} />)
    return (
        <div className={styles.friends_content}>
            <h3 className={styles.title}>Best Friends</h3>
            <div className={styles.persons_wrapper}>
                {personsElements}
            </div>
        </div>
    )
}

export default Friends;