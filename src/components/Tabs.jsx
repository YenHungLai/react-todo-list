/**
 * TODO:
 * - Default selected tab
 * - Selected tab has no border bottom and color purple
 * - Not selected tab has border and color gray
 */
import React from 'react';

const Tabs = ({ setTabState }) => {
	return (
		<nav className='container flex justify-between w-full h-20 mb-2 text-purple-500'>
			<button
				className='border-r border-b w-40 text-center focus:bg-gray-200 focus:outline-none'
				onClick={() => setTabState('all')}
			>
				<i className='fas fa-list fa-2x my-4' />
			</button>
			<button
				className='border-b w-40 text-center focus:bg-gray-200 focus:outline-none'
				onClick={() => setTabState('completed')}
			>
				<i className='far fa-calendar-check fa-2x my-4' />
			</button>
		</nav>
	);
};

export default Tabs;
