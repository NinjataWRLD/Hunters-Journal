import styles from "../../Fight.module.css";

function FighterInfo({ human, monster, setIsShownResultScreen }) {

    const findBetterStat = (stat1, stat2) => {
        if (stat1 > stat2) {
            //implement logic
        }
    }

    return (
        <div className={styles.content}>
            <div className={styles.human}>
                <h2>{human.name}</h2>
                <img className={styles.img} src={human.image} alt="Apply image!" />
                <div className={styles.info}>
                    <p>Damage: {human.damage}</p>
                </div>
            </div>
            <div className={styles.monster}>
                <h2>{monster.name}</h2>
                <img className={styles.img} src={monster.image} alt="Apply image!" />
                <div className={styles.info}>
                    <p>Damage: {monster.damage}</p>
                </div>
            </div>
            <div onClick={() => setIsShownResultScreen(true)} className={styles["result-btn"]}>Result</div>
        </div>
    );
}

export default FighterInfo;