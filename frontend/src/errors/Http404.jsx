import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Http404.module.css"


function Http404() {
    return (
        <>
            <div className={styles.error}>
                <FontAwesomeIcon icon="heart-crack" className={styles.icon}/>
                <h1 className={styles.title}>Sorry, but this page does not exist!</h1>
                <h2>Try contacting the developers for more info!</h2>
            </div>
        </>
    );
}

export default Http404;