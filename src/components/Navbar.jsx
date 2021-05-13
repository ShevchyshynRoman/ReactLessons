import style from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={style.nav}>
            <div className={style.nav_wrapper}>
            <div className={`${style.item} ${style.active}`}>
                <a>Profile</a>
            </div>
            <div className={`${style.item} ${style.active}`}>
                <a>Messages</a>
            </div>
            <div className={`${style.item} ${style.active}`}>
                <a>News</a>
            </div>
            <div className={`${style.item} ${style.active}`}>
                <a>Music</a>
            </div>
            <div className={`${style.item} ${style.active}`}>
                <a>Settings</a>
            </div>
            </div>
        </nav>
    )
}

export default Navbar;