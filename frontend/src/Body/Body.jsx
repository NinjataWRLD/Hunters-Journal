import React, { useState } from 'react';
import './Body.css';

function Body() {
    const [isPlaying, setIsPlaying] = useState(false);

    const playMusic = () => {
        const audio = document.getElementById('background-music');
        if (audio) {
            audio.play().catch(error => {
                console.error("Error playing audio:", error);
            });
            setIsPlaying(true);
        }
    };

    const stopMusic = () => {
        const audio = document.getElementById('background-music');
        if (audio) {
            audio.pause();
            // audio.currentTime = 0;
            setIsPlaying(false);
        }
    };

    const setVolume = (event) => {
        const audio = document.getElementById('background-music');
        if (audio) {
            audio.volume = event.target.value;
        }
    };

    return (
        <main>
            <audio id="background-music" loop>
                <source src="/music/music.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>
            <section id="screen-1">
                <article>
                    <header>
                        <h2>Welcome, user!</h2>
                    </header>
                    <div className="content">
                        DESCRIPTION OF THE SITE
                    </div>
                    <div className="buttondiv">
                        <button className="button-special">Start</button>
                        <button id="play-music" className="button-special" onClick={playMusic}>Play Music</button>
                        <button id="stop-music" className="button-special" onClick={stopMusic}>Stop the music</button>
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
