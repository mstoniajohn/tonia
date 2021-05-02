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
			<section className="section">
				<div className="title pt-4">
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
					<article className="job-info">
						<h3>{title}</h3>
						<img
							className="object-contain h-48 mb-2"
							src={image}
							alt="images"
						/>

						<p className="job-date">{dates}</p>
						<p>{description}</p>
						<div className="flex">
							<a className="underline" href={live}>
								<FaLink />
							</a>{' '}
							<a className="underline ml-4" href={code}>
								<FaGithub />
							</a>
						</div>
					</article>
				</div>
			</section>
		</div>
	);
};

export default ProjectList;
