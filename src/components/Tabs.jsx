import React from 'react';

const Tabs = ({ setTabState }) => {
	return (
		<nav className='container flex justify-between w-full h-20 mb-2 rounded-lg'>
			<button
				id='btnA'
				className='border-r border-b rounded-lg w-40 bg-gray-200 text-purple-500 text-center focus:outline-none'
				onClick={() => setTabState('all')}
				onFocus={e => {
					// Toggle tab and add styling, better way??
					e.target.closest('button').style.backgroundColor =
						'#F0F0F0';
					e.target.closest('button').style.color = '#9f7aea';
					document.querySelector('#btnB').style.backgroundColor =
						'white';
					document.querySelector('#btnB').style.color = 'black';
				}}
			>
				<i className='fas fa-list fa-2x my-4' />
			</button>
			<button
				id='btnB'
				className='border-b w-40 text-center focus:outline-none'
				onClick={() => setTabState('completed')}
				onFocus={e => {
					e.target.closest('button').style.backgroundColor =
						'#F0F0F0';
						e.target.closest('button').style.color = '#9f7aea';
					document.querySelector('#btnA').style.backgroundColor =
						'white';
						document.querySelector('#btnA').style.color = 'black';
				}}
			>
				<i className='far fa-calendar-check fa-2x my-4' />
			</button>
		</nav>
	);
};

export default Tabs;
