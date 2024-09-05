import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Home.module.css';

function Body() {
    const navigate = useNavigate();

    const positionItem1 = { '--position': 1 };
    const positionItem2 = { '--position': 2 };
    const positionItem3 = { '--position': 3 };
    const positionItem4 = { '--position': 4 };
    const [rotation, setRotation] = useState(0);

    const handleRotate = (angle) => {
        setRotation((prevRotation) => prevRotation + angle);
    };

    return (
        <main className={styles.main}>
            <section id={styles["screen-1"]} className={styles.section}>
                <h2>Welcome, user!</h2>
                <div className={styles.content}>DESCRIPTION OF THE SITE</div>
                <button className={styles["left-rotate"]} onClick={() => handleRotate(90)}></button>
                <div className={styles.banner}>
                    <div className={styles.slider} style={{ transform: `perspective(1000px) rotateX(0deg) rotateY(${rotation}deg)` }}>
                        <div className={styles.item} style={positionItem1}><button onClick={() => {navigate("/monsters/new")}} className={styles["button-special"]}>Create Monster</button></div>
                        <div className={styles.item} style={positionItem2}><button onClick={() => {navigate("/monsters")}} className={styles["button-special"]}>Monsters</button></div>
                        <div className={styles.item} style={positionItem3}><button onClick={() => {navigate("/humans/new")}} className={styles["button-special"]}>Create Human</button></div>
                        <div className={styles.item} style={positionItem4}><button onClick={() => {navigate("/humans")}} className={styles["button-special"]}>Humans</button></div>
                    </div>
                </div>
                <button className={styles["right-rotate"]} onClick={() => handleRotate(-90)}></button>
                <div className={styles.operation}>
                    <h2>CHOOSE OPERATION</h2>
                </div>
            </section>
        </main>
    );
}

export default Body;
