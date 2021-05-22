import React, { useState } from 'react';
import { FaGithub, FaLink } from 'react-icons/fa';

import { projects } from './data';

const ProjectList = () => {
	// const [jobs, setJobs] = useState(data);
	const [value, setValue] = useState(0);

	const { description, live, code, title, dates, image } = projects[value];
	return (
		<div
			style={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<section className="section py-16">
				<div className="title ">
					<h2>Recent Projects</h2>
					<div className="underlined"></div>
				</div>
				<div className="jobs-center">
					{/* btn container */}
					<div className="btn-container">
						{projects.map((project, index) => (
							<button
								key={project.id}
								onClick={() => setValue(index)}
								className={`job-btn ${index === value && 'active-btn'}`}
							>
								{project.title}
							</button>
						))}
					</div>
					<article className="job-info shadow-xl p-3 max-w-sm md:mx-0 mx-auto">
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
				</div>
			</section>
		</div>
	);
};

export default ProjectList;
