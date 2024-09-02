import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Read.css";

function ReadItem({ hellhound, onDelete }) {
    const { _id, name, invisibility, hp, age, rarity, strength, weakness, image } = hellhound;
    const navigate = useNavigate();
    const [showButtons, setShowButtons] = useState(false);
    const containerRef = useRef(null);

    const handleMonsterClick = () => {
        setShowButtons(prev => !prev);
    };

    const handleClickOutside = (e) => {
        if (containerRef.current && !containerRef.current.contains(e.target)) {
            setShowButtons(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <div ref={containerRef}>
            <p onClick={handleMonsterClick}>{name}</p>
            <div className={`actions ${showButtons ? 'expanded' : ''}`}>
                {showButtons && (
                    <>
                        <button onClick={() => navigate(`/edit/${_id}`)} className="edit">Edit</button>
                        <button onClick={() => onDelete(_id)} className="delete">Delete</button>
                        <span onClick={() => setShowButtons(prev => !prev)} className="close">&#10006;</span>
                    </>
                )}
            </div>
        </div>
    );
}

export default ReadItem;
