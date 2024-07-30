import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import '/css/styles.css';

library.add(fas);

function Header() {
  return (
      <header>
          <h1>DEMO TITLE</h1>
          <nav role="navigation">
              <ul className="nav-menu">
                  |<li><a className="list-item" href="#screen-1">HOME TAB</a></li>|
                  <li><a className="list-item" href="#screen-2">ACTIVITIES</a></li>|
                  <li><a className="list-item" href="#screen-3">ACCOUNT SETTINGS</a></li>|
                  <li><a className="list-item" href="#screen-4">REGISTER</a></li>
                  <li className="settings">
                      <a href="#" className="settings-icon"><img src="src/assets/settings.png" alt="settings-icon" width={44} height={44}></img></a>
                      <ul className="dropdown-menu">
                          <li><a href="#profile">Profile</a></li>
                          <li><a href="#privacy">Settings</a></li>
                          <li><a href="#logout">Logout</a></li>
                      </ul>
                  </li>
              </ul>
          </nav>
      </header>
  );
}
export default Header;