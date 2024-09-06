import { Link } from "react-router-dom";

function ReadItem({ human, handleHumanClick }) {
    return (
        <div>
            <Link to={`/humans/${human._id}`} data-id={human._id} onClick={handleHumanClick}>
                {human.name}
            </Link>
        </div>
    );
}

export default ReadItem;