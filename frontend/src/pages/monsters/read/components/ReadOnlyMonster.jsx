import styles from "../ReadMonsters.module.css"

function ReadOnlyMonster({ monster }) {
    return (
        <>
            <div className={styles["monster-info"]}>
                <div className={styles.info}>Name: <span className={styles["inline-info"]}>{monster.name}</span></div>
                <div className={styles.info}>Damage: <span className={styles["inline-info"]}>{monster.damage}</span></div>
                <div className={styles.info}>HP: <span className={styles["inline-info"]}>{monster.hp}</span></div>
                <div className={styles.info}>Rarity: <span className={styles["inline-info"]}>{monster.rarity}</span></div>
                <div className={styles.info}>Invisibility: <span className={styles["inline-info"]}>{(monster.invisibility) ? "Yes" : "No"}</span></div>
                <div className={styles.info}>Strengths: <span className={styles["inline-info"]}>{(monster.strength)}</span></div>
                <div className={styles.info}>Weaknesses: <span className={styles["inline-info"]}>{(monster.weakness) ? `${monster.weakness}` : "None"}</span></div>
                <img className={styles.image} src={monster.image} alt="Not valid link" />
                <div className={styles.fights}>
                    <h2>Won fights:</h2>
                    <h3 className={styles.counter}>0</h3>
                </div>
            </div>
        </>
    );
}

export default ReadOnlyMonster;