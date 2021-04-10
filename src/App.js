import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';

function App() {
	return (
		<div className="box-border">
			<Router>
				<Navbar />

				<div className="px-12 py-12 container box-content">
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/projects" component={Projects} />
						<Route path="/about" component={About} />
						{/* <Route path="/about" component={About} /> */}
					</Switch>
				</div>
			</Router>
		</div>
	);
}

export default App;
