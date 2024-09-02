import "../ReadMonsters.css";

function ReadItem({ monster, handleMonsterClick }) {
    return (
        <div>
            <p data-id={monster._id} onClick={handleMonsterClick}>
                {monster.name}
            </p>
        </div>
    );
}

export default ReadItem;
