import styles from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogs_items}>
                <div>
                    <NavLink to='/dialogs/1'>Misha</NavLink>
                </div>
                <div>
                    <NavLink to='/dialogs/2'>Roman</NavLink>
                </div>
                <div>
                    <NavLink to='/dialogs/3'>Danilo</NavLink>
                </div>
                <div>
                    <NavLink to='/dialogs/4'>Anton</NavLink>
                </div>
                <div>
                    <NavLink to='/dialogs/5'>Vasyl</NavLink>
                </div>
            </div>
            <div className={styles.dialogs_messages}>
                <div>Hi!</div>
                <div>How are you?</div>
                <div>You are welcome!</div>
            </div>
        </div>
    )
}

export default Dialogs;