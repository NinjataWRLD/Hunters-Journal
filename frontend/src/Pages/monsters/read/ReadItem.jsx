import "./Read.css";

function ReadItem({ hellhound, handleMonsterClick }) {
    const { _id, name, invisibility, hp, age, rarity, strength, weakness, image } = hellhound;

    return (
        <div>
            <p data-id={_id} onClick={handleMonsterClick}>{name}</p>
        </div>
    );
}

export default ReadItem;
