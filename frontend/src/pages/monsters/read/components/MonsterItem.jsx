import { Link } from "react-router-dom";

function ReadItem({ monster, handleMonsterClick }) {
    return (
        <div>
            <Link to={`/monsters/${monster._id}`} data-id={monster._id} onClick={handleMonsterClick}>
                {monster.name}
            </Link>
        </div>
    );
}

export default ReadItem;
