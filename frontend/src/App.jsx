import { useState, useEffect } from 'react'
import Header from './layout/Header';

function App() {
	const [hellhounds, setHellhounds] = useState([])

	useEffect(() => {
		if	(!hellhounds.length) {
			fetchHellhounds();
		}
	}, [hellhounds]);

	return (
		<>
			<Header ></Header>
			<ul>
				{
					hellhounds.map(hellhound => <li key={hellhound._id}>{hellhound.name}</li>)
				}
			</ul>
		</>
	);

	async function fetchHellhounds() {
		const res = await fetch('https://mern-demo-backend-lfjj.onrender.com/api/hellhounds/');
		const hellhounds = await res.json();
		
		setHellhounds(hellhounds);
	}
}

export default App
