import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Filter1Icon from '@material-ui/icons/Filter1';
import {
	Filter2Outlined,
	Filter3Sharp,
	Filter4Outlined,
} from '@material-ui/icons';
const useStyles = makeStyles((theme) => ({
	paper: {
		padding: '6px 16px',
	},
	secondaryTail: {
		backgroundColor: theme.palette.secondary.main,
	},
}));

export default function MyTimeline() {
	const classes = useStyles();

	return (
		<Timeline align="alternate">
			<TimelineItem>
				<TimelineOppositeContent>
					<Typography variant="body2" color="textSecondary">
						2021
					</Typography>
				</TimelineOppositeContent>
				<TimelineSeparator>
					<TimelineDot color="primary" variant="outlined">
						<Filter4Outlined />
					</TimelineDot>

					<TimelineConnector />
				</TimelineSeparator>
				<TimelineContent>
					<Paper elevation={3} className={classes.paper}>
						<Typography variant="subtitle1" component="h1">
							 Onaroll  - Software Engineer 
						</Typography>
						<Typography variant="caption" color="textSecondary">
							July 2021 - present
						</Typography>
					</Paper>
				</TimelineContent>
			</TimelineItem>
			<TimelineItem>
				<TimelineOppositeContent>
					<Typography variant="body2" color="textSecondary">
						2020
					</Typography>
				</TimelineOppositeContent>
				<TimelineSeparator>
					<TimelineDot color="primary" variant="default">
						<Filter3Sharp />
					</TimelineDot>
					<TimelineConnector className={classes.secondaryTail} />
					<TimelineConnector />
				</TimelineSeparator>
				<TimelineContent>
					<Paper elevation={3} className={classes.paper}>
						<Typography variant="subtitle1" component="h1">
							Amazon - Web Devloper
						</Typography>
						<Typography variant="caption" color="textSecondary">
							October 2020 - July 2021
						</Typography>
					</Paper>
				</TimelineContent>
			</TimelineItem>
			<TimelineItem>
				<TimelineOppositeContent>
					<Typography variant="body2" color="textSecondary">
						2019
					</Typography>
				</TimelineOppositeContent>
				<TimelineSeparator>
					<TimelineDot color="primary">
						<Filter2Outlined />
					</TimelineDot>
					<TimelineConnector className={classes.secondaryTail} />
				</TimelineSeparator>
				<TimelineContent>
					<Paper elevation={3} className={classes.paper}>
						<Typography variant="subtitle1" component="h1">
							2U Inc - Web Producer
						</Typography>
						<Typography variant="caption" color="textSecondary">
							April 2019 - October 2020
						</Typography>
					</Paper>
				</TimelineContent>
			</TimelineItem>
			<TimelineItem>
				<TimelineOppositeContent>
					<Typography variant="body2" color="textSecondary">
						2018
					</Typography>
				</TimelineOppositeContent>
				<TimelineSeparator>
					<TimelineDot color="primary">
						<Filter1Icon />
					</TimelineDot>
				</TimelineSeparator>
				<TimelineContent>
					<Paper elevation={3} className={classes.paper}>
						<Typography variant="subtitle1" component="h1">
							Rockhouse - Web Developer
						</Typography>
						<Typography variant="caption" color="textSecondary">
							August 2018 - Present
						</Typography>
					</Paper>
				</TimelineContent>
			</TimelineItem>
		</Timeline>
	);
}
