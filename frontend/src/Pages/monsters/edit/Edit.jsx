import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function Edit() {
    const { id } = useParams();
    const [hellhound, setHellhound] = useState({ _id: 0, name: '', invisibility: false, hp: 0, age: 0, rarity: '', strength: '', weakness: [], image: '' });

    async function fetchHellhounds() {
        const { data } = await axios.get(`https://mern-demo-backend-lfjj.onrender.com/api/hellhounds/${id}`);
        setHellhound(data);
    }

    useEffect(() => {
        fetchHellhounds();
    }, []);

    async function handleSubmit(e) {
        e.preventDefault();
        const dto = {};
        await axios.put(`https://mern-demo-backend-lfjj.onrender.com/api/hellhounds/${id}`, dto);
    }

    return (
        <>
            <div>
                <p>{hellhound.name}</p>
                <p>{hellhound.age}</p>
                <p>{hellhound.invisibility ? 'invisible' : 'visible'}</p>
                <p>Weaknesses: {hellhound.weakness.join(', ')}</p>
                <p>{hellhound.image}</p>
            </div>
        </>
    );
}

export default Edit;