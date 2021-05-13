import style from './Header.module.css'

const Header = () => {
    return (
        <header className={style.header}>
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png"
                alt="Logo"/>
        </header>
    )
}

export default Header;