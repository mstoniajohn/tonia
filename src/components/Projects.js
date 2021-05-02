import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { projects } from './data';
import { FaGithub, FaLink } from 'react-icons/fa';

const Projects = () => {
	// const [value, setValue] = useState(0);
	// const { description, live, code, title, dates, image } = projects[value];

	return (
		<div className="py-16">
			<div className="title">
				<h2>Projects</h2>
				<div className="underline"></div>
			</div>
			<div className="grid gap-4 grid-cols-3 p-3">
				{projects.map((project) => {
					const { title, image, code, live, id, dates, description } = project;
					return (
						<article key={id} className="job-info shadow p-3 max-w-sm  mx-auto">
							<h3 className="text-center">{title}</h3>
							<img
								className="object-contain h-48 rounded mb-2 mx-auto"
								src={image}
								alt="images"
							/>

							<p className="job-date text-center">{dates}</p>
							<p className="">{description}</p>
							<div className="flex justify-center">
								<a className="text-center" href={live}>
									<FaLink className="text-2xl" />
								</a>{' '}
								<a className="text-center ml-4" href={code}>
									<FaGithub className="text-2xl" />
								</a>
							</div>
						</article>
					);
				})}
			</div>
			{/* <section className="section">
				<div className="title">
					<h2>Projects</h2>
					<div className="underline"></div>
				</div>
				<motion.div
					className="grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 gap-4 mx-auto"
					initial={{ x: '-100vw' }}
					animate={{ x: '0' }}
					transition={{ duration: 1 }}
				>
					<motion.div
						className="rounded-lg p-4 shadow-xl flex flex-col justify-between max-w-xs"
						whileHover={{ scale: 1.1 }}
					>
						<h3 className="cardz-title">Url Shortener</h3>
						<p className="cardz-text">
							An app that creates short urls and uses Mongo via Mongoose for
							database storage and CRUD operations. A user can also see the
							number of clicks each short url has from previous users.
						</p>
						<p>
							<a
								className="link mr-2 font-bold"
								href="https://urlbitz.com/"
								target="_blank"
								rel="noreferrer"
							>
								Live Demo
							</a>

							<a
								className="link font-bold"
								href="https://github.com/mstoniajohn/url-shortener"
								target="_blank"
								rel="noreferrer"
							>
								Code
							</a>
						</p>
					</motion.div>
					<motion.div
						className="rounded-lg p-4 shadow-xl flex flex-col justify-between max-w-xs"
						whileHover={{ scale: 1.1 }}
					>
						<h3 className="cardz-title">Real-time Chat</h3>
						<p className="cardz-text">
							This real-time chat app was created with React and Firebase
							Firestore. The app currently allows users to sign in and send
							messages to anyone that is currently logged in.
						</p>
						<p>
							<a
								className="link mr-2 font-bold"
								href="https://spacechatroom.com/"
								target="_blank"
								rel="noreferrer"
							>
								Live Demo
							</a>

							<a
								className="link font-bold"
								href="https://github.com/mstoniajohn/firechat"
								target="_blank"
								rel="noreferrer"
							>
								Code
							</a>
						</p>
					</motion.div>

					<motion.div
						className="rounded-lg p-4 shadow-xl flex flex-col justify-between max-w-xs"
						whileHover={{ scale: 1.1 }}
					>
						<h3 className="cardz-title">Color Generator</h3>
						<p className="cardz-text">
							Generate 10 hexidecimal colors from 1 hexidecimal value. This
							project was built using React and value.js to generate colors.
						</p>
						<p className="link mr-2 font-bold">
							<Link to="/colors">View Project</Link>
						</p>
					</motion.div>
					<motion.div
						className="rounded-lg p-4 shadow-xl flex flex-col justify-between max-w-xs"
						whileHover={{ scale: 1.1 }}
					>
						<h3>Random Meal</h3>
						<p className="cardz-text">
							I created this app as a project for the #100Days100Projects
							challenge by Florin Pop. This is my version of the app.
						</p>
						<p>
							<a
								className="link mr-2 font-bold"
								href="https://heuristic-stonebraker-53b311.netlify.app/"
								target="_blank"
								rel="noreferrer"
							>
								Live Demo
							</a>

							<a
								className="link font-bold"
								href="https://github.com/mstoniajohn/random-meal-project-challenge"
								target="_blank"
								rel="noreferrer"
							>
								Code
							</a>
						</p>
					</motion.div>
					<motion.div
						className="rounded-lg p-4 shadow-xl flex flex-col justify-between max-w-xs"
						whileHover={{ scale: 1.1 }}
					>
						<h3>Book Storage App</h3>
						<p>
							This book app was presented as my final project for Harvard CS50.
							It allows users to save Books by authors using Local Storage so
							that each user have unique access to there data.
						</p>
						<p>
							<a
								className="link mr-2 font-bold"
								href="https://distracted-goldwasser-a8fe4f.netlify.app/"
								target="_blank"
								rel="noreferrer"
							>
								Live Demo
							</a>

							<a
								className="fw-700 link font-bold"
								href="https://github.com/mstoniajohn/CS50-Project"
								target="_blank"
								rel="noreferrer"
							>
								Code
							</a>
						</p>
					</motion.div>
					<motion.div
						className="rounded-lg p-4 shadow-xl flex flex-col justify-between max-w-xs"
						whileHover={{ scale: 1.1 }}
					>
						<h3>Weather App</h3>
						<p>
							I made this weather app for fun. I always wanted to make one and
							now i Have.
						</p>
						<p>
							<a
								className="link font-bold mr-2"
								href="https://cocky-johnson-a72155.netlify.app/"
								target="_blank"
								rel="noreferrer"
							>
								Live Demo
							</a>

							<a
								className="link font-bold"
								href="https://github.com/mstoniajohn/weatherapp"
								target="_blank"
								rel="noreferrer"
							>
								Code
							</a>
						</p>
					</motion.div>
				</motion.div>
			</section> */}
		</div>
	);
};

export default Projects;
