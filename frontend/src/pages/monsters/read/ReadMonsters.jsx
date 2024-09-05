import { useState, useEffect } from "react";
import { GetAllMonsters } from '@/requests/monsters';
import MonsterItem from "./components/MonsterItem"
import styles from './ReadMonsters.module.css';

function ReadMonsters() {
    const [monsters, setMonsters] = useState([]);
    const [showContent, setShowContent] = useState(true);

    useEffect(() => {
        fetchMonsters();
    }, []);

    const handleMonsterClick = () => {
        setShowContent(prev => !prev);
    };

    return (
        <>
            <div className={styles.content} style={{ "display": (!showContent) ? "none" : "flex" }}>
                <h2>Available creatures:</h2>
                <div className={styles.items}>
                    {monsters.length ? monsters.map(monster => (
                        <div className={styles["hell_list"]} key={monster._id}>
                            <MonsterItem
                                monster={monster}
                                handleMonsterClick={handleMonsterClick}
                            />
                        </div>
                    )) : <p>No available creatures!</p>}
                </div>
                <h3>Click to modify</h3>
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