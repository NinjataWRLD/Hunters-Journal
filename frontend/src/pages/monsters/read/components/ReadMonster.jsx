import { useState } from "react";
import ReadOnlyMonster from "./ReadOnlyMonster";
import EditableMonster from "./EditableMonster";
import styles from "../ReadMonsters.module.css"

function ReadMonster({ monster, onMonsterClick, onDelete }) {
	const [isEditable, setIsEditable] = useState(false);

	return (
		<>
			<section>
				{isEditable
					? <EditableMonster monster={monster} />
					: <ReadOnlyMonster monster={monster} />
				}
			</section>
			<button onClick={() => setIsEditable(true)} className={styles.edit}>Edit</button>
			<button onClick={() => onDelete(monster._id)} className={styles.delete}>Delete</button>
			<span onClick={onMonsterClick} className={styles.close}>&#10006;</span>
		</>
	)
}

export default ReadMonster;