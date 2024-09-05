import "../ReadMonsters.css"

function ReadOnlyMonster({ monster }) {
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
    });

    window.addEventListener('beforeunload', function() {
        document.body.classList.remove('loaded');
    });
    
    return (
        <>
            <div>Name: <span className="inline-info">{monster.name}</span></div>
            <div>Age: <span className="inline-info">{monster.age}</span></div>
            <div>HP: <span className="inline-info">{monster.hp}</span></div>
            <div>Rarity: <span className="inline-info">{monster.rarity}</span></div>
            <div>Invisibility: <span className="inline-info">{(monster.invisibility) ? "Yes" : "No"}</span></div>
            <div>Strengths: <span className="inline-info">{(monster.strength)}</span></div>
            <div>Weaknesses: <span className="inline-info">{(monster.weakness) ? `${monster.weakness}` : "None"}</span></div>
            <img className="image" src={monster.image} alt="Not valid link" />
        </>
    );
}

export default ReadOnlyMonster;