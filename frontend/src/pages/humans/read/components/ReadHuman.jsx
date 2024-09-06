import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import ReadOnlyHuman from "./ReadOnlyHuman";
import EditableHuman from "./EditableHuman";
import { GetHuman, DeleteHuman } from "../../../../requests/humans";
import styles from "../ReadHumans.module.css";

function ReadHuman() {
	const [isEditable, setIsEditable] = useState(false);
	const [human, setHuman] = useState({});
	const navigate = useNavigate();

	const { id } = useParams();

	useEffect(() => {
		fetchHuman();
	}, [])

	async function fetchHuman() {
		try {
			const { data } = await GetHuman(id);
			setHuman(data);
		} catch (error) {
			console.error(error);
		}
	}

	async function handleDelete(id) {
		try {
			await DeleteHuman(id);
			navigate("/humans");
		} catch (error) {
			console.error(e);
		}
	}

	return (
		<div className={`${styles.actions} ${styles.expanded}`}>
			<section className={styles.section}>
				{isEditable
					? <EditableHuman human={human} setHuman={setHuman} setIsEditable={setIsEditable} />
					: <ReadOnlyHuman human={human} />
				}
			</section>
			{isEditable
				? '' : <div className={styles.buttons}>
					<button onClick={() => setIsEditable(true)} className={styles.edit}>Edit</button>
					<button onClick={() => handleDelete(human._id)} className={styles.delete}>Delete</button>
				</div>
			}
			<span><Link to={"/humans"} className={styles.close}>&#10006;</Link></span>
		</div>
	);
}

export default ReadHuman;