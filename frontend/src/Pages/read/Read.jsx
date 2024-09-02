import { useState, useEffect } from "react";
import ReadItem from "./ReadItem"
import { useContext } from 'react';
import Context from "../../context";
import axios from 'axios';
import './Read.css';

function Read() {
    const [hellhounds, setHellhounds] = useState([]);
    const { isPlaying, setVolume } = useContext(Context);

    useEffect(() => {
        fetchHellhounds();
    }, []);

    async function handleDelete(id) {
        await axios.delete(`https://mern-demo-backend-lfjj.onrender.com/api/hellhounds/${id}`);
        setHellhounds((hellhounds) => hellhounds.filter((h) => h._id !== id));
    }

    return (
        <>
            <div className="content">
                <h2>Available creatures:</h2>
                <div className="items">
                    {hellhounds.map(hellhound => (
                        <div className ="hell_list" key={hellhound._id}>
                            <ReadItem hellhound={hellhound} onDelete={() => handleDelete(hellhound._id)} />
                        </div>
                    ))}
                </div>
                <h3>Click to edit</h3>
            </div>

            {isPlaying && (
                <div className="volume-control">
                    <label htmlFor="volume">Volume:</label>
                    <input
                        id="volume"
                        type="range"
                        min="0"
                        max="1"
                        step="0.01"
                        defaultValue="0.8"
                        onChange={setVolume}
                    />
                </div>
            )}
        </>
    );

    async function fetchHellhounds() {
        await fetch(import.meta.env.VITE_API_URL + "/api/hellhounds")
            .then(response => response.json())
            .then(data => setHellhounds(data));
    }
}

export default Read;