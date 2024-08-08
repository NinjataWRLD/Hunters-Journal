import React from 'react';
import './Body.css';

function Body({ isPlaying, setVolume }) {
    const sliderStyle = {'--quantity': 4};
    const positionItem1 = {'--position': 1};
    const positionItem2 = {'--position': 2};
    const positionItem3 = {'--position': 3};
    const positionItem4 = {'--position': 4};
    

    return (
        <main>
            <section id="screen-1">
                <article>
                    <header>
                        <h2>Welcome, user!</h2>
                    </header>
                    <div className="content">
                        DESCRIPTION OF THE SITE
                    </div>
                    <div className="banner">
                        <div className="slider" style={sliderStyle}>
                            <div className="item" style={positionItem1}><button className="button-special">Create</button></div>
                            <div className="item" style={positionItem2}><button className="button-special">Read</button></div>
                            <div className="item" style={positionItem3}><button className="button-special">Edit</button></div>
                            <div className="item" style={positionItem4}><button className="button-special">Delete</button></div>
                        </div>
                    </div>
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
                </article>
            </section>
        </main>
    );
}

export default Body;
