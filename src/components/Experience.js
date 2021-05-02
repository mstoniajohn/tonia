import React, { useState } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';

import { data } from './data';

const Experience = () => {
	// const [jobs, setJobs] = useState(data);
	const [value, setValue] = useState(0);

	const { company, dates, duties, title } = data[value];
	return (
		<div
			style={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<section className="section">
				<div className="title">
					<h2>Experience</h2>
					<div className="underlined"></div>
				</div>
				<div className="jobs-center">
					{/* btn container */}
					<div className="btn-container">
						{data.map((job, index) => (
							<button
								key={job.id}
								onClick={() => setValue(index)}
								className={`job-btn ${index === value && 'active-btn'}`}
							>
								{job.company}
							</button>
						))}
					</div>
					<article className="job-info">
						<h3>{title}</h3>
						<h4>{company}</h4>
						<p className="job-date">{dates}</p>
						{duties.map((duty, index) => (
							<div key={index} className="job-desc">
								<FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
								<p>{duty}</p>
							</div>
						))}
					</article>
				</div>
			</section>
		</div>
	);
};

export default Experience;
