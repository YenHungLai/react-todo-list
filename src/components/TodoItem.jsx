/**
 * TODO:
 * - Todo item without description cannot be created
 */
import React from 'react';

const TodoItem = ({ todos, deleteItem, tabState, setTodo }) => {
	const filteredTodos =
		tabState === 'all'
			? todos
			: todos.filter(todo => todo.complete === true);

	const toggleCheckbox = (e, id) => {
		// Change complete property in API
		fetch(
			`http://localhost:9000/.netlify/functions/api/todoitems/${id}`,
			{
				method: 'PUT',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					complete: e.target.checked
				})
			}
		)
			.then(res => res.json())
			.then(data => {
				console.log(data);
				setTodo(data);
			});
	};

	return (
		<div className='p-6 mb-4'>
			{filteredTodos.map((todo, key) => (
				<div
					key={key}
					className='leading-loose z-10'
					// How to make delete button appear on hover
					// onMouseOver={e => {
					// 	if (e.target.nodeName === 'DIV')
					// 		// queySelector of an element returns the first element that is a descendant of the element
					// 		e.target.querySelector('i').style.opacity = '1';
					// }}
					// onMouseOut={e => {
					// 	if (e.target.nodeName === 'DIV')
					// 		e.target.querySelector('i').style.opacity = '0';
					// }}
				>
					{/* Make custom checkbox */}
					<input
						// FIXME: string 'false' will evaluate to true
						checked={todo.complete ? true : false}
						type='checkbox'
						id='todo'
						className='mr-3'
						onChange={e => toggleCheckbox(e, todo.id)}
					/>
					<label htmlFor='todo'>{todo.description}</label>
					<i
						className='fas fa-trash-alt fa-xs float-right my-3 opacity-100 hover:text-gray-600'
						onClick={() => deleteItem(todo.id)}
					/>
				</div>
			))}
		</div>
	);
};

export default TodoItem;
