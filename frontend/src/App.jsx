import { useState, useEffect } from 'react'
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Body from './Body/Body';
import '/css/styles.css';

function App() {
	const [hellhounds, setHellhounds] = useState([])

	useEffect(() => {
		if	(!hellhounds.length) {
			fetchHellhounds();
		}
	}, [hellhounds]);

	return (
		<>
		<div className='retro-container'>
			<Header />
			<Body />
			<ul> 
				{
					hellhounds.map(hellhound => <li key={hellhound._id}>{hellhound.name}</li>)
				}
			</ul>
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
