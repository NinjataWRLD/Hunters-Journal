import { useState, useEffect } from "react";
import ReadItem from "./ReadItem"
import { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import Context from "../../../context";
import axios from 'axios';
import './Read.css';

function Read() {
    const [hellhounds, setHellhounds] = useState([]);
    const { isPlaying, toggleVolume } = useContext(Context);
    const [showContent, setShowContent] = useState(true);
    const [showButtons, setShowButtons] = useState(false);
    const [currentId, setCurrentId] = useState('No id provided');
    const navigate = useNavigate();

    useEffect(() => {
        fetchHellhounds();
    }, []);

    async function handleDelete(id) {
        await axios.delete(`https://mern-demo-backend-lfjj.onrender.com/api/hellhounds/${id}`);
        setHellhounds((hellhounds) => hellhounds.filter((h) => h._id !== id));
        setShowButtons(false);
        setShowContent(true);
    }

    const handleMonsterClick = (e) => {
        setShowButtons(prev => !prev);
        setShowContent(prev => !prev);
        setCurrentId(e.target.getAttribute("data-id"));
    };

    const selectedHellhound = hellhounds.find(hellhound => hellhound._id === currentId);

    return (
        <>
            <div className="content" style={{ "display": (!showContent) ? "none" : "flex" }}>
                <h2>Available creatures:</h2>
                <div className="items">
                    {hellhounds.length ? hellhounds.map(hellhound => (
                        <div className="hell_list" key={hellhound._id}>
                            <ReadItem
                                hellhound={hellhound}
                                handleMonsterClick={handleMonsterClick}
                            />
                        </div>
                    )) : <p>No available creatures!</p>}
                </div>
                <h3>Click to modify</h3>
            </div>

            <div className={`actions ${showButtons ? 'expanded' : ''}`}>
                {showButtons && selectedHellhound && (
                    <>
                        <section>
                            <div>Name: <span className="inline-info">{selectedHellhound.name}</span></div>
                            <div>Age: <span className="inline-info">{selectedHellhound.age}</span></div>
                            <div>HP: <span className="inline-info">{selectedHellhound.hp}</span></div>
                            <div>Rarity: <span className="inline-info">{selectedHellhound.rarity}</span></div>
                            <div>Invisibility: <span className="inline-info">{(selectedHellhound.invisibility) ? "Yes" : "No"}</span></div>
                            <div>Strengths: <span className="inline-info">{selectedHellhound.strengths.join(', ')}</span></div>
                            <div>Weaknesses: <span className="inline-info">{selectedHellhound.weakness.join(', ')}</span></div>
                            <div>Image: <span className="inline-info">{(selectedHellhound.image) ? `${selectedHellhound.image}` : "Not provided"}</span></div>
                        </section>
                        <button onClick={() => navigate(`/edit/${currentId}`)} className="edit">Edit</button>
                        <button onClick={() => handleDelete(currentId)} className="delete">Delete</button>
                        <span onClick={handleMonsterClick} className="close">&#10006;</span>
                    </>
                )}
            </div>
        </>
    );

    async function fetchHellhounds() {
        await fetch(import.meta.env.VITE_API_URL + "/api/hellhounds")
            .then(response => response.json())
            .then(data => setHellhounds(data));
    }
}

export default Read;