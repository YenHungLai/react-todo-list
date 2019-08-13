import React from 'react';
import './Tabs.css';

const Tabs = ({ setTabState }) => {
	return (
		<nav className='container flex justify-between w-full h-20 mb-2 rounded-lg'>
			<button
				id='btnA'
				className='selected border-r rounded-tl-lg  tab-btn'
				onClick={() => setTabState('all')}
				onFocus={e => {
					// Toggle tab and add styling, better way??
					e.target.classList.add('selected');
					document
						.querySelector('#btnB')
						.classList.remove('selected');
				}}
			>
				<i className='fas fa-list fa-2x my-4' />
			</button>
			<button
				id='btnB'
				className='rounded-tr-lg tab-btn'
				onClick={() => setTabState('completed')}
				onFocus={e => {
					e.target.classList.add('selected');
					document
						.querySelector('#btnA')
						.classList.remove('selected');
				}}
			>
				<i className='far fa-calendar-check fa-2x my-4' />
			</button>
		</nav>
	);
};

export default Tabs;
