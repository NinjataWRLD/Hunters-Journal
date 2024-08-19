import { useState, useEffect } from "react";
import ReadItem from "./ReadItem"

function Read() {
    const [hellhounds, setHellhounds] = useState([]);
    useEffect(() => {
        fetchHellhounds();
    }, []);

    return (
        <>
            <ul>
                {hellhounds.map(hellhound => <li key={hellhound._id}><ReadItem hellhound={hellhound} /></li>)}
            </ul>
        </>
    );

    async function fetchHellhounds() {
        await fetch(import.meta.env.VITE_API_URL + "/api/hellhounds")
            .then(response => response.json())
            .then(data => setHellhounds(data));
    }
}

export default Read;