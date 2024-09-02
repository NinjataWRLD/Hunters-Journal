import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GetMonster, EditMonster } from '@/requests/monsters';
import "./EditMonster.css"

function Edit() {
    const { id } = useParams();
    const [monster, setMonster] = useState({ _id: 0, name: '', invisibility: false, hp: 0, age: 0, rarity: '', strength: '', weakness: [], image: '' });

    useEffect(() => {
        fetchMonster();
    }, []);

    async function handleSubmit(e) {
        e.preventDefault();
        const dto = {};
        try {
            await EditMonster(id, dto);
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <>
            <div>
                <p>{monster.name}</p>
                <p>{monster.age}</p>
                <p>{monster.invisibility ? 'invisible' : 'visible'}</p>
                <p>Weaknesses: {monster.weakness}</p>
                <img src={monster.image} className="monster-image" />
            </div>
        </>
    );
    
    async function fetchMonster() {
        try {
            const { data } = await GetMonster(id);
            setMonster(data);
        } catch (e) {
            console.error(e);
        }
    }
}

export default Edit;