import React, { useEffect, useState } from 'react';
import './TodoItemsContainer.css';
// Components
import TodoItem from '../components/TodoItem';
import Tabs from '../components/Tabs';
import Modal from '../components/Modal';

const TodoItemsContainer = () => {
	const [todos, setTodo] = useState([]);
	const [tabState, setTabState] = useState('all');
	const [open, setOpen] = useState(false);

	useEffect(() => {
		// Get all todos
		fetch('https://todolistapi.netlify.com/.netlify/functions/api/todoitems')
			.then(res => res.json())
			.then(data => {
				console.log(data);
				setTodo(data)});
	}, []);

	const deleteItem = id => {
		fetch(`https://todolistapi.netlify.com/.netlify/functions/api/todoitems/${id}`, {
			method: 'DELETE'
		})
			.then(res => res.json())
			.then(data => {
				console.log(data);
				setTodo(data);
			});
	};

	return (
		<div className='container bg-white max-w-xs text-xl capitalize rounded-lg shadow-2xl'>
			<Modal open={open} modalControl={setOpen} setTodo={setTodo} />
			<Tabs setTabState={setTabState} />
			<TodoItem
				todos={todos}
				setTodo={setTodo}
				deleteItem={deleteItem}
				tabState={tabState}
			/>
			<button
				className='relative rounded-full bg-orange-300 text-white w-12 h-12'
				onClick={() => setOpen(true)}
			>
				<i className='fas fa-plus' />
			</button>
		</div>
	);
};

export default TodoItemsContainer;
