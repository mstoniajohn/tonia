import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import SingleColor from './components/SingleColor';
import ProjectList from './components/ProjectList';
import Sidebar from './components/layout/Sidebar';

function App() {
	return (
		<div>
			<Router>
				<Sidebar />
				{/* <Navbar /> */}

				<div>
					<Switch>
						<Route path="/projects" component={Projects} />
						<Route path="/about" component={About} />
						<Route path="/project-list" component={ProjectList} />

						<Route path="/experience">
							<Experience />
						</Route>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/colors">
							<SingleColor />
						</Route>
					</Switch>
				</div>
			</Router>
		</div>
	);
}

export default App;
