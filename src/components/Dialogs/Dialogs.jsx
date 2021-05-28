import styles from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";




const Dialogs = (props) => {
    let DialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>) //мапимо массив DialogsData для відмаьовування <DialogItem/>
    let MessagesElements = props.state.messages.map(m => <MessageItem message={m.message} id={m.id}/>) //мапимо массив MessagesData для відмаьовування <MessageItem/>

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogs_items}>
                {DialogsElements} {/*Відмальовуємо DialogItem*/}
            </div>
            <div className={styles.dialogs_messages}>
                {MessagesElements} {/*Відмальовуємо MessageItem*/}
            </div>
        </div>
    )
}

export default Dialogs;