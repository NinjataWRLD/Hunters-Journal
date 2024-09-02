import { useState, useRef } from 'react'
import Context from './context';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import { Outlet } from 'react-router-dom'
import '/css/styles.css';

function App() {
	const backgroundMusicRef = useRef();
	const [isPlaying, setIsPlaying] = useState(false);
	const playMusic = () => {
		const audio = backgroundMusicRef.current;
		if (audio) {
			audio.play().catch(error => {
				console.error("Error playing audio:", error);
			});
			setIsPlaying(true);
		}
	};

	const stopMusic = () => {
		const audio = backgroundMusicRef.current;
		if (audio) {
			audio.pause();
			setIsPlaying(false);
		}
	};

	const toggleMusic = () => {
		if (isPlaying) {
			stopMusic();
		} else {
			playMusic();
		}
	};

	const setVolume = (event) => {
		const audio = backgroundMusicRef.current;
		if (audio) {
			audio.volume = event.target.value;
		}
	};
	
	return (
		<div className="old-crt-monitor">
			<Context.Provider value={{ isPlaying, setVolume, playMusic, stopMusic, toggleMusic }}>
				<div className='retro-container'>
					<Header />
					<Outlet />
					<audio id="background-music" ref={backgroundMusicRef} loop>
						<source src="/music/music.mp3" type="audio/mpeg" />
						Your browser does not support the audio element.
					</audio>
					<Footer />
				</div>
			</Context.Provider>
		</div>
	);
}

export default App;
