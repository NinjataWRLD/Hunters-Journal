import { useContext } from 'react';
import { Link } from 'react-router-dom'
import Context from '@/context';
import './Header.css';

function Header() {
    const { toggleMusic, isPlaying } = useContext(Context);
    
    return (
        <header>
            <h1>HUNTER'S JOURNAL</h1>
            <nav role="navigation">
                <ul className="nav-menu">
                    <li><Link className="list-item" to="/">HOME TAB</Link></li>
                    <li className="settings">
                        <div className="settings-icon"><img src="/settings.png" alt="settings-icon" width={44} height={44}></img></div>
                        <ul className="dropdown-menu">
                            <li>
                                <div id={isPlaying ? 'stop-music' : 'play-music'} onClick={toggleMusic}>
                                    {isPlaying ? 'Stop music' : 'Play music'}
                                </div>
                            </li>
                            <li><Link to="/monsters">Monsters</Link></li>
                            <li><Link to="/humans   ">Humans</Link></li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
export default Header;