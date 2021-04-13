import React, { useState, useEffect } from 'react';
import SingleColorItem from './SingleColorItem';
import Values from 'values.js';
// import rgbToHex from './utils';

const SingleColor = () => {
	const [color, setColor] = useState('');
	const [error, setError] = useState(false);
	const [list, setList] = useState(new Values('#efb6b2').all(10));
	const [errMsg, setErrMsg] = useState('');

	const [alert, setAlert] = useState(false);

	// console.log(rgb, bgc, hexColor);
	useEffect(() => {
		const timeout = setTimeout(() => {
			setAlert(false);
		}, 2000);
		return () => clearTimeout(timeout);
	}, [alert]);

	const handleSubmit = (e) => {
		e.preventDefault();
		try {
			let colors = new Values(color).all(10);
			setList(colors);
			console.log(colors);
		} catch (error) {
			// show user error messgae on
			setErrMsg('Please enter valid color');
			console.log(error);
			setError(true);
			setTimeout(() => setErrMsg(''), 2000);
		}
	};

	return (
		<div className="section">
			<h2 style={{ marginRight: '10px', textAlign: 'center' }}>
				Color Generator
			</h2>
			<div className="underline"></div>
			<section className="container" style={{ margin: '0 auto' }}>
				<form onSubmit={handleSubmit}>
					<input
						type="text"
						value={color}
						onChange={(e) => setColor(e.target.value)}
						placeholder="#f15025"
						className={`${error ? 'error' : null}`}
					/>

					<button className="btn-color" type="submit">
						Submit
					</button>
				</form>
			</section>
			<section
				style={{
					backgroundColor: 'rgba(255, 255, 255,0.5)',
					display: 'flex',
					justifyContent: 'center',
					color: 'red',
					top: 0,
					textAlign: 'center',
					margin: 0,

					height: '20px',
				}}
			>
				<span>{errMsg}</span>
			</section>
			<section className="colors">
				{list.map((color, index) => {
					const hex = color.hex;
					return (
						<SingleColorItem
							key={index}
							{...color}
							index={index}
							hexColor={hex}
						/>
					);
				})}
			</section>
			{/* <section className="colors">
				{list.map((color, index) => {
					const hexColor = color.hex;
					const { rgb, weight } = { ...color };
					const bgc = rgb.join(',');

					const hexValue = `#${hexColor}`;
					const handleCopy = () => {
						setAlert(true);
						navigator.clipboard.writeText(hexValue);
					};
					return (
						<article
							key={index}
							className={`color ${index > 7 && 'color-light'}`}
							style={{ backgroundColor: `rgb(${bgc})` }}
							onClick={handleCopy}
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
				})}
			</section> */}
		</div>
	);
};

export default SingleColor;
