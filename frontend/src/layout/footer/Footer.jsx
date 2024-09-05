import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

function Footer() {
    return (
        <>
        <footer className={styles.footer}>
            <p>&copy; 2024 Demo. All rights reserved.</p> |
            <p>
              Follow us on
              <Link target="_blank" to="https://x.com/customcads/"> Twitter </Link> and
              <Link target="_blank" to="https://www.instagram.com/custom_cads/"> Instagram</Link>
            </p> |
            <p>
              <Link to="/privacy-policy">Privacy Policy</Link>
            </p>
          </footer>
        </>
    );
}

export default Footer;