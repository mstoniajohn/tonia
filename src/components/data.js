export const data = [
	{
		id: 'job1',
		title: 'Web Developer',
		order: 3,
		dates: 'October 2020 - Present',
		duties: [
			'Create programs for my teammates to get work done faster with code automation in Excel using VBA to convert cells with data into HTML output for our websites.',
			'Writing serveless functions in AWS Lambda convert audio files in one S3 bucket to text using AWS Transcribe then sending the text file output to be stored in another S3 bucket.',
			'Building small apps for uploading and storing files in s3 with python and Django',
		],
		company: 'Amazon',
	},
	{
		id: 'job2',
		title: 'Web Producer',
		order: 2,
		dates: 'April 2019 - October 2020',
		duties: [
			'Build websites using pure html and css',
			'Write documentation on new technologies that were presented to the team by me.',
			'Manage tasks in Jira.',
		],
		company: '2U',
	},
	{
		id: 'job3',
		title: 'Web Developer / Part-time',
		order: 3,
		dates: 'Auguts 2019 - Present',
		duties: [
			'Setting DNS and hosting for my client and configuring mail servers.',
			'Creating website pages within Wordpress',
			'Manage tasks in Jira.',
		],
		company: 'Rockhouse',
	},
];
export const projects = [
	{
		id: 'project1',
		title: 'MERN E-Commerce',
		image: '/images/mern.jpg',
		order: 1,
		live: 'https://smeproshop.herokuapp.com/',
		code: '#',
		dates: 'January 2021',
		description:
			'Setting DNS and hosting for my client and configuring mail servers.',
	},
	{
		id: 'project2',
		title: 'Url Shortener',
		order: 2,
		image: '/images/mern.png',
		live: '',
		dates: 'January 2021',
		code: '',
		description:
			'An app that creates short urls and uses Mongo via Mongoose for database storage and CRUD operations. A user can also see the number of clicks each short url has from previous users.',
	},
	{
		id: 'project3',
		title: 'Color Generator',
		order: 3,
		dates: 'March 2021',
		image: '/images/colors.jpg',

		live: '/colors',
		code: '',
		description:
			'Generate 10 hexidecimal colors from 1 hexidecimal value. This project was built using React and value.js to generate colors.',
	},
	{
		id: 'project4',
		title: 'SRT Converter',
		order: 4,
		dates: 'April 2021',
		live: 'https://transcript-lemon.vercel.app/',
		image: '/images/mern.png',
		code: '',
		description:
			'I created this tool with inspiration from Yash Blog that turns AWS transcribe JSON output into SRT format',
	},
	// {
	// 	id: 'project5',
	// 	title: 'Color Generator',
	// 	order: 5,
	// 	dates: 'March 2021',
	// 	live: '/colors',
	// 	code: '',
	// 	description:
	// 		'Generate 10 hexidecimal colors from 1 hexidecimal value. This project was built using React and value.js to generate colors.',
	// },
];

// export default { data, projects };
