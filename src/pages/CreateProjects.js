import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { createProject } from '../components/features/actions/projectAction';

function CreateProjects() {
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');
	const dispatch = useDispatch();
	const history = useHistory();

	const handleInput = (setter) => (e) => setter(e.target.value);
	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(createProject(title, content));
		history.push('/');
		setTitle('');
		setContent('');
	};
	return (
		<div id='create_form'>
			<div className='container'>
				<form className='col s12 white' onSubmit={handleSubmit}>
					<h2 className='gray-text text-darken-3 form__heading'>
						create a new project
					</h2>
					<div className='row'>
						<div className='input-field col s12'>
							<input
								type='text'
								id='project_title'
								className='validate'
								required
								value={title}
								onChange={handleInput(setTitle)}
							/>
							<label htmlFor='project_title'>Project Title</label>
						</div>
					</div>
					<div className='row'>
						<div className='input-field col s12'>
							<input
								type='text'
								id='project_content'
								className='validate'
								required
								value={content}
								onChange={handleInput(setContent)}
							/>
							<label htmlFor='project_content'>Project Content</label>
						</div>
					</div>
					<div className='row'>
						<div className='input-field'>
							<button
								type='submit'
								className='btn pink lighten-1 z-depth-0 form__btn'
							>
								CREATE
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}

export default CreateProjects;
