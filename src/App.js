/**
 * TODO:
 * - Does not work on phones
 * - Delete button on hover
 * - Clicking on the other labels will affect first todo
 * - Hookup to database
 */
import React from 'react';
import './tailwind.css';
import './App.css';
// Components
import TodoItemsContainer from './containers/TodoItemsContainer';

class App extends React.Component {
	render() {
		return (
			<div className='App container flex justify-center items-center mt-16 mx-auto'>
				<TodoItemsContainer />
			</div>
		);
	}
}

export default App;
