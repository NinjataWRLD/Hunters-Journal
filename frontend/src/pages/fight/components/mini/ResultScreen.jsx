import { Link } from 'react-router-dom';
import styles from "../../Fight.module.css";

function ResultScreen({ human, monster, fighterWonUpdate }) {

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

    let humanTotal = human.damage + human.hp + getRarityPoints(human.rarity) * 10;
    let monsterTotal = monster.damage + monster.hp + getRarityPoints(monster.rarity) * 10;
    const winner = (humanTotal > monsterTotal) ? 'human' : 'monster';

    return (
        <div className={styles.result}>
            <h2>Winner: <br /> {humanTotal > monsterTotal ? human.name : monster.name}</h2>
            <img className={styles.pic} 
            src={humanTotal > monsterTotal ? human.image : monster.image} alt="Apply an image!" />
            <div onClick={() => fighterWonUpdate(winner)} className={styles.home}><Link to={"/"}>Home</Link></div>
            <div className={styles.wins2}>
                Wins: <h3>{humanTotal > monsterTotal ? human.won + 1 : monster.won + 1}</h3>
            </div>
            <div className={styles.wins1}>
                Wins: <h3>{humanTotal > monsterTotal ? human.won + 1 : monster.won + 1}</h3>
            </div>
        </div>
    );
}

export default ResultScreen;