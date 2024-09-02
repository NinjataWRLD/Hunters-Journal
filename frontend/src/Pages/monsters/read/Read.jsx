import { useState, useEffect } from "react";
import ReadItem from "./ReadItem"
import { useNavigate } from "react-router-dom";
import { GetAllHellhounds, DeleteHellhound } from '@/requests/hellhounds';
import './Read.css';

function Read() {
    const [hellhounds, setHellhounds] = useState([]);
    const [showContent, setShowContent] = useState(true);
    const [showButtons, setShowButtons] = useState(false);
    const [currentId, setCurrentId] = useState('No id provided');
    const navigate = useNavigate();

    useEffect(() => {
        fetchHellhounds();
    }, []);

    async function handleDelete(id) {
        try {
            await DeleteHellhound(id);
            setHellhounds((hellhounds) => hellhounds.filter((h) => h._id !== id));
            setShowButtons(false);
            setShowContent(true);
        } catch (error) {
            console.error(e);
        }
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
                            <div>Strengths: <span className="inline-info">{selectedHellhound.strengths}</span></div>
                            <div>Weaknesses: <span className="inline-info">{(selectedHellhound.weakness) ? `${selectedHellhound.weakness}` : "None"}</span></div>
                            <img className="image" src={selectedHellhound.image} alt="Not valid link" />
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
        try {
            const { data } = await GetAllHellhounds();
            if (data) {
                setHellhounds(data);
            }
        } catch (e) {
            console.error(e);
        }
    }
}

export default Read;