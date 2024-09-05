import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import ReadOnlyMonster from "./ReadOnlyMonster";
import EditableMonster from "./EditableMonster";
import { GetMonster, DeleteMonster } from "../../../../requests/monsters";
import "../ReadMonsters.css"

function ReadMonster() {
	const [isEditable, setIsEditable] = useState(false);
	const [monster, setMonster] = useState({});
	const navigate = useNavigate();

	const { id } = useParams();

	useEffect(() => {
		fetchMonster();
	}, [])

	async function fetchMonster() {
		try {
			const { data } = await GetMonster(id);
			setMonster(data);
		} catch (error) {
			console.error(error);
		}
	}

	async function handleDelete(id) {
        try {
            await DeleteMonster(id);
			navigate("/monsters");
        } catch (error) {
            console.error(e);
        }
    }

	return (
		<div className="actions expanded">
			<section>
				{isEditable
					? <EditableMonster monster={monster} setMonster={setMonster} setIsEditable={setIsEditable} />
					: <ReadOnlyMonster monster={monster} />
				}
			</section>
			{
				isEditable
				? <button onClick={() => setIsEditable(false)} className="edit">Go back</button>
				: <button onClick={() => setIsEditable(true)} className="edit">Edit</button>
			}
			<button onClick={() => handleDelete(monster._id)} className="delete">Delete</button>
			<span className="close"><Link to={"/monsters"}>&#10006;</Link></span>
		</div>
	)
}

export default ReadMonster;