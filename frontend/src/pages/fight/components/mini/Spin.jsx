import styles from "../../Fight.module.css";

function Spin({Roulette, monsterImages, humanImages, setIsShown, human , monster}) {
    return (
        <div className={styles.spin}>
            <div className={styles["human-spin"]}>
                <h2>Choosing human...</h2>
                <div className={styles["human-roulette"]}>
                    <Roulette images={humanImages} targetName={human.name} />
                </div>
            </div>
            <div className={styles["monster-spin"]}>
                <h2>Choosing monster...</h2>
                <div className={styles["monster-roulette"]}>
                    <Roulette images={monsterImages} targetName={monster.name} />
                </div>
            </div>
            <div className={styles.versus}></div>
            <div className={styles.continue} onClick={() => setIsShown(true)}>&#8594;</div>
        </div>
    );
}

export default Spin;