import React from 'react';
import './tailwind.css';
import './App.css';
// Components
import TodoItemsContainer from './containers/TodoItemsContainer';

class App extends React.Component {
	render() {
		return (
			<div className='App container flex justify-center items-center mt-16 mx-auto'>
				<TodoItemsContainer modalControl={this.modalControl} />
			</div>
		);
	}
}

export default App;
