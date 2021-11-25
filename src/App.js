// import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import SingleColor from './components/SingleColor';
import ProjectList from './components/ProjectList';

import Header from './components/Header';
import { Container } from '@material-ui/core';

function App() {
	return (
		<>
			<Router>
				{/* <Sidebar setTheme={setTheme} colorTheme={colorTheme} /> */}
				{/* <Navbar /> */}
				<Header>
					<Container maxWidth="lg" className="mb-16 pt-32">
						<Switch>
							<Route path="/projects" component={Projects} />
							<Route path="/about" component={About} />
							<Route path="/project-list" component={ProjectList} />
							{/* <Route path="/resume" component={Resume} /> */}

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
					</Container>
				</Header>
			</Router>
		</>
	);
}

export default App;
