import { useState, useEffect } from "react";
import { Fighters } from "../../requests/fight";
import { PatchHuman } from "../../requests/humans";
import { PatchMonster } from "../../requests/monsters";
import { GetAllHumans } from "../../requests/humans";
import { GetAllMonsters } from "../../requests/monsters";
import FighterInfo from "./components/mini/FighterInfo";
import ResultScreen from "./components/mini/ResultScreen";
import Spin from "./components/mini/Spin";
import StartScreen from "./components/mini/StartScreen";
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
            (isShown
                ? (!isShownResultScreen
                    ? <FighterInfo human={human} monster={monster}
                        setIsShownResultScreen={setIsShownResultScreen} />
                    : <ResultScreen human={human} monster={monster} fighterWonUpdate={fighterWonUpdate}/>
                )
                : <Spin Roulette={Roulette} monsterImages={monsterImages}
                    humanImages={humanImages} setIsShown={setIsShown}
                    human={human} monster={monster} />
            )
            : <StartScreen isError={isError} hideMainScreen={hideMainScreen} />
        }
        </>
    );
}

export default Fight;