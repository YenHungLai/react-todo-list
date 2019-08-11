/**
 * TODO:
 * - Make modal responsive
 */

import React from 'react';
import './Modal.css';

const Modal = ({ open, modalControl, setTodo }) => {
	const handleSubmit = e => {
		e.preventDefault();
		console.log(e.target.querySelectorAll('input'));
		const data = {};
		e.target.querySelectorAll('input, select').forEach(item => {
			// complete filed is string not boolean
			data[item.name] = item.value;
		});
        console.log(data);

        // Add item to list
		fetch('http://localhost:9000/.netlify/functions/api/todoitems', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
				// 'Content-Type': 'application/x-www-form-urlencoded',
			},
			// Use a modal to get inputs
			body: JSON.stringify(data)
		})
			.then(res => res.json())
			.then(data => {
				console.log(data);
				setTodo(data);
            });

        // Close modal
		modalControl(false);
	};

	return (
		<div
			id='backdrop'
			className='fixed left-0 bottom-0 z-10 h-full w-full bg-gray-600 text-base'
			style={{ display: open ? 'block' : 'none' }}
			onClick={e => {
				if (e.target.id === 'backdrop') modalControl(false);
			}}
		>
			<div
				id='modal'
				className='bg-white z-20 mt-32 w-1/3 h-48 rounded-lg mx-auto'
			>
				<form
					action='/'
					className='p-5 mx-20 my-10'
					onSubmit={handleSubmit}
				>
					<div className='mb-2'>
						<label htmlFor='description' className='font-bold'>
							Description
						</label>
						<input
							name='description'
							type='text'
							className='float-right bg-gray-300 outline-none focus:bg-blue-200 rounded'
						/>
					</div>
					<div className='mb-2'>
						<label htmlFor='complete' className='font-bold'>
							Completed
						</label>
						<select
							name='complete'
							className='float-right bg-gray-300 outline-none focus:bg-blue-200 rounded'
						>
							<option value={true}>True</option>
							<option value={false}>False</option>
						</select>
					</div>
					<div className='text-center mt-6'>
						<button className='mx-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
							Submit
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Modal;
