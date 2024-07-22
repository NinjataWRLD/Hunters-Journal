import { useState, useEffect } from 'react'

function App() {
	const [todos, setTodos] = useState([])

	useEffect(() => {
		if	(!todos.length) {
			fetchTodos();
		}
	}, [todos]);

	return (
		<>
			<ul>
				{todos.map(todo => 
					<li key={todo._id}>{todo.text}</li>
				)}
			</ul>
		</>
	);

	async function fetchTodos() {
		const res = await fetch('http://localhost:5069/api/todos');
		const todos = await res.json();
		
		setTodos(todos);
	}
}

export default App
