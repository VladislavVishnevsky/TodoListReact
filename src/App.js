import React, { useEffect } from 'react';
import './App.css';
import ToDoList from './ToDo/ToDoList';
import Context from './context';
import AddTodo from './ToDo/AddTodo';
import Loader from './Loader';



function App() {
	const [todos, setTodos] = React.useState([])
	const [loading, setLoading] = React.useState(true)

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
			.then(response => response.json())
			.then(todos => {
				setTimeout(() => {
					setTodos(todos)
					setLoading(false)
				}, 2000)
			})
	}, [])


	function toggleToDo(id) {
		setTodos(todos.map(todo => {
			if (todo.id === id) {
				todo.completed = !todo.completed
			}
			return todo;
		}))
	}

	function removeTodo(id) {
		setTodos(todos.filter(todo => todo.id !== id))
	}

	function addTodo(title) {
		setTodos(todos.concat([{
			title,
			id: Date.now(),
			completed: false
		}]))
	}

	return (
		<Context.Provider value={{ removeTodo }}>
			<div className="wrapper">
				<h1>ToDo List</h1>
				<AddTodo onCreate={addTodo} />

				{loading && <Loader />}
				{todos.length ? (<ToDoList todos={todos} onToggle={toggleToDo} />) : loading ? null : (<p>No Todos!</p>)}
			</div>
		</Context.Provider>
	);
}

export default App;
