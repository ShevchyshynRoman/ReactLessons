import styles from './Dialogs.module.css'

const Dialogs = (props) => {
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogs_items}>
                <div className={styles.dialog}>Misha</div>
                <div className={styles.dialog + ' ' + styles.active_message}>Roman</div>
                <div className={styles.dialog}>Danilo</div>
                <div className={styles.dialog}>Anton</div>
                <div className={styles.dialog}>Vasyl</div>
            </div>
            <div className={styles.dialogs_messages}>
                <div className={styles.message}>Hi!</div>
                <div className={styles.message}>How are you?</div>
                <div className={styles.message}>You are welcome!</div>
            </div>
        </div>
    )
}

export default Dialogs;