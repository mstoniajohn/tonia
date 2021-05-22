import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
	return (
		<div
			style={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<section className="section py-16">
				<div className="title">
					<h2>About Me</h2>
					<div className="underlined"></div>
				</div>
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
					<motion.div
						className="mb-2"
						initial={{ x: '-100vw' }}
						animate={{ x: '0' }}
					>
						<h3 className="mb-2 text-2xl">My Coding Journey</h3>
						<p>
							A few years ago, while studying at Baruch College, I took a C++
							coure to satistfy my Math elective requirements. This is where I
							discovered my love for programming and computers.
						</p>
						<p>
							After graduating with a Bachelors in Mathematics, I decided that I
							would teach myself how to code. It honestly took me quite a long
							time to get where I am today but through it all, I am happy that I
							never gave up.
						</p>
						<p>So here we are.</p>
					</motion.div>
					<motion.div
						className="mb-2"
						initial={{ x: '100vw' }}
						animate={{ x: '0' }}
					>
						<h3 className="mb-2 text-2xl">My Passions</h3>
						<p>
							Music is probably one of my biggest passion next to solving
							problems or doing something cool with programming. I love to hike
							and do something called trail running. It's a lot of fun. I love
							many other things but these are the top 3.
						</p>
						<br />
						<br />
					</motion.div>
					<div>
						<h3 className="mb-2 text-2xl">College</h3>
						<p>B.A. in Mathematics from Baruch College 2016</p>

						<div className="">
							<p className="list-item">Combinatorics</p>
							<p className="list-item">Linear Algebra</p>
							<p className="list-item">Advance Calculus I</p>
							<br />
						</div>
					</div>
					<div>
						<h3 className="mb-2 text-2xl">Certificates</h3>
						<div className="list-group">
							<p className="list-item underline">
								<a
									href="https://certificates.cs50.io/6228bf06-33d8-4cf6-9db7-a66eb4761740.png?size=letter"
									target="_blank"
								>
									Harvard CS50 2021{' '}
								</a>
							</p>

							<p className="list-item underline">
								{' '}
								<a href="https://certification.w3schools.com/w3certified.asp?email=toniaroganti@gmail.com">
									{' '}
									W3School - JavaScript 2020
								</a>
							</p>
						</div>
					</div>

					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 1 }}
					>
						<div className=" mb-4">
							<h3 className="mb-3 text-2xl">Skills</h3>
							<div className="mx-auto mb-4 grid grid-cols-2 md:grid-cols-4 gap-2">
								<div className="mr-4 mb-4">
									<i
										className="fab fa-js-square fa-3x align-middle"
										ariahidden="true"
									>
										{' '}
									</i>{' '}
									<span className="h6 align-middle  ml-1">JavaScript</span>
								</div>
								<div className="mr-4 mb-4">
									<i
										className="fab fa-react fa-3x align-middle"
										ariahidden="true"
									>
										{' '}
									</i>{' '}
									<span className="h6 align-middle ml-1">React</span>
								</div>
								<div className="mr-4 mb-4">
									<i
										className="fab fa-vuejs fa-3x align-middle"
										ariahidden="true"
									>
										{' '}
									</i>{' '}
									<span className="h6 align-middle ml-1">Vue</span>
								</div>
								<div className="mr-4 mb-4">
									<i
										className="fab fa-python fa-3x align-middle"
										ariahidden="true"
									>
										{' '}
									</i>{' '}
									<span className="h6 align-middle  ml-1">Python</span>
								</div>
								<div className="mr-4">
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
			</section>
		</div>
	);
}
