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

    useEffect(() => {
        console.log(showContent)
    }, [showContent]);

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

    return (
        <>
            <div className="content" style={{ "display": (!showContent) ? "none" : "flex" }}>
                <h2>Available creatures:</h2>
                <div className="items">
                    {hellhounds.map(hellhound => (
                        <div className="hell_list" key={hellhound._id}>
                            <ReadItem
                                hellhound={hellhound}
                                handleMonsterClick={handleMonsterClick}
                            />
                        </div>
                    ))}
                </div>
                <h3>Click to modify</h3>
            </div>

            <div className={`actions ${showButtons ? 'expanded' : ''}`}>
                {showButtons && (
                    <>
                        <button onClick={() => navigate(`/edit/${currentId}`)} className="edit">Edit</button>
                        <button onClick={() => handleDelete(currentId)} className="delete">Delete</button>
                        <span onClick={handleMonsterClick} className="close">&#10006;</span>
                    </>
                )}
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
                        defaultValue="0.2"
                        onChange={toggleVolume}
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