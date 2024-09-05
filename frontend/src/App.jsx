import { useState, useRef, useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Context from '@/context';
import Header from '@/layout/header/Header';
import Footer from '@/layout/footer/Footer';
import './styles.css';

function App() {
	const [isPlaying, setIsPlaying] = useState(false);
	const [loading, setLoading] = useState(true);
	const backgroundMusicRef = useRef();
	const location = useLocation();

	const playMusic = () => {
		const audio = backgroundMusicRef.current;
		if (audio) {
			audio.volume = 0.2;
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

	const toggleVolume = (event) => {
		const volume = parseFloat(event.target.value);
		const audio = backgroundMusicRef.current;
		if (audio) {
			audio.volume = volume;
		}
	};

	useEffect(() => {
		setLoading(true);
		const timer = setTimeout(() => {
			setLoading(false);
		}, 400);

		return () => clearTimeout(timer);
	}, [location]);

	const hideFooter = ['/privacy-policy'];

	return (
		<div className="old-crt-monitor">
			<Context.Provider value={{ isPlaying, toggleVolume, playMusic, stopMusic, toggleMusic }}>
				<div className='retro-container'>
					<Header />
					{loading ? (
						<div className='loading'>Loading...</div>
					) : (
						<Outlet />
					)}
					<audio id="background-music" ref={backgroundMusicRef} loop>
						<source src="/music/music.mp3" type="audio/mpeg" />
						Your browser does not support the audio element.
					</audio>
					<div className="volume">
						{isPlaying && (
							<div className="volume-control">
								<label htmlFor="volume">Volume:</label>
								<input
									id="volume"
									type="range"
									min="0"
									max="1"
									step="0.01"
									defaultValue="0.2"
									onChange={toggleVolume}
								/>
							</div>
						)}
					</div>
					{!hideFooter.includes(location.pathname) && <Footer />}
				</div>
			</Context.Provider>
		</div>
	);
}

export default App;
