import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';

function App() {
	return (
		<div className="box-border">
			<Router>
				<Navbar />

				<div className="px-12 py-12 box-content">
					<Switch>
						<Route path="/projects" component={Projects} />
						<Route path="/about" component={About} />
						<Route path="/experience">
							<Experience />
						</Route>
						<Route exact path="/">
							<Home />
						</Route>
					</Switch>
				</div>
			</Router>
		</div>
	);
}

export default App;
