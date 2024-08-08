import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Header.css';

library.add(fas);

function Header({ playMusic, stopMusic, pageTitle }) {
    pageTitle = "HOME TAB";
    return (
        <header>
            <h1>HUNTER'S JOURNAL</h1>
            <nav role="navigation">
                <ul className="nav-menu">
                    |<li><a className="list-item" href="#screen-1">{pageTitle}</a></li>
                    <li className="settings">
                        <a href="#" className="settings-icon"><img src="src/assets/settings.png" alt="settings-icon" width={44} height={44}></img></a>
                        <ul className="dropdown-menu">
                            <li><a href="#">Log In</a></li>
                            <li><a id='play-music' onClick={playMusic}>Play music</a></li>
                            <li><a id='stop-music' onClick={stopMusic}>Stop music</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
export default Header;