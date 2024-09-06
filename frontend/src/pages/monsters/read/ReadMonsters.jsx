import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
            <div className={styles.content} style={{ display: showContent ? "flex" : "none" }}>
                <h2>Available creatures:</h2>
                {monsters.length ? (
                    <div className={styles.items}>
                        {monsters.map((monster) => (
                            <div className={styles["item-list"]} key={monster._id}>
                                <div className={styles["hell_list"]}>
                                    <MonsterItem
                                        monster={monster}
                                        handleMonsterClick={handleMonsterClick}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className={styles.available}>
                        No available creatures!
                        <p>Click <Link to={"/monsters/new"}>here</Link> to add one</p>
                    </div>
                )}
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