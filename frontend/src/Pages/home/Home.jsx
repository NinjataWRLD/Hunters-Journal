import { useContext } from 'react';
import { useState } from 'react';
import './Home.css';
import Context from '../../context';

function Body() {
    const { isPlaying, setVolume } = useContext(Context);

    const positionItem1 = { '--position': 1 };
    const positionItem2 = { '--position': 2 };
    const positionItem3 = { '--position': 3 };
    const positionItem4 = { '--position': 4 };
    const [rotation, setRotation] = useState(0);

    const handleRotate = (angle) => {
        setRotation((prevRotation) => prevRotation + angle);
    };

    function RedirectCreate() {
        location.href = "/create";
    }
    function RedirectCreateHuman() {
        location.href = "/create-human";
    }
    function RedirectRead() {
        location.href = "/browse";
    }
    function RedirectHumans() {
        location.href = "/humans";
    }

    return (
        <main>
            <section id="screen-1">
                <h2>Welcome, user!</h2>
                <div className="content">DESCRIPTION OF THE SITE</div>
                <button className="left-rotate" onClick={() => handleRotate(90)}></button>
                <div className="banner">
                    <div className="slider" style={{ transform: `perspective(1000px) rotateX(0deg) rotateY(${rotation}deg)` }}>
                        <div className="item" style={positionItem1}><button onClick={RedirectCreate} className="button-special">Create Monster</button></div>
                        <div className="item" style={positionItem2}><button onClick={RedirectRead} className="button-special">Monsters</button></div>
                        <div className="item" style={positionItem3}><button onClick={RedirectCreateHuman} className="button-special">Create Human</button></div>
                        <div className="item" style={positionItem4}><button onClick={RedirectHumans} className="button-special">Humans</button></div>
                    </div>
                </div>
                <button className="right-rotate" onClick={() => handleRotate(-90)}></button>
                <div className="operation">
                    <h2>CHOOSE OPERATION</h2>
                </div>
                {isPlaying && (
                    <div className="volume-control">
                        <label htmlFor="volume">Volume:</label>
                        <input
                            id="volume"
                            type="range"
                            min="0"
                            max="1"
                            step="0.01"
                            defaultValue="0.8"
                            onChange={setVolume}
                        />
                    </div>
                )}
            </section>
        </main>
    );
}

export default Body;
