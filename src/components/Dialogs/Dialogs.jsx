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


const Dialogs = (props) => {
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogs_items}>
                <DialogItem name='Mykhailo' id='1'/>
                <DialogItem name='Roman' id='2'/>
                <DialogItem name='Danilo' id='3'/>
                <DialogItem name='Anton' id='4'/>
                <DialogItem name='Vasyl' id='5'/>
            </div>
            <div className={styles.dialogs_messages}>
                <MessageItem message='Hi'/>
                <MessageItem message='How are you?'/>
                <MessageItem message='You are welcome!'/>
            </div>
        </div>
    )
}

export default Dialogs;