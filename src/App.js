import {useEffect} from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './pages/Home';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import CreateProjects from './pages/CreateProjects';
import Navbar from './components/navbar/Navbar';
import ProjectDetails from './pages/ProjectDetails';

function App() {
  useEffect(() => {
    M.AutoInit();
    document.addEventListener('DOMContentLoaded', function() {
      const elems = document.querySelectorAll('.sidenav');
      M.Sidenav.init(elems, {});
    });
  }, []);
	return (
		<div className='App'>
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/login' component={LogIn}/>
          <Route path='/signup' component={SignUp}/>
          <Route path='/create' component={CreateProjects}/>
          <Route path='/project/:id' component={ProjectDetails}/>
        </Switch>
      </Router>
		</div>
	);
}

export default App;
