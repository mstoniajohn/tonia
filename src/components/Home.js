import React from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { motion } from 'framer-motion';
import Experience from './Experience';

import useDarkMode from '../hooks/useDarkMode';
import { FaArrowDown } from 'react-icons/fa';
import MyTimeline from './features/MyTimeLine';
import Projects from './Projects';
import { Typography } from '@material-ui/core';
import CodeAlgo from './features/CodeAlgo';

const Home = () => {
	useDarkMode();
	return (
		<div className="">
			<div className="hero flex justify-center items-center min-h-screen">
				<div className=" mx-auto flex flex-col items-center">
					<motion.Typography
						className="text-xl my-4"
						initial={{ x: '-100vw' }}
						animate={{ x: '0' }}
						transition={{ duration: 1 }}
					>
						Hello, I'm Tonia!
					</motion.Typography>
					<div className="underlined"></div>
					<Typography variant="h6" color="secondary">
						Welcome to my website...
					</Typography>
					<Typography variant="subtitle1" color="primary">
						I am a Full-Stack Software Engineer
					</Typography>
					<Typography variant="caption" color="textSecondary">
						This website was built with React & TailwindCSS
					</Typography>

					<motion.Typography className="animate-bounce text-center mx-auto font-bold">
						<HashLink smooth to="#content">
							<FaArrowDown className="text-3xl" />
						</HashLink>
					</motion.Typography>
					{/* <motion.div
						initial={{ y: 100 }}
						animate={{ y: 0 }}
						transition={{ repeat: Infinity, duration: 1.4, type: 'spring' }}
					>
						Hello
					</motion.div> */}
				</div>
			</div>
			<Typography align="center" variant="h4" color="secondary" id="content">
				Timeline
			</Typography>
			<MyTimeline id="projects" />
			<br />
			<Experience />


			<br />
			<Typography id="projects" align="center" variant="h4" color="secondary">
				Projects
			</Typography>
			<Projects />

			<div
				style={{ width: '80vw', margin: '30px auto', height: '1px' }}
				className="underline"
			></div>
			<Typography align="center" variant="h4" color="secondary">
				Experience
			</Typography>
			{/* <CodeAlgo /> */}
		</div>
	);
};

export default Home;
