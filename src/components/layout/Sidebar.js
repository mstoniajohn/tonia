import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
	FaBars,
	FaEnvelope,
	FaFilePdf,
	FaGithub,
	FaLinkedinIn,
	FaMoon,
	FaSun,
} from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import Switch from '@material-ui/core/Switch';

import { links } from './data';

import './Sidebar.css';

// import NavBar from '../Navbar';
const Sidebar = ({ setTheme, colorTheme }) => {
	const [sidebar, setSidebar] = useState(false);
	const showSidebar = () => setSidebar(!sidebar);
	// const [state, setState] = React.useState(true);
	const handleChange = (event) => {
		setTheme(colorTheme);
	};
	// const [colorTheme, setTheme] = useDarkMode();
	// const authContext = useContext(AuthContext);
	// const { logout, user, isAuthenticated } = authContext;

	return (
		<div className="relative">
			<>
				<div className="sidebar-navbar ml-0">
					<Link to="#" className="menu-bars d-flex">
						<FaBars onClick={showSidebar} />
					</Link>

					<h4 className="text-light d-flex align-items-center mt-3 ml-3">
						<Link to="/">Tonia Roganti</Link>
					</h4>
					<Switch onChange={handleChange} color="primary" />
					<div className="ml-auto grid gap-4 grid-cols-2">
						<div className="grid gap-6 grid-cols-3">
							<a
								className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:transform-none"
								// onClick={() => setTheme(colorTheme)}

								href="https://www.linkedin.com/in/tonia-roganti/"
							>
								<FaLinkedinIn />
								{/* {colorTheme === 'light' ? 'dark theme' : 'light theme'} */}
							</a>
							<a
								className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:transform-none"
								href="https://github.com/mstoniajohn?tab=repositories"
							>
								<FaGithub />
							</a>
							<a
								className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:transform-none"
								href="mailto:toniaroganti@gmail.com"
							>
								<FaEnvelope />
							</a>
						</div>
						<span className="p-0 ml-auto pr-4" onClick={handleChange}>
							{colorTheme === 'light' ? (
								<FaMoon className="text-lg" />
							) : (
								<FaSun className="text-lg" />
							)}
						</span>
					</div>
				</div>
				<nav
					style={{ zIndex: '99' }}
					className={sidebar ? 'sidebar-nav-menu  active' : 'sidebar-nav-menu '}
				>
					<ul className="sidebar-nav-menu-items" onClick={showSidebar}>
						<li className="sidebar-navbar-toggle">
							<Link to="" className="menu-bars">
								<AiOutlineClose />
							</Link>
						</li>

						{links.map((page) => {
							return (
								<li key={page.id} className="nav-text">
									<Link to={page.url}>
										{page.icon}
										<span>{page.text}</span>
									</Link>
								</li>
							);
						})}
						<li className="nav-text">
							<a
								href="/images/Tonia.pdf"
								target="_blank"
								rel="noopener noreferrer"
							>
								<FaFilePdf />
								<span>Resume</span>
							</a>
						</li>
					</ul>

					<nav className="bottom-32 left-6 absolute">
						<ul className="mt-auto  grid grid-cols-4 gap-5 ">
							<li className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:transform-none">
								<a
									// onClick={() => setTheme(colorTheme)}

									href="https://www.linkedin.com/in/tonia-roganti/"
								>
									<FaLinkedinIn />
									{/* {colorTheme === 'light' ? 'dark theme' : 'light theme'} */}
								</a>
							</li>
							<li className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:transform-none">
								<a href="https://github.com/mstoniajohn?tab=repositories">
									<FaGithub />
								</a>
							</li>
							<li className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:transform-none">
								<a
									href="/images/ToniaResumeMay.pdf"
									target="_blank"
									rel="noopener noreferrer"
								>
									<FaFilePdf />
								</a>
							</li>
							<li className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:transform-none">
								<a href="mailto:toniaroganti@gmail.com">
									<FaEnvelope />
								</a>
							</li>
						</ul>
					</nav>
				</nav>
			</>
		</div>
	);
};

export default Sidebar;
