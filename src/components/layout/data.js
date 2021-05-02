import React from 'react';
import {
	FaBehance,
	FaFacebook,
	FaLinkedin,
	FaTwitter,
	FaSketch,
	FaHome,
	FaUserFriends,
	// FaFolderOpen,
	// FaCalendarAlt,
	FaWpforms,
} from 'react-icons/fa';
import { IoLogOut, IoLogIn } from 'react-icons/io5';
export const links = [
	{
		id: 1,
		url: '/',
		text: 'Home',
		icon: <FaHome />,
	},
	{
		id: 2,
		url: '/project-list',
		text: 'Projects',
		icon: <FaUserFriends />,
	},
	{
		id: 2,
		url: '/experience',
		text: 'Experience',
		icon: <FaUserFriends />,
	},
	{
		id: 3,
		url: '/about',
		text: 'Info',
		icon: <IoLogOut />,
	},
];
export const linksGuest = [
	{
		id: 1,
		url: '/login',
		text: 'Login',
		icon: <IoLogIn />,
	},

	{
		id: 2,
		url: '/register',
		text: 'register',
		icon: <FaWpforms />,
	},
];

export const social = [
	{
		id: 1,
		url: 'https://www.twitter.com',
		icon: <FaFacebook />,
	},
	{
		id: 2,
		url: 'https://www.twitter.com',
		icon: <FaTwitter />,
	},
	{
		id: 3,
		url: 'https://www.twitter.com',
		icon: <FaLinkedin />,
	},
	{
		id: 4,
		url: 'https://www.twitter.com',
		icon: <FaBehance />,
	},
	{
		id: 5,
		url: 'https://www.twitter.com',
		icon: <FaSketch />,
	},
];
