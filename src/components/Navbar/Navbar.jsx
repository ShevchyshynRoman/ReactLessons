import styles from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.nav_wrapper}>
            <div className={`${styles.item} ${styles.active}`}>
                <a>Profile</a>
            </div>
            <div className={`${styles.item} ${styles.active}`}>
                <a>Messages</a>
            </div>
            <div className={`${styles.item} ${styles.active}`}>
                <a>News</a>
            </div>
            <div className={`${styles.item} ${styles.active}`}>
                <a>Music</a>
            </div>
            <div className={`${styles.item} ${styles.active}`}>
                <a>Settings</a>
            </div>
            </div>
        </nav>
    )
}

export default Navbar;