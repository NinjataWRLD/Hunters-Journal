import { useContext } from 'react';
import { Link } from 'react-router-dom'
import Context from '@/context';
import styles from './Header.module.css';

function Header() {
    const { toggleMusic, isPlaying } = useContext(Context);

    return (
        <header className={styles.header}>
            <h1>HUNTER'S JOURNAL</h1>
            <nav className={styles.nav}>
                <ul className={styles["nav-menu"]}>
                    <li><Link className={styles["list-item"]} to="/">HOME TAB</Link></li>|
                    <li><Link className={styles["list-item"]} to="/monsters">MONSTERS</Link></li>|
                    <li><Link className={styles["list-item"]} to="/humans">HUMANS</Link></li>
                    <li className={styles["settings"]}>
                        <div className={styles["settings-icon"]}><img src="/settings.png" alt="settings-icon" width={44} height={44}></img>
                            <ul className={styles["dropdown-menu"]}>
                                <li>
                                    <div id={isPlaying ? styles['stop-music'] : styles['play-music']} onClick={toggleMusic}>
                                        {isPlaying ? 'Stop music' : 'Play music'}
                                    </div>
                                </li>
                                <li><Link to="/monsters">Monsters</Link></li>
                                <li><Link to="/humans">Humans</Link></li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
export default Header;