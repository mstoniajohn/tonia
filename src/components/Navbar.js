import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function NavBar() {
	const [click, setClick] = useState(false);
	const [navbar, setNavbar] = useState(false);

	const handleClick = () => setClick(!click);

	const changeBackground = () => {
		// window.scrollY
		if (window.scrollY >= 80) setNavbar(true);
		else {
			setNavbar(false);
		}
	};
	window.addEventListener('scroll', changeBackground);
	return (
		<>
			<nav className={navbar ? 'navbar active' : 'navbar'}>
				<div className="nav-container">
					<Link exact to="/" className="nav-logo">
						Tonia
						<i className="fas fa-code"></i>
					</Link>

					<ul className={click ? 'nav-menu active' : 'nav-menu'}>
						<li className="nav-item">
							<Link
								exact
								to="/"
								activeClassName="active"
								className="nav-links"
								onClick={handleClick}
							>
								Home
							</Link>
						</li>
						<li className="nav-item">
							<Link
								exact
								to="/experience"
								activeClassName="active"
								className="nav-links"
								onClick={handleClick}
							>
								Experience
							</Link>
						</li>
						<li className="nav-item">
							<Link
								exact
								to="/projects"
								activeClassName="active"
								className="nav-links"
								onClick={handleClick}
							>
								Projects
							</Link>
						</li>
						{/* <li className="nav-item">
							<Link
								exact
								to="/blog"
								activeClassName="active"
								className="nav-links"
								onClick={handleClick}
							>
								Blog
							</Link>
						</li> */}
						<li className="nav-item">
							<Link
								exact
								to="/about"
								activeClassName="active"
								className="nav-links"
								onClick={handleClick}
							>
								About
							</Link>
						</li>
					</ul>
					<div className="nav-icon" onClick={handleClick}>
						<i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
					</div>
				</div>
			</nav>
		</>
	);
}

export default NavBar;
