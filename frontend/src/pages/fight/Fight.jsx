import { useState, useEffect } from "react";
import { Fighters } from "../../requests/fight";
import { PatchHuman } from "../../requests/humans";
import { PatchMonster } from "../../requests/monsters";
import { GetAllHumans } from "../../requests/humans";
import { GetAllMonsters } from "../../requests/monsters";
import { Link } from 'react-router-dom';
import Roulette from "./components/Roulette";
import styles from "./Fight.module.css"

function Fight() {
    const [human, setHuman] = useState({});
    const [monster, setMonster] = useState({});
    const [humanImages, setHumanImages] = useState([]);
    const [monsterImages, setMonsterImages] = useState([]);
    const [isShown, setIsShown] = useState(false);
    const [isShownMainScreen, setIsShownMainScreen] = useState(true);
    const [isShownResultScreen, setIsShownResultScreen] = useState(false);
    const [isError, setIsError] = useState(false);

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

    const showContinueBtn = () => {
        const contBtn = document.getElementsByClassName(styles.continue)[0];
        setTimeout(() => {
            if (contBtn) {
                contBtn.style.display = "block";
            }
        }, 5000);
    };

    useEffect(() => {
        if (!isShownMainScreen && !isShown) {
            showContinueBtn();
        }
    }, [isShownMainScreen, isShown]);

    const hideMainScreen = () => {
        if (isShownMainScreen && humanImages.length > 2 && monsterImages.length > 2) {
            setIsError(false);
            return setIsShownMainScreen(false);
        }
        setIsError(true);
    }

    const findBetterStat = (stat1, stat2) => {
        if (stat1 > stat2) {
        }
    }

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
                (!isShownResultScreen ?
                    <div className={styles.content}>
                        <div className={styles.human}>
                            <h2>{human.name}</h2>
                            <img className={styles.img} src={human.image} alt="Apply image!" />
                            <div className={styles.info}>
                                <p>Damage: {human.damage}</p>
                            </div>
                        </div>
                        <div className={styles.monster}>
                            <h2>{monster.name}</h2>
                            <img className={styles.img} src={monster.image} alt="Apply image!" />
                            <div className={styles.info}>
                                <p>Damage: {monster.damage}</p>
                            </div>
                        </div>
                        <div onClick={() => setIsShownResultScreen(true)} className={styles["result-btn"]}>Result</div>
                    </div>
                    : <div className={styles.result}>
                        <h2>Winner:</h2>
                        <div className={styles.home}><Link to={"/"}>Home</Link></div>
                    </div>
                )
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
                    <div className={styles.continue} onClick={() => setIsShown(true)}>&#8594;</div>
                </div>
            )
            : <div className={styles.container}>
                <h2>Make sure you've applied images to all <span>humans</span> and <span>monsters</span></h2>
                <button className={styles.button} onClick={() => hideMainScreen()}>Begin Battle</button>
                <h3>(still in development)</h3>
                {isError
                    ? <div className={styles.error}>You need at least 3 images
                        for humans and monsters individually to proceed!</div>
                    : ''}
            </div>
        }
        </>
    );
}

export default Fight;