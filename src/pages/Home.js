import React from 'react';
import Tasks from '../components/projects/Tasks'
import Notification from '../components/notifications/Notification'

function Home() {
	return (
		<section className='container home'>
			<div className="row">
				<div className="col m5 s12">
					<Tasks/>
				</div>
				<div className="col m5 s12 offset-m1">
					<Notification />
				</div>
			</div>
		</section>
	);
}

export default Home;
