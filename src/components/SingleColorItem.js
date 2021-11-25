import React, { useState, useEffect } from 'react';
// import rgbToHex from './utils';
import { motion } from 'framer-motion';
import { Typography } from '@material-ui/core';

const SingleColorItem = ({ rgb, weight, index, hexColor }) => {
	const [alert, setAlert] = useState(false);
	const bgc = rgb.join(',');

	// const hex = rgbToHex(...rgb);
	const hexValue = `#${hexColor}`;

	console.log(rgb, bgc, hexColor);
	useEffect(() => {
		const timeout = setTimeout(() => {
			setAlert(false);
		}, 2000);
		return () => clearTimeout(timeout);
	}, [alert]);
	return (
		<article
			className={`p-2  ${index > 10 ? 'text-white' : 'text-gray-600'}`}
			style={{ backgroundColor: `rgb(${bgc})` }}
			onClick={() => {
				setAlert(true);
				navigator.clipboard.writeText(hexValue);
				// setTimeout(() => setAlert(false), 2000);
			}}
		>
			<Typography variant="subtitle1" color="default" className="percent-value">
				{weight}%
			</Typography>
			<Typography variant="subtitle2" className="color-value">
				{hexValue}
			</Typography>
			{alert && (
				<motion.Typography
					variant="caption"
					className={`alert ${index > 7 && 'alert-light'}`}
					style={{ textAlign: 'center' }}
					animate={{ scale: 1.7 }}
					transition={{ duration: 0.5 }}
				>
					Copied
				</motion.Typography>
			)}
		</article>
	);
};

export default SingleColorItem;
