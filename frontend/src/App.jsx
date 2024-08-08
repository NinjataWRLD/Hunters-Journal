import { useState, useEffect } from 'react'
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Body from './Body/Body';
import '/css/styles.css';

function App() {
	const [hellhounds, setHellhounds] = useState([])
	const [isPlaying, setIsPlaying] = useState(false);
	
	useEffect(() => {
		if	(!hellhounds.length) {
			fetchHellhounds();
		}
	}, [hellhounds]);

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
		<>
		<div className='retro-container'>
			<Header isPlaying={isPlaying} playMusic={playMusic} stopMusic={stopMusic} />
			<Body isPlaying={isPlaying} setVolume={setVolume} playMusic={playMusic} stopMusic={stopMusic} />
			<audio id="background-music" loop>
                <source src="/music/music.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>
			{/* <ul> 
				{
					hellhounds.map(hellhound => <li key={hellhound._id}>{hellhound.name}</li>)
				}
			</ul> */}
			<Footer />
			</div>
		</>
	);

	async function fetchHellhounds() {
		const res = await fetch('https://mern-demo-backend-lfjj.onrender.com/api/hellhounds/');
		const hellhounds = await res.json();
		
		setHellhounds(hellhounds);
	}
}

export default App;
