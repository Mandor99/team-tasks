import React from 'react';
import '../components/form/form.css';

function SignUp() {
	return (
		<div id='signUp_form'>
			<div className='container'>
				<form action='' className='col s12 white'>
					<h2 className='gray-text text-darken-3 form__heading'>sign up</h2>
					<div className='row'>
						<div className='input-field col s6'>
							<input
								type='text'
								name='fName'
								id='first_name'
								className='validate'
							/>
							<label htmlFor='first_name'>First Name</label>
						</div>
						<div className='input-field col s6'>
							<input
								type='text'
								name='LName'
								id='last_name'
								className='validate'
							/>
							<label htmlFor='last_name'>Last Name</label>
						</div>
					</div>
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
								Sign Up
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}

export default SignUp;
