

function ReadItem({hellhound}) {
   const {_id, name, invisibility, hp, age, rarity, strength, weakness} = hellhound;
    return (
        <>
        <div>
            <p>{name}</p>
        </div>
        </>
    );
}

export default ReadItem;