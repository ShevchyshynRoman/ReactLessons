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

const DialogsData = [
    {id: 1, name: 'Mykhailo'},
    {id: 2, name: 'Roman'},
    {id: 3, name: 'Danilo'},
    {id: 4, name: 'Anton'},
    {id: 5, name: 'Vasyl'},
]
const MessagesData = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'You are welcome!'}
]


const Dialogs = (props) => {
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogs_items}>
                <DialogItem id={DialogsData[0].id} name={DialogsData[0].name}/>
                <DialogItem id={DialogsData[1].id} name={DialogsData[1].name}/>
                <DialogItem id={DialogsData[2].id} name={DialogsData[2].name}/>
                <DialogItem id={DialogsData[3].id} name={DialogsData[3].name}/>
                <DialogItem id={DialogsData[4].id} name={DialogsData[4].name}/>
            </div>
            <div className={styles.dialogs_messages}>
                <MessageItem message={MessagesData[0].message}/>
                <MessageItem message={MessagesData[1].message}/>
                <MessageItem message={MessagesData[2].message}/>
            </div>
        </div>
    )
}

export default Dialogs;