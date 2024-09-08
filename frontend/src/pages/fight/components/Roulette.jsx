import { useState, useEffect, useRef } from "react";
import styles from "./Roulette.module.css";

const Roulette = ({ images, targetName }) => {
    const [spinning, setSpinning] = useState(true);
    const [stopIndex, setStopIndex] = useState(0);
    const [scrollPosition, setScrollPosition] = useState(0);
    const rouletteRef = useRef(null);
    const imageHeight = 150;

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
        let animationFrameId;
        let lastTime = 0;

        const spin = (time) => {
            if (spinning) {
                if (lastTime === 0) lastTime = time;
                const deltaTime = time - lastTime;

                setScrollPosition((prevPosition) => {
                    const totalHeight = images.length * imageHeight;
                    const newPosition = (prevPosition + deltaTime * 0.1) % totalHeight;
                    return newPosition;
                });

                lastTime = time;
                animationFrameId = requestAnimationFrame(spin);
            }
        };

        if (spinning) {
            animationFrameId = requestAnimationFrame(spin);
        }

        return () => cancelAnimationFrame(animationFrameId);
    }, [spinning, images]);

    useEffect(() => {
        if (!spinning && rouletteRef.current) {
            const totalHeight = images.length * imageHeight;
            const centerOffset = (450 - imageHeight) / 2;

            const finalScrollPosition = (stopIndex * imageHeight - centerOffset + totalHeight) % totalHeight;

            rouletteRef.current.style.transition = 'transform 1s ease-out';
            rouletteRef.current.style.transform = `translateY(-${finalScrollPosition}px)`;
        } else if (rouletteRef.current) {
            rouletteRef.current.style.transition = 'none';
        }
    }, [spinning, stopIndex, images]);

    return (
        <div className={styles["roulette-container"]}>
            <div
                className={styles.roulette}
                ref={rouletteRef}
                style={{ transform: `translateY(-${scrollPosition}px)` }}>
                {images.concat(images).map((image, index) => (
                    <div
                        key={index}
                        className={`${styles["roulette-item"]}
                         ${!spinning && index % images.length === stopIndex ? styles.winning : ""}`}>
                        <img src={image.url} alt={image.name} />
                        <p>{image.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Roulette;
