import { useNavigate } from "react-router-dom";
import styles from "../ReadMonsters.module.css"

function ReadMonster({ monster, onMonsterClick, onDelete }) {
	const navigate = useNavigate();

	return (
		<>
			<section>
				<div>Name: <span className={styles["inline-info"]}>{monster.name}</span></div>
				<div>Age: <span className={styles["inline-info"]}>{monster.age}</span></div>
				<div>HP: <span className={styles["inline-info"]}>{monster.hp}</span></div>
				<div>Rarity: <span className={styles["inline-info"]}>{monster.rarity}</span></div>
				<div>Invisibility: <span className={styles["inline-info"]}>{(monster.invisibility) ? "Yes" : "No"}</span></div>
				<div>Strengths: <span className={styles["inline-info"]}>{(monster.strength)}</span></div>
				<div>Weaknesses: <span className={styles["inline-info"]}>{(monster.weakness) ? `${monster.weakness}` : "None"}</span></div>
				<img className={styles.image} src={monster.image} alt="Not valid link" />
			</section>
			<button onClick={() => navigate(`/edit/${monster._id}`)} className={styles.edit}>Edit</button>
			<button onClick={() => onDelete(monster._id)} className={styles.delete}>Delete</button>
			<span onClick={onMonsterClick} className={styles.close}>&#10006;</span>
		</>
	)
}

export default ReadMonster;