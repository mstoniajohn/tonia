import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import About from './About';
import Home from './Home';

const Header = () => {
	return (
		<Router>
			<div>
				{/* <Switch>
					<Route path="/" exact component={Home} />
					<Route path="/Home" exact component={Home} />
					<Route path="/contact" exact component={About} />
				</Switch> */}
				<Link to="/">Home</Link>
				<Link to="/about">ABout</Link>

				<Switch>
					<Route path="/about" exact component={About} />

					<Route path="/" exact component={Home} />
				</Switch>
			</div>
		</Router>
	);
};

export default Header;
