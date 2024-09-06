import { useContext } from 'react';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeMute } from "@fortawesome/free-solid-svg-icons";
import { faVolumeHigh } from "@fortawesome/free-solid-svg-icons";
import Context from '@/context';
import styles from './Header.module.css';

function Header() {
    const { toggleMusic, isPlaying } = useContext(Context);
    function switchIcon() {
        if(isPlaying) {
            return faVolumeHigh;
        }
        return faVolumeMute;
    }

    return (
        <header className={styles.header}>
            <h1>HUNTER'S JOURNAL</h1>
            <nav className={styles.nav}>
                <ul className={styles["nav-menu"]}>
                    <li><Link className={styles["list-item"]} to="/">HOME TAB</Link></li>|
                    <li><Link className={styles["list-item"]} to="/monsters">MONSTERS</Link></li>|
                    <li><Link className={styles["list-item"]} to="/humans">HUMANS</Link></li>
                    <li className={styles["settings"]}>
                    <ul><li className={styles["volume-icon"]} onClick={toggleMusic}><FontAwesomeIcon icon={switchIcon()}/></li></ul>
                        <div className={styles["settings-icon"]}><img src="/settings.png" alt="settings-icon" width={44} height={44}></img>
                            <ul className={styles["dropdown-menu"]}>
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