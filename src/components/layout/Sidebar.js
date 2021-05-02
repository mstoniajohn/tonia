import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaEnvelope, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { links } from './data';

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
		<div className="bg-white dark:bg-gray-800 text-dark dark:text-pink-200 ">
			<IconContext.Provider value={{ color: '#fff' }}>
				<div className="sidebar-navbar pr-4">
					<Link to="#" className="menu-bars d-flex">
						<FaBars onClick={showSidebar} />
					</Link>

					<h4 className="text-light d-flex align-items-center mt-3 ml-3">
						Tonia Roganti
					</h4>
					<div className="ml-auto grid gap-2 grid-cols-4">
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
						<span onClick={() => setTheme(colorTheme)}>
							{colorTheme === 'light' ? 'dark' : 'light'}
						</span>
					</div>
				</div>
				<nav
					style={{ zIndex: '99' }}
					className={
						sidebar
							? 'sidebar-nav-menu bg-white dark:bg-gray-800 text-dark dark:text-pink-300 active'
							: 'sidebar-nav-menu bg-white dark:bg-gray-800 text-dark dark:text-pink-300'
					}
				>
					<ul className="sidebar-nav-menu-items" onClick={showSidebar}>
						<li className="sidebar-navbar-toggle">
							<Link to="" className="menu-bars text-dark dark:text-pink-200">
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
				</nav>
			</IconContext.Provider>
		</div>
	);
};

export default Sidebar;
