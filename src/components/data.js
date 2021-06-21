export const data = [
	{
		id: 'job1',
		title: 'Web Developer',
		order: 3,
		dates: 'October 2020 - Present',
		duties: [
			'Create programs for my teammates to get work done faster with code automation in Excel using VBA to convert cells with data into HTML output for our websites.',
			'Writing serverless functions in AWS Lambda convert audio files in one S3 bucket to text using AWS Transcribe then sending the text file output to be stored in another S3 bucket.',
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
		title: 'Rockhouse Hotel',
		image:
			'https://www.rockhouse.com/wp-content/uploads/2020/08/RH_Slideshow_Desktop_1920x823_B_Pool-1.jpg',
		order: 1,
		live: 'https://www.rockhouse.com/',
		code: 'https://www.rockhouse.com/',
		dates: 'August 2019',
		stack: ['Wordpress', 'Javascript'],
		description:
			'Rockhouse Hotel is one of the projects I built working as a freelance web developer. The design was presented by the Rockhouse team and I implemented build out the entire site from scratch, including setting up Domain and DNS configuration.',
	},
	{
		id: 'project2',
		title: 'Online Store',
		image: '/images/shop.jpg',
		order: 2,
		live: 'https://newsmeshop.herokuapp.com/',
		code: 'https://github.com/mstoniajohn/newsmeshop',
		dates: 'January 2021',
		stack: ['React', 'Express'],
		description:
			'This is a MERN stack application that has the functionality to buy products and checkout with paypal. Mongdb is used as the database in this project using Mongoose as an ORM. Redux is also used on the client side for state management.',
	},
	{
		id: 'project3',
		title: 'Url Shortener',
		order: 3,
		image: '/images/mern.jpg',
		live: 'https://urlbitz.com/',
		dates: 'January 2021',
		code: 'https://github.com/mstoniajohn/url-shortener',
		stack: ['NodeJS', 'Express'],

		description:
			'An app that creates short urls and uses Mongo via Mongoose for database storage and CRUD operations. A user can also see the number of clicks each short url has from previous users.',
	},
	{
		id: 'project4',
		title: 'Realtime Chat',
		order: 4,
		dates: 'Feb 2021',
		live: 'https://spacechatroom.com/',
		image: '/images/chat.png',
		code: 'https://github.com/mstoniajohn/firechat',
		stack: ['React', 'Firebase'],

		description:
			'This application was built using Firebase for authentication users and Cloud Firestore for storing users message data. A user can login with google and write messages to the chat and read their messages instantly in the chat.',
	},

	{
		id: 'project5',
		title: 'SRT Converter',
		order: 5,
		dates: 'April 2021',
		live: 'https://transcript-lemon.vercel.app/',
		image: '/images/srt.jpg',
		code: 'https://github.com/mstoniajohn/transcript',
		stack: ['React'],

		description:
			'I created this tool with inspiration from Yash Blog that turns AWS transcribe JSON output into SRT format',
	},

	{
		id: 'project6',
		title: 'Colors',
		order: 6,
		dates: 'March 2021',
		image: '/images/colors.jpg',

		live: '/colors',
		code: '#',
		stack: ['React'],
		description:
			'Generate 10 hexidecimal colors from 1 hexidecimal value. This project was built using React and value.js to generate colors.',
	},
];

// export default { data, projects };
