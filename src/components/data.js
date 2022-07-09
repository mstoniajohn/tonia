export const data = [
	{
		id: 'job1',
		title: 'Software Engineer',
		order: 1,
		dates: 'July 2021 - Present',
		duties: [
			'Creating and fixing features for Onaroll App using Python with Django for our backend and Typescript with React in the frontend.',
			'Using Git to collaborate with the engineering team.',
			'Working with the database in Django',
		],
		company: 'Onaroll.co',
	},
	{
		id: 'job2',
		title: 'Web Developer',
		order: 2,
		dates: 'October 2020 - July 2021',
		duties: [
			'Create programs for my teammates to get work done faster with code automation in Excel using VBA to convert cells with data into HTML output for our websites.',
			'Writing serverless functions in AWS Lambda convert audio files in one S3 bucket to text using AWS Transcribe then sending the text file output to be stored in another S3 bucket.',
			'Building small apps for uploading and storing files in s3 with python and Django',
		],
		company: 'Amazon',
	},
	{
		id: 'job3',
		title: 'Web Producer',
		order: 3,
		dates: 'April 2019 - October 2020',
		duties: [
			'Build websites using pure html and css',
			'Write documentation on new technologies that were presented to the team by me.',
			'Manage tasks in Jira.',
		],
		company: '2U',
	},
	{
		id: 'job4',
		title: 'Web Developer / Part-time',
		order: 4,
		dates: 'August 2019 - Present',
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
		live: 'https://www.smelifestyle.org',
		code: 'https://github.com/mstoniajohn/newsmeshop',
		dates: 'January 2021',
		stack: ['React', 'Express'],
		description:
			'This is a MERN stack application that has the functionality to buy products and checkout with paypal. Mongdb is used as the database in this project using Mongoose as an ORM. Redux is also used on the client side for state management.',
	},
	{
		id: 'project3',
		title: 'The Fresh Babe Events',
		order: 3,
		image: '/images/p3.jpeg',
		live: 'https://www.thefreshbabe.com/',
		dates: 'July 2022',
		code: 'https://github.com/mstoniajohn/freshbabe',
		stack: ['NextJS', 'React', 'TailwindCSS', 'Sanity'],

		description:
			'A simple NectJS website that provides crud functionality for my client manage all of their events seamlessly using the Sanity CMS as a backend for data storage. Users can RSVP for any event via email which my client receives instantaneously via EmailJS.',
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
