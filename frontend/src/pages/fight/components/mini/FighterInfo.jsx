import styles from "../../Fight.module.css";

function FighterInfo({ human, monster, setIsShownResultScreen }) {

    const findBetterStat = (stat1, stat2) => {
        if (stat1 > stat2) {
            return (<div style={{ color: "green" }}>{stat1}</div>)
        }
        else if (stat1 === stat2) {
            return (<div style={{ color: "orange" }}>{stat1}</div>)
        }
        return (<div style={{ color: "red" }}>{stat1}</div>)
    }

    const getRarityPoints = (rarity) => {
        const rarities = ["Common", "Rare", "Epic", "Legendary"];
        let points = 0;
        rarities.forEach((el, index) => {
            if (rarity === el) {
                points = index + 1;
            }
        });
        return points;
    }

    const findBetterRarity = (rarity1, rarity2) => {
        const rarities = ["Common", "Rare", "Epic", "Legendary"];
        let points1 = getRarityPoints(rarity1);
        let points2 = getRarityPoints(rarity2);
        if (points1 > points2) {
            return (<div style={{ color: "green" }}>{rarities[points1 - 1]}</div>)
        }
        else if (points1 === points2) {
            return (<div style={{ color: "orange" }}>{rarities[points1 - 1]}</div>)
        }
        return (<div style={{ color: "red" }}>{rarities[points1 - 1]}</div>)
    }

    // formula: damage + hp + rarity * 10

    let humanTotal = human.damage + human.hp + getRarityPoints(human.rarity) * 10;
    let monsterTotal = monster.damage + monster.hp + getRarityPoints(monster.rarity) * 10;

    return (
        <div className={styles.content}>
            <div className={styles.human}>
                <h2>{human.name}</h2>
                <img className={styles.img} src={human.image} alt="Apply image!" />
                <div className={styles.info}>
                    <div className={styles["human-info"]}>
                        Damage: {findBetterStat(human.damage, monster.damage)}</div>
                    <hr className={styles.hr}></hr>
                    <div className={styles["human-info"]}>
                        Health: {findBetterStat(human.hp, monster.hp)}</div>
                    <hr className={styles.hr}></hr>
                    <div className={styles["human-info"]}>
                        Rarity: {findBetterRarity(human.rarity, monster.rarity)}</div>
                    <hr className={styles.hr}></hr>
                    <div className={styles.total}>
                        Total: <span>{humanTotal}</span>
                    </div>
                </div>
            </div>
            <div className={styles.monster}>
                <h2>{monster.name}</h2>
                <img className={styles.img} src={monster.image} alt="Apply image!" />
                <div className={styles.info}>
                    <div className={styles["monster-info"]}>
                        Damage: {findBetterStat(monster.damage, human.damage)}</div>
                    <hr className={styles.hr}></hr>
                    <div className={styles["monster-info"]}>
                        Health: {findBetterStat(monster.hp, human.hp)}</div>
                    <hr className={styles.hr}></hr>
                    <div className={styles["monster-info"]}>
                        Rarity: {findBetterRarity(monster.rarity, human.rarity)}</div>
                    <hr className={styles.hr}></hr>
                    <div className={styles.total}>
                        Total: <span>{monsterTotal}</span>
                    </div>
                </div>
            </div>
            <div onClick={() => setIsShownResultScreen(true)} className={styles["result-btn"]}>Result</div>
        </div>
    );
}

export default FighterInfo;