import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react';
import { Link } from 'react-router-dom'
import './Header.css';
import Context from '../context';

library.add(fas);

function Header() {
    const { playMusic, stopMusic } = useContext(Context);
    return (
        <header>
            <h1>HUNTER'S JOURNAL</h1>
            <nav role="navigation">
                <ul className="nav-menu">
                   <li><Link className="list-item" to="/">HOME TAB</Link></li>
                    <li className="settings">
                        <Link to="#" className="settings-icon"><img src="src/assets/settings.png" alt="settings-icon" width={44} height={44}></img></Link>
                        <ul className="dropdown-menu">
                            <li><Link to="/contact">Log In</Link></li>
                            <li><Link id='play-music' onClick={playMusic}>Play music</Link></li>
                            <li><Link id='stop-music' onClick={stopMusic}>Stop music</Link></li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
export default Header;