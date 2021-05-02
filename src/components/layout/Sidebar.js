import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaEnvelope, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { FiMoon } from 'react-icons/fi';
import { links } from './data';
import { ImSun } from 'react-icons/im';

import './Sidebar.css';
import { IconContext } from 'react-icons';
import useDarkMode from '../../hooks/useDarkMode';
// import NavBar from '../Navbar';
const Sidebar = () => {
	const [sidebar, setSidebar] = useState(false);
	const showSidebar = () => setSidebar(!sidebar);
	const [colorTheme, setTheme] = useDarkMode();
	// const authContext = useContext(AuthContext);
	// const { logout, user, isAuthenticated } = authContext;

	return (
		<div className="relative">
			<IconContext.Provider value={{ color: '#fff' }}>
				<div className="sidebar-navbar pr-4">
					<Link to="#" className="menu-bars d-flex">
						<FaBars onClick={showSidebar} />
					</Link>

					<h4 className="text-light d-flex align-items-center mt-3 ml-3">
						<Link to="/">Tonia Roganti</Link>
					</h4>
					<div className="ml-auto grid gap-4 grid-cols-2">
						<div className="grid gap-2 grid-cols-3">
							<a
								// onClick={() => setTheme(colorTheme)}

								href="https://www.linkedin.com/in/tonia-roganti/"
							>
								<FaLinkedinIn />
								{/* {colorTheme === 'light' ? 'dark theme' : 'light theme'} */}
							</a>
							<a href="https://github.com/mstoniajohn?tab=repositories">
								<FaGithub />
							</a>
							<a href="mailto:toniaroganti@gmail.com">
								<FaEnvelope />
							</a>
						</div>
						<span className="p-0 ml-auto" onClick={() => setTheme(colorTheme)}>
							{colorTheme === 'light' ? (
								<FiMoon className="text-lg" />
							) : (
								<ImSun className="text-lg" />
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
					</ul>

					<nav className="bottom-10 left-3 absolute">
						<ul className="mt-auto  grid grid-cols-3 gap-6">
							<li>
								<a
									// onClick={() => setTheme(colorTheme)}

									href="https://www.linkedin.com/in/tonia-roganti/"
								>
									<FaLinkedinIn />
									{/* {colorTheme === 'light' ? 'dark theme' : 'light theme'} */}
								</a>
							</li>
							<li>
								<a href="https://github.com/mstoniajohn?tab=repositories">
									<FaGithub />
								</a>
							</li>
							<li>
								<a href="mailto:toniaroganti@gmail.com">
									<FaEnvelope />
								</a>
							</li>
						</ul>
					</nav>
				</nav>
			</IconContext.Provider>
		</div>
	);
};

export default Sidebar;
