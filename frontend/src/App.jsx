import { useState, useEffect } from 'react'
import Header from './layout/Header';

function App() {
	const [todos, setTodos] = useState([])

	useEffect(() => {
		if	(!todos.length) {
			fetchTodos();
		}
	}, [todos]);

	return (
		<>
			<Header ></Header>

		</>
	);

	async function fetchTodos() {
		const res = await fetch('http://localhost:5069/api/todos');
		const todos = await res.json();
		
		setTodos(todos);
	}
}

export default App
