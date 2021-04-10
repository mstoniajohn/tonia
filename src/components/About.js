import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
	return (
		<div className="container mt-5 " style={{ minHeight: '100%' }}>
			<h2 className="mb-4 text-center">About Me</h2>
			<motion.div
				className="mb-2"
				initial={{ x: '-100vw' }}
				animate={{ x: '0' }}
			>
				<h3 className="mb-2 text-left">My Coding Journey</h3>
				<p>
					A few years ago, while studying at Baruch College, I took a C++ coure
					to satistfy my Math elective requirements. This is where I discovered
					my love for programming and computers.
				</p>
				<p>
					After graduating with a Bachelors in Mathematics, I decided that I
					would teach myself how to code. It honestly took me quite a long time
					to get where I am today but through it all, I am happy that I never
					gave up.
				</p>
				<p>So here we are.</p>
			</motion.div>
			<motion.div
				className="mb-2"
				initial={{ x: '100vw' }}
				animate={{ x: '0' }}
			>
				<h3 className="mb-2 text-left">My Passions</h3>
				<p>
					Music is probably one of my biggest passion next to solving problems
					or doing something cool with programming. I love to hike and do
					something called trail running. It's a lot of fun. I love many other
					things but these are the top 3.
				</p>
				<br />
				<br />
			</motion.div>

			<motion.div
				className="row"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 1 }}
			>
				<div className="col-sm-6 mb-4 p-2">
					<div className="mb-4">
						<h2 className="mb-2 text-left">College</h2>
						<p>B.A. in Mathematics from Baruch College 2016</p>

						<div className="list-group">
							<span className="list-item">Combinatorics</span>
							<span className="list-item">Linear Algebra</span>
							<span className="list-item">Advance Calculus I</span>
							<br />
						</div>
					</div>
					<h3 className="mb-2 text-left">Certificates</h3>
					<div className="list-group">
						<span className="list-item">Harvard CS50 2021</span>

						<span className="list-item">W3School - JavaScript 2020</span>
					</div>
				</div>
				<div className="col-sm-6 mb-4 p-2">
					<h3 className="mb-3 text-left">Skills</h3>
					<div className="row mx-auto mb-4">
						<div className="col-6 mb-3 d-flex align-items-center">
							<i
								className="fas fa-database fa-3x align-middle"
								ariahidden="true"
							>
								{' '}
							</i>{' '}
							<span className="h6 align-middle ml-1">React</span>
						</div>
						<div className="col-6 mb-3 d-flex align-items-center">
							<i
								className="fab fa-js-square fa-3x align-middle"
								ariahidden="true"
							>
								{' '}
							</i>{' '}
							<span className="h6 align-middle  ml-1">JavaScript</span>
						</div>
						<div className="col-6 mb-3 d-flex align-items-center">
							<i className="fab fa-python fa-3x align-middle" ariahidden="true">
								{' '}
							</i>{' '}
							<span className="h6 align-middle  ml-1">Python</span>
						</div>
						<div className="col-6 mb-3 d-flex align-items-center">
							<i
								className="fab fa-css3-alt fa-3x align-middle"
								ariahidden="true"
							>
								{' '}
							</i>{' '}
							<span className="h6 align-middle  ml-1">CSS &amp; HTML</span>
						</div>
					</div>
				</div>
			</motion.div>
		</div>
	);
}
