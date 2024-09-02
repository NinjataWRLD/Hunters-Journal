import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import './Header.css';
import Context from '../context';

library.add(fas);

function Header() {
    const { toggleMusic, isPlaying } = useContext(Context);
    const navigate = useNavigate();

    return (
        <header>
            <h1>HUNTER'S JOURNAL</h1>
            <nav role="navigation">
                <ul className="nav-menu">
                    <li><Link className="list-item" to="/">HOME TAB</Link></li>
                    <li className="settings">
                        <Link to="#" className="settings-icon"><img src="/settings.png" alt="settings-icon" width={44} height={44}></img></Link>
                        <ul className="dropdown-menu">
                            <li>
                                <Link id={isPlaying ? 'stop-music' : 'play-music'} onClick={toggleMusic}>
                                    {isPlaying ? 'Stop music' : 'Play music'}
                                </Link>
                            </li>
                            <li onClick={() => navigate('/browse')}>Monsters</li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
export default Header;