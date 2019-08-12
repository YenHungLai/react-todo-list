import React from 'react';
import './Modal.css';

const Modal = ({ open, modalControl, setTodo }) => {
	const handleSubmit = e => {
		e.preventDefault();
		// console.log(e.target.querySelectorAll('input'));
		const data = {};
		e.target.querySelectorAll('input, select').forEach(item => {
			// complete filed is string not boolean
			data[item.name] = item.value;
		});
		// Data collected is string but we want boolean
		data.complete = data.complete === 'true' ? true : false;
		console.log(data);

		// Add item to list
		fetch('https://todolistapi.netlify.com/.netlify/functions/api/todoitems', {
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
			className='fixed left-0 bottom-0 z-20 h-full w-full bg-gray-600 text-base'
			style={{ display: open ? 'block' : 'none' }}
			onClick={e => {
				if (e.target.id === 'backdrop') modalControl(false);
			}}
		>
			<div
				id='modal'
				className='bg-white z-20 mt-32 max-w-4xl lg:w-7/12 md:w-10/12 sm:w-2/4 w-11/12 h-40 rounded-lg mx-auto'
			>
				<form
					action='/'
					className='p-5 lg:mx-20 md:mx-32 mx-2 my-10'
					onSubmit={handleSubmit}
				>
					<div className='mb-2'>
						<label htmlFor='description' className='font-bold'>
							Description
						</label>
						<input
							name='description'
							type='text'
							className='input'
							required
						/>
					</div>
					<div className='mb-2'>
						<label htmlFor='complete' className='font-bold'>
							Completed
						</label>
						<select name='complete' className='input'>
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
