import styles from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.nav_wrapper}>
            <div className={`${styles.item} ${styles.active}`}>
                <a href='/profile'>Profile</a>
            </div>
            <div className={`${styles.item} ${styles.active}`}>
                <a href='/dialogs'>Messages</a>
            </div>
            <div className={`${styles.item} ${styles.active}`}>
                <a href='/news'>News</a>
            </div>
            <div className={`${styles.item} ${styles.active}`}>
                <a href='/music'>Music</a>
            </div>
            <div className={`${styles.item} ${styles.active}`}>
                <a href='/settings'>Settings</a>
            </div>
            </div>
        </nav>
    )
}

export default Navbar;