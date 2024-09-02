import "../ReadMonsters.css";

function ReadItem({ hellhound, handleMonsterClick }) {
    return (
        <div>
            <p data-id={hellhound._id} onClick={handleMonsterClick}>
                {hellhound.name}
            </p>
        </div>
    );
}

export default ReadItem;
