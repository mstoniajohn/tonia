import React from 'react';
import {
	makeStyles,
	createTheme,
	ThemeProvider,
} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
// import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import { GitHub, Home, InfoRounded, LinkedIn } from '@material-ui/icons';
import { Box, CssBaseline, Switch } from '@material-ui/core';

import useDarkMode from '../hooks/useDarkMode';
import { NavLink, useHistory } from 'react-router-dom';
import DeveloperModeIcon from '@material-ui/icons/DeveloperMode';
import AppsIcon from '@material-ui/icons/Apps';
import DomainIcon from '@material-ui/icons/Domain';
import { FaFilePdf } from 'react-icons/fa';
// import Footer from './layout/Footer';
const pages = [
	{ name: 'Home', icon: <Home />, url: '/' },
	{ name: 'Projects', icon: <AppsIcon />, url: '/projects' },
	{ name: 'Experience', icon: <DomainIcon />, url: '/experience' },
	{ name: 'About Me', icon: <InfoRounded />, url: '/about' },
];
const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		mb: 20,
	},
	menuButton: {
		marginRight: theme.spacing(1),
	},
	title: {
		flexGrow: 1,
	},
	list: {
		width: 250,
	},
	fullList: {
		width: 'auto',
	},
	sectionDesktop: {
		display: 'none',
		[theme.breakpoints.up('xs')]: {
			display: 'flex',
			justifyContent: 'space-around',
			alignItems: 'center',
			padding: 0,
			margin: 0,
		},
	},
	sectionMobile: {
		display: 'flex',
		[theme.breakpoints.up('md')]: {
			display: 'none',
		},
	},
}));

export default function Header({ children }) {
	const classes = useStyles();
	const [state, setState] = React.useState({
		left: false,
	});
	const [colorTheme, setTheme] = useDarkMode();
	const history = useHistory();

	const theme = createTheme({
		typography: {
			// h4: {
			// 	color: ,
			// },
			fontFamily: [
				'-apple-system',
				'BlinkMacSystemFont',
				'"Segoe UI"',
				'Roboto',
				'"Helvetica Neue"',
				'Arial',
				'sans-serif',
				'"Apple Color Emoji"',
				'"Segoe UI Emoji"',
				'"Segoe UI Symbol"',
			].join(','),
		},
		palette: {
			type: colorTheme,
			primary: {
				main: '#4dd0e1',
			},
			secondary: {
				main: '#ff80ab',
			},
		},
	});
	const handleChange = (event) => {
		setTheme(colorTheme);
	};

	const toggleDrawer = (anchor, open) => (event) => {
		if (
			event.type === 'keydown' &&
			(event.key === 'Tab' || event.key === 'Shift')
		) {
			return;
		}

		setState({ ...state, [anchor]: open });
	};

	const list = (anchor) => (
		<div
			className={clsx(classes.list, {
				[classes.fullList]: anchor === 'top' || anchor === 'bottom',
			})}
			role="presentation"
			onClick={toggleDrawer(anchor, false)}
			onKeyDown={toggleDrawer(anchor, false)}
		>
			<List>
				{pages.map((page, index) => (
					<ListItem
						button
						key={page}
						onClick={() => history.push(`${page.url}`)}
					>
						<ListItemIcon>{page.icon}</ListItemIcon>
						<ListItemText primary={page.name} />
					</ListItem>
				))}
			</List>
			{/* <Divider />
			<List>
				{['All mail', 'Trash', 'Spam'].map((text, index) => (
					<ListItem button key={text}>
						<ListItemIcon>
							{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
						</ListItemIcon>
						<ListItemText primary={text} />
					</ListItem>
				))}
			</List> */}
		</div>
	);

	return (
		<div className={classes.root}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<AppBar position="fixed" color="default">
					<Toolbar>
						<IconButton
							edge="start"
							className={classes.menuButton}
							color="inherit"
							aria-label="menu"
							onClick={toggleDrawer('left', true)}
						>
							<MenuIcon />
						</IconButton>
						<NavLink to="/">
							<DeveloperModeIcon color="primary" />
						</NavLink>

						<Box className="flex items-center  ml-auto">
							{/* <MenuItem> */}
							<IconButton
								color="primary"
								href="https://github.com/mstoniajohn?tab=repositories"
							>
								<GitHub />
							</IconButton>
							{/* </MenuItem> */}
							{/* <MenuItem> */}
							<IconButton
								color="primary"
								href="https://www.linkedin.com/in/tonia-roganti/"
							>
								<LinkedIn />
							</IconButton>
							<IconButton href="/images/ToniaResume2022.pdf">
								<FaFilePdf />
							</IconButton>

							<Switch onChange={handleChange} color="secondary" />
						</Box>
					</Toolbar>
				</AppBar>
				<Drawer
					anchor="left"
					open={state['left']}
					onClose={toggleDrawer('left', false)}
				>
					{list('left')}
				</Drawer>
				{children}
				{/* <Footer /> */}
			</ThemeProvider>
		</div>
	);
}
