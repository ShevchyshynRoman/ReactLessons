import styles from './OnePerson.module.css'

const OnePerson = (props) => {
    return (
        <div className={styles.onePerson_wrapper}>
            <div className={styles.circle}> </div>
            <div className={styles.onePersonName}> {props.name} </div>
        </div>
    )
}

export default OnePerson;