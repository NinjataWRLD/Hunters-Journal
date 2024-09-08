import styles from "../../Fight.module.css";

function StartScreen({ isError, hideMainScreen }) {
    return (
        <div className={styles.container}>
            <h2>Make sure you've applied images to all <span>humans</span> and <span>monsters</span></h2>
            <button className={styles.button} onClick={() => hideMainScreen()}>Begin Battle</button>
            <h3>(still in development)</h3>
            {isError
                ? <div className={styles.error}>You need at least 3 images
                    for humans and monsters individually to proceed!</div>
                : ''}
        </div>
    );
}

export default StartScreen;