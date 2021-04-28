import React from 'react';
import '../components/form/form.css';

function LogIn() {
	return (
		<div id='signIn_form'>
			<div className='container'>
				<form action='' className='col s12 white'>
					<h2 className='gray-text text-darken-3 form__heading'>sign in</h2>
					<div className='row'>
						<div className='input-field col s12'>
							<input
								type='email'
								name='email'
								id='email'
								className='validate'
							/>
							<label htmlFor='email'>Email</label>
						</div>
					</div>
					<div className='row'>
						<div className='input-field col s12'>
							<input
								type='password'
								name='password'
								id='password'
								className='validate'
							/>
							<label htmlFor='password'>Password</label>
						</div>
					</div>
					<div className='row'>
						<div className='input-field'>
							<button className='btn pink lighten-1 z-depth-0 form__btn'>
								log in
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}

export default LogIn;
