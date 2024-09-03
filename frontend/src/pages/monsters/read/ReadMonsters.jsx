import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GetAllMonsters, DeleteMonster } from '@/requests/monsters';
import MonsterItem from "./components/MonsterItem"
import styles from './ReadMonsters.module.css';

function ReadMonsters() {
    const [monsters, setMonsters] = useState([]);
    const [showContent, setShowContent] = useState(true);
    const [showButtons, setShowButtons] = useState(false);
    const [currentId, setCurrentId] = useState('No id provided');
    const navigate = useNavigate();

    useEffect(() => {
        fetchMonsters();
    }, []);

    async function handleDelete(id) {
        try {
            await DeleteMonster(id);
            setMonsters((monster) => monster.filter((m) => m._id !== id));
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

    const selectedMonster = monsters.find(monster => monster._id === currentId);

    return (
        <>
            <div className={styles.content} style={{ "display": (!showContent) ? "none" : "flex" }}>
                <h2>Available creatures:</h2>
                <div className={styles.items}>
                    {monsters.length ? monsters.map(monster => (
                        <div className={styles.hell_list} key={monster._id}>
                            <MonsterItem
                                monster={monster}
                                handleMonsterClick={handleMonsterClick}
                            />
                        </div>
                    )) : <p>No available creatures!</p>}
                </div>
                <h3>Click to modify</h3>
            </div>

            <div className={`${styles.actions} ${showButtons ? styles.expanded : ''}`}>
                {showButtons && selectedMonster && (
                    <>
                        <section>
                            <div>Name: <span className={styles["inline-info"]}>{selectedMonster.name}</span></div>
                            <div>Age: <span className={styles["inline-info"]}>{selectedMonster.age}</span></div>
                            <div>HP: <span className={styles["inline-info"]}>{selectedMonster.hp}</span></div>
                            <div>Rarity: <span className={styles["inline-info"]}>{selectedMonster.rarity}</span></div>
                            <div>Invisibility: <span className={styles["inline-info"]}>{(selectedMonster.invisibility) ? "Yes" : "No"}</span></div>
                            <div>Strengths: <span className={styles["inline-info"]}>{(selectedMonster.strength)}</span></div>
                            <div>Weaknesses: <span className={styles["inline-info"]}>{(selectedMonster.weakness) ? `${selectedMonster.weakness}` : "None"}</span></div>
                            <img className={styles.image} src={selectedMonster.image} alt="Not valid link" />
                        </section>
                        <button onClick={() => navigate(`/edit/${currentId}`)} className={styles.edit}>Edit</button>
                        <button onClick={() => handleDelete(currentId)} className={styles.delete}>Delete</button>
                        <span onClick={handleMonsterClick} className={styles.close}>&#10006;</span>
                    </>
                )}
            </div>
        </>
    );

    async function fetchMonsters() {
        try {
            const { data } = await GetAllMonsters();
            if (data) {
                setMonsters(data);
            }
        } catch (e) {
            console.error(e);
        }
    }
}

export default ReadMonsters;