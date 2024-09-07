import { useState, useEffect } from "react";
import { Fighters } from "../../requests/fight";
import { PatchHuman } from "../../requests/humans";
import { PatchMonster } from "../../requests/monsters";
import { GetAllHumans } from "../../requests/humans";
import { GetAllMonsters } from "../../requests/monsters";
import Roulette from "./components/Roulette";
import styles from "./Fight.module.css"

function Fight() {
    const [human, setHuman] = useState({});
    const [monster, setMonster] = useState({});
    const [humanImages, setHumanImages] = useState([]);
    const [monsterImages, setMonsterImages] = useState([]);
    const [isShown, setIsShown] = useState(false);
    const [isShownMainScreen, setIsShownMainScreen] = useState(true);

    async function fetchFighters() {
        try {
            const { data } = await Fighters()
            setHuman(data.human);
            setMonster(data.monster);
        } catch (error) {
            console.error(error);
        }
    }


    async function fetchHumanImages() {
        try {
            const { data } = await GetAllHumans();
            const imagesArray = data.map(el => ({
                url: el.image,
                name: el.name,
            }));

            setHumanImages(imagesArray);
        } catch (error) {
            console.error(error);
        }
    }

    async function fetchMonsterImages() {
        try {
            const { data } = await GetAllMonsters();
            const imagesArray = data.map(el => ({
                url: el.image,
                name: el.name,
            }));

            setMonsterImages(imagesArray);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchFighters();
        fetchHumanImages();
        fetchMonsterImages();
    }, [])


    const fighterWonUpdate = (type) => {
        const won = (type === "monster") ? monster.won : human.won;
        const updateWonProp = {
            op: 'replace',
            path: '/won',
            value: won + 1
        }
        try {
            (type === "monster") ? PatchMonster(monster._id, [updateWonProp]) : PatchHuman(human._id, [updateWonProp]);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>{!isShownMainScreen ?
            (isShown ?
                <div className={styles.content}>
                    <div className={styles.human}>
                        <h2>Human</h2>
                    </div>
                    <div className={styles.monster}>
                        <h2>Monster</h2>
                    </div>
                </div>
                : <div className={styles.spin}>
                    <div className={styles["human-spin"]}>
                        <h2>Choosing human...</h2>
                        <div className={styles["human-roulette"]}>
                            <Roulette images={humanImages} targetName={human.name} />
                        </div>
                    </div>
                    <div className={styles["monster-spin"]}>
                        <h2>Choosing monster...</h2>
                        <div className={styles["monster-roulette"]}>
                            <Roulette images={monsterImages} targetName={monster.name} />
                        </div>
                    </div>
                    <div className={styles.versus}></div>
                </div>
            )
            : <div className={styles.container}>
                    <h2>Make sure you've applied images to all <span>humans</span> and <span>monsters</span></h2>
                    <button className={styles.button} onClick={() => setIsShownMainScreen(false)}>Begin Battle</button>
                    <h3>(still in development)</h3>
            </div>
        }
        </>
    );
}

export default Fight;