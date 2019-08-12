import React from 'react';

const Tabs = ({ setTabState }) => {
	return (
		<nav className='container flex justify-between w-full h-20 mb-2 rounded-lg'>
			<button
				id='btnA'
				className='border-r rounded-tl-lg w-40 text-purple-500 text-center focus:outline-none'
				onClick={() => setTabState('all')}
				onFocus={e => {
					// Toggle tab and add styling, better way??
					e.target.closest('button').style.backgroundColor = 'white';
					e.target.closest('button').style.color = '#9f7aea';
					document.querySelector('#btnB').style.backgroundColor =
						'#F8F8F8';
					document.querySelector('#btnB').style.color = '#C8C8C8';
				}}
			>
				<i className='fas fa-list fa-2x my-4' />
			</button>
			<button
				id='btnB'
				className='rounded-tr-lg w-40 bg-gray-200 text-gray-400 text-center focus:outline-none'
				onClick={() => setTabState('completed')}
				onFocus={e => {
					e.target.closest('button').style.backgroundColor = 'white';
					e.target.closest('button').style.color = '#9f7aea';
					document.querySelector('#btnA').style.backgroundColor =
						'#F8F8F8';
					document.querySelector('#btnA').style.color = '#C8C8C8';
				}}
			>
				<i className='far fa-calendar-check fa-2x my-4' />
			</button>
		</nav>
	);
};

export default Tabs;
