import styles from "../ReadHumans.module.css"

function ReadOnlyHuman({ human }) {
    return (
        <>
            <div className={styles["human-info"]}>
                <div className={styles.info}>Name: <span className={styles["inline-info"]}>{human.name}</span></div>
                <div className={styles.info}>Damage: <span className={styles["inline-info"]}>{human.damage}</span></div>
                <div className={styles.info}>HP: <span className={styles["inline-info"]}>{human.hp}</span></div>
                <div className={styles.info}>Rarity: <span className={styles["inline-info"]}>{human.rarity}</span></div>
                <div className={styles.info}>Strengths: <span className={styles["inline-info"]}>{(human.strength)}</span></div>
                <div className={styles.info}>Weaknesses: <span className={styles["inline-info"]}>{(human.weakness) ? `${human.weakness}` : "None"}</span></div>
                <img className={styles.image} src={human.image} alt="Not valid link" />
                <div className={styles.fights}>
                    <h2>Won fights:</h2>
                    <h3 className={styles.counter}>0</h3>
                </div>
            </div>
        </>
    );
}

export default ReadOnlyHuman;