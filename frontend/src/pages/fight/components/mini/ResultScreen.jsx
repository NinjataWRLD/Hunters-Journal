import { Link } from 'react-router-dom';
import styles from "../../Fight.module.css";

function ResultScreen() {
    return (
        <div className={styles.result}>
            <h2>Winner:</h2>
            <div className={styles.home}><Link to={"/"}>Home</Link></div>
        </div>
    );
}

export default ResultScreen;