import { Box, Button, Grid, Typography } from '@material-ui/core';
import { ArrowRight } from '@material-ui/icons';
import React, { useState } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';

import { data } from './data';

const Experience = () => {
	// const [jobs, setJobs] = useState(data);
	const [value, setValue] = useState(0);

	const { company, dates, duties, title } = data[value];
	return (
		<Box className="mx-auto max-w-lg">
			<Grid container spacing={1}>
				<Grid xs={3} md={12} item spacing={1}>
					{data.map((job, index) => (
						<Button
							key={job.id}
							variant="text"
							color={`${index === value ? 'primary' : 'secondary'}`}
							onClick={() => setValue(index)}
							// className={`text-gray-200 ${index === value && 'text-red-300'}`}
						>
							{job.company}
						</Button>
					))}
				</Grid>
				<Grid item xs={9} md={12} spacing={1}>
					<Typography variant="h6">{title}</Typography>
					<Typography variant="h6" color="textSecondary">
						{company}
					</Typography>
					<Typography
						variant="subtitle1"
						color="textSecondary"
						className="job-date"
					>
						{dates}
					</Typography>
					{duties.map((duty, index) => (
						<div key={index} className="flex">
							<ArrowRight />
							<Typography variant="body2">{duty}</Typography>
						</div>
					))}
				</Grid>
			</Grid>
		</Box>
	);
};

export default Experience;
