import { Link } from "react-router-dom"
import {useState, useEffect} from "react"
import sun from "../img/sun.svg"
import moon from "../img/moon.svg"
type PropsType = {}
export const Header = ({ }: PropsType) => {

    const [darkMode, setDarkMode] = useState<boolean>(false)
    const [menu, setMenu] = useState(false)

    const changeMode = () => {
        setDarkMode(!darkMode)
    }

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark")
        } else {
            document.documentElement.classList.remove("dark")
        }
    }, [darkMode])

    useEffect(() => {
        if (menu) {
            document.body.classList.add("lock")
        } else {
            document.body.classList.remove("lock")
        }
    }, [menu])

    return (
        <header className='header bg-zinc-950 py-6'>
            <div className='container flex justify-between items-center'>
                <Link to='/' className='logo mr-3 font-bold text-2xl text-slate-50'>Haki</Link>
                <nav className={`nav ${menu ? "active" : ""} flex justify-between text-slate-50`}>
                    <Link onClick={() => setMenu(false)} to='home' className='nav-link'>Mugiwars</Link>
                    <Link onClick={() => setMenu(false)} to='projects' className='nav-link'>Devil fruits</Link>
                    <Link onClick={() => setMenu(false)} to='contacts' className='nav-link'>Haki</Link>
                    <Link onClick={() => setMenu(false)} to='contacts' className='nav-link'>Swords</Link>
                    <Link onClick={() => setMenu(false)} to='contacts' className='nav-link'>Organisation</Link>
                    <Link onClick={() => setMenu(false)} to='contacts' className='nav-link'>Boats</Link>
                    <button onClick={changeMode} className={`dark-mode-btn ${darkMode ? "active" : ""}`}>
                        <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
                        <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
                    </button>
                </nav>
                <div className={`burger-menu ${menu ? "active" : ""}`} onClick={() => setMenu(!menu)}>
                    <div className="burger-line"></div>
                    <div className="burger-line"></div>
                    <div className="burger-line"></div>
                </div>
            </div>
        </header>
    );
}