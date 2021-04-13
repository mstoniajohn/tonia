import React, { useState, useEffect } from 'react';
// import rgbToHex from './utils';
import { motion } from 'framer-motion';

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
			className={`color ${index > 7 && 'color-light'}`}
			style={{ backgroundColor: `rgb(${bgc})` }}
			onClick={() => {
				setAlert(true);
				navigator.clipboard.writeText(hexValue);
				// setTimeout(() => setAlert(false), 2000);
			}}
		>
			<p className="percent-value">{weight}%</p>
			<p className="color-value">{hexValue}</p>
			{alert && (
				<motion.p
					className={`alert ${index > 7 && 'alert-light'}`}
					style={{ textAlign: 'center' }}
					animate={{ scale: 1.7 }}
					transition={{ duration: 0.5 }}
				>
					Copied
				</motion.p>
			)}
		</article>
	);
};

export default SingleColorItem;
