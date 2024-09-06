import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { GetAllHumans } from '@/requests/humans';
import HumanItem from "./components/HumanItem"
import styles from './ReadHumans.module.css';

function ReadHumans() {
    const [humans, setHumans] = useState([]);
    const [showContent, setShowContent] = useState(true);

    useEffect(() => {
        fetchHumans();
    }, []);

    const handleHumanClick = () => {
        setShowContent(prev => !prev);
    };

    return (
        <>
            <div className={styles.content} style={{ display: showContent ? "flex" : "none" }}>
                <h2>Available humans:</h2>
                {humans.length ? (
                    <div className={styles.items}>
                        {humans.map((human) => (
                            <div className={styles["item-list"]} key={human._id}>
                                <div className={styles["hell_list"]}>
                                    <HumanItem
                                        human={human}
                                        handleHumanClick={handleHumanClick}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className={styles.available}>
                        No available humans!
                        <p>Click <Link to={"/humans/new"}>here</Link> to add one</p>
                    </div>
                )}
                <h3>Click to modify</h3>
            </div>
        </>
    );

    async function fetchHumans() {
        try {
            const { data } = await GetAllHumans();
            if (data) {
                setHumans(data);
            }
        } catch (e) {
            console.error(e);
        }
    }
}

export default ReadHumans;