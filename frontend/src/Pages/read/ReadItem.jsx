import Edit from "../edit/Edit";
import { useNavigate } from "react-router-dom";
import "./Read.css"

function ReadItem({ hellhound, onDelete }) {
    const { _id, name, invisibility, hp, age, rarity, strength, weakness, image } = hellhound;
    const navigate = useNavigate();

    return (
        <>
            <div>
                <p>{name}</p>
                <button onClick={() => navigate(`/edit/${_id}`)} className="edit">Edit</button>
                <button onClick={() => onDelete(_id)} className="delete">Delete</button>
            </div>
        </>
    );
}

export default ReadItem;