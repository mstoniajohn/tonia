import { Typography } from '@material-ui/core';
import React from 'react';

const Footer = () => {
	return (
		<footer className="text-center absolute bottom-0 left-0 right-0">
			<Typography variant="body2" color="textSecondary">
				&copy; Tonia. All rights reserved.
			</Typography>
		</footer>
	);
};

export default Footer;
