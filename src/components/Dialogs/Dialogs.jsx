import styles from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id; // виносимо окремо path з NavLink
    return (
        <div>
            <NavLink to={path}>
                {props.name}
            </NavLink>
        </div>
    )
}
const MessageItem = (props) => {
    return (
        <div>
            {props.message}
        </div>
    )
}

const dialogs = [
    {id: 1, name: 'Mykhailo'},
    {id: 2, name: 'Roman'},
    {id: 3, name: 'Danilo'},
    {id: 4, name: 'Anton'},
    {id: 5, name: 'Vasyl'},
]
let DialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>) //мапимо массив DialogsData для відмаьовування <DialogItem/>

const messages = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'You are welcome!'}
]
let MessagesElements = messages.map(m => <MessageItem message={m.message} id={m.id}/>) //мапимо массив MessagesData для відмаьовування <MessageItem/>


const Dialogs = (props) => {
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