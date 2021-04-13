import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import SingleColor from './components/SingleColor';

function App() {
	return (
		<div>
			<Router>
				<Navbar />

				<div>
					<Switch>
						<Route path="/projects" component={Projects} />
						<Route path="/about" component={About} />
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
