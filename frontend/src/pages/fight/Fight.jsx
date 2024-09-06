import { useState, useEffect } from "react";
import { Fighters } from "../../requests/fight";
import { PatchHuman } from "../../requests/humans";
import { PatchMonster } from "../../requests/monsters";

function Fight() {
    const [human, setHuman] = useState({});
    const [monster, setMonster] = useState({});

    async function fetchFighters() {
        try {
            const { data } = await Fighters()
            setHuman(data.human);
            setMonster(data.monster);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchFighters();
    }, [])

    const fighterWonUpdate = (type) => {
        const won = (type === "monster") ? monster.won : human.won;
        const updateWonProp = {
            op: 'replace',
            path: '/won',
            value: won + 1
        }
        try {
            (type === "monster") ? PatchMonster(monster._id, [updateWonProp]) : PatchHuman(human._id, [updateWonProp]);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div>
            <h1>{human.name}</h1>
            <button onClick={() => fighterWonUpdate("monster")}>MONSTER WIN</button>
            <button onClick={() => fighterWonUpdate("human")}>HUMAN WIN</button>
            <p>{human.won}</p>
        </div>
    );
}

export default Fight;