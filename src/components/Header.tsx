import { Link, NavLink } from "react-router-dom"
import {useState, useEffect} from "react"
import sun from "../img/sun.svg"
import moon from "../img/moon.svg"
import { useAppSelector } from "../store/hooks"
import { RootState } from "../store/store"
import { incognitoAva } from "../utils/constans"
type PropsType = {}
export const Header = ({ }: PropsType) => {

    const [darkMode, setDarkMode] = useState<boolean>(false)
    const [menu, setMenu] = useState(false)


    const changeMode = () => {
        const newDarkMode = !darkMode;
        setDarkMode(newDarkMode);
        localStorage.setItem('darkMode', JSON.stringify(newDarkMode));
    };

    const isUserAuth = useAppSelector((state:RootState) => state.user.isAuth)
    const userImage = useAppSelector((state:RootState) => state.user.image)


    useEffect(() => {
        const savedDarkMode = JSON.parse(localStorage.getItem('darkMode') || 'false');
        if (typeof savedDarkMode === 'boolean') {
          setDarkMode(savedDarkMode);
        }
      }, []); 

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
                    <NavLink  to="/anime/21" className='nav-link cursor-pointer'>One Piece</NavLink>
                    <NavLink onClick={() => setMenu(false)} to='/mugiwars' className='nav-link'>Mugiwars</NavLink>
                    <NavLink onClick={() => setMenu(false)} to='/haki' className='nav-link'>Haki</NavLink>
                    <NavLink onClick={() => setMenu(false)} to='/meito' className='nav-link'>Meito</NavLink>
                    <NavLink onClick={() => setMenu(false)} to='contacts' className='nav-link'>Organisation</NavLink>
                    <NavLink onClick={() => setMenu(false)} to='contacts' className='nav-link'>Boats</NavLink>
                    <button onClick={changeMode} className={`dark-mode-btn ${darkMode ? "active" : ""}`}>
                        <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
                        <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
                    </button>
                </nav>
                <div>
                    { isUserAuth 
                        ? <Link to='/profile' className='ml-3 font-bold text-xl text-slate-50 flex items-center'>
                           { userImage 
                           ? <img src={userImage} className="avatar"/> 
                           : <img src={incognitoAva} className="avatar"/>}
                        </Link>
                        : <Link to='/login' className='ml-3 font-bold text-xl text-slate-50'>Login</Link>
                    }
                </div>
                
                <div className={`burger-menu ${menu ? "active" : ""}`} onClick={() => setMenu(!menu)}>
                    <div className="burger-line"></div>
                    <div className="burger-line"></div>
                    <div className="burger-line"></div>
                </div>
            </div>
        </header>
    );
}