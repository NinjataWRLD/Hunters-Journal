import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { GetHellhound, EditHellhound } from '@/requests/hellhounds';
import "./Edit.css"

function Edit() {
    const { id } = useParams();
    const [hellhound, setHellhound] = useState({ _id: 0, name: '', invisibility: false, hp: 0, age: 0, rarity: '', strength: '', weakness: [], image: '' });

    useEffect(() => {
        fetchHellhounds();
    }, []);

    async function handleSubmit(e) {
        e.preventDefault();
        const dto = {};
        try {
            await EditHellhound(id, dto);
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <>
            <div>
                <p>{hellhound.name}</p>
                <p>{hellhound.age}</p>
                <p>{hellhound.invisibility ? 'invisible' : 'visible'}</p>
                <p>Weaknesses: {hellhound.weakness}</p>
                <img src={hellhound.image} className="monster-image" />
            </div>
        </>
    );
    
    async function fetchHellhounds() {
        try {
            const { data } = await GetHellhound(id);
            setHellhound(data);
        } catch (e) {
            console.error(e);
        }
    }
}

export default Edit;