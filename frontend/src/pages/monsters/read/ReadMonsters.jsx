import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GetAllMonsters, DeleteMonster } from '@/requests/monsters';
import MonsterItem from "./components/MonsterItem"
import ReadMonster from "./components/ReadMonster"
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
                {showButtons && selectedMonster &&
                    <ReadMonster
                        monster={selectedMonster}
                        onMonsterClick={handleMonsterClick}
                        onDelete={handleDelete}
                    />}
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