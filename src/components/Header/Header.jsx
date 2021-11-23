import React from "react";
import styles from './Header.module.css'
import {NavLink} from "react-router-dom";


const Header = (props) => {


    return (
        <header className={styles.header}>
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png"
                alt="Logo"/>
            <div className={styles.loginBlock}>
                {
                    props.isAuth
                    ?  <span>{props.login} - <button onClick={props.logOut}>Logout</button></span>
                    : <NavLink to={'/login'}>Login</NavLink>
                }
            </div>
        </header>
    )
}

export default Header;