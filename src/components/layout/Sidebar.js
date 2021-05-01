import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { links } from './data';

import './Sidebar.css';
import { IconContext } from 'react-icons';
import NavBar from '../Navbar';
const Sidebar = () => {
	const [sidebar, setSidebar] = useState(false);
	const showSidebar = () => setSidebar(!sidebar);
	// const authContext = useContext(AuthContext);
	// const { logout, user, isAuthenticated } = authContext;

	return (
		<>
			<IconContext.Provider value={{ color: '#fff' }}>
				<div className="sidebar-navbar pr-4">
					<Link to="#" className="menu-bars">
						<FaBars onClick={showSidebar} />
					</Link>

					<h4 className="text-light d-flex align-items-center mt-3 ml-3">
						Tonia Roganti
					</h4>
				</div>
				<nav
					style={{ zIndex: '99' }}
					className={sidebar ? 'sidebar-nav-menu active' : 'sidebar-nav-menu'}
				>
					<ul className="sidebar-nav-menu-items" onClick={showSidebar}>
						<li className="sidebar-navbar-toggle">
							<Link to="" className="menu-bars">
								<AiOutlineClose />
							</Link>
						</li>
						<li>
							<Link className="text-light" to="/register">
								Register
							</Link>
						</li>

						<li>
							<Link className="text-light" to="/login">
								Login
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
		</>
	);
};

export default Sidebar;
