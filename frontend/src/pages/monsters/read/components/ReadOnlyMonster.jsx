import styles from "../ReadMonsters.module.css"

function ReadOnlyMonster({ monster }) {
    return (
        <>
            <div>Name: <span className={styles["inline-info"]}>{monster.name}</span></div>
            <div>Age: <span className={styles["inline-info"]}>{monster.age}</span></div>
            <div>HP: <span className={styles["inline-info"]}>{monster.hp}</span></div>
            <div>Rarity: <span className={styles["inline-info"]}>{monster.rarity}</span></div>
            <div>Invisibility: <span className={styles["inline-info"]}>{(monster.invisibility) ? "Yes" : "No"}</span></div>
            <div>Strengths: <span className={styles["inline-info"]}>{(monster.strength)}</span></div>
            <div>Weaknesses: <span className={styles["inline-info"]}>{(monster.weakness) ? `${monster.weakness}` : "None"}</span></div>
            <img className={styles.image} src={monster.image} alt="Not valid link" />
        </>
    );
}

export default ReadOnlyMonster;