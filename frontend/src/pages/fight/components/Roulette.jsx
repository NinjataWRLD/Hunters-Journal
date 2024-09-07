import { useState, useEffect, useRef } from "react";
import styles from "./Roulette.module.css";

const Roulette = ({ images, targetName }) => {
    const [spinning, setSpinning] = useState(true);
    const [stopIndex, setStopIndex] = useState(0);
    const rouletteRef = useRef(null);

    useEffect(() => {
        const startSpinning = () => {
            setSpinning(true);
            const matchedIndex = images.findIndex((image) => image.name === targetName);

            setTimeout(() => {
                setSpinning(false);
                setStopIndex(matchedIndex);
            }, 5000);
        };

        startSpinning();
    }, [images, targetName]);

    useEffect(() => {
        if (!spinning && rouletteRef.current) {
            const imageHeight = 150;
            const totalHeight = images.length * imageHeight;
            const centerOffset = imageHeight;

            const scrollPosition = (stopIndex * imageHeight + centerOffset) % totalHeight;

            rouletteRef.current.style.transform = `translateY(-${scrollPosition}px)`;
        }
    }, [spinning, stopIndex, images]);

    return (
        <div className={styles["roulette-container"]}>
            <div
                className={`${styles.roulette} ${spinning ? styles.spinning : ""} ${spinning ? "" : styles.stopped}`}
                ref={rouletteRef}
            >
                {images.concat(images).map((image, index) => (
                    <div
                        key={index}
                        className={`${styles["roulette-item"]} ${
                            !spinning && index === (stopIndex + 1) ? styles.winning : ""
                        }`}
                    >
                        <img src={image.url} alt={image.name} />
                        <p>{image.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Roulette;
