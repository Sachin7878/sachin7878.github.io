/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
	animated: true, // set to false to use static SVG
};

const greeting = {
	username: "Sachin Sheelavant",
	title: "Hi all, I'm Sachin",
	subTitle: emoji(
		"A passionate Full Stack Software Developer 🚀 having an interest of building Web applications with  Angular / Reactjs / Nodejs / Express / Spring Boot and some other cool libraries and frameworks."
	),
	resumeLink:
		"https://chavhb5-my.sharepoint.com/:b:/g/personal/ck889_13_a1p_me/EekQABiVcgZNsusHxZa7j5cBkZxyJkztEDxF7y4v34Ui3w?e=lWvxDT",
	displayGreeting: true, // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
	github: "https://github.com/Sachin7878",
	linkedin: "https://www.linkedin.com/in/sachin-sheelavant/",
	gmail: "sheelavantsachin@gmail.com",
	facebook: "https://www.facebook.com/sachin.sheelavant40",
	stackoverflow: "https://stackoverflow.com/users/12075299/sachin-sheelavant",
	xdadevelopers: "https://forum.xda-developers.com/m/sachin7843.5191241/",
	codepen: "https://codepen.io/sachin-sheelavant",
	// Instagram and Twitter are also supported in the links!
	display: true, // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
	title: "What I do",
	subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
	skills: [
		emoji(
			"⚡ Develop highly interactive Front end / User Interfaces for your web applications"
		),
		emoji("⚡ Develop highly scalable backend with database"),
		emoji(
			"⚡ Integration of third party services such as Firebase / AWS / Azure"
		),
	],

	/* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

	softwareSkills: [
		{
			skillName: "html-5",
			fontAwesomeClassname: "fab fa-html5",
		},
		{
			skillName: "css3",
			fontAwesomeClassname: "fab fa-css3-alt",
		},
		{
			skillName: "sass",
			fontAwesomeClassname: "fab fa-sass",
		},
		{
			skillName: "JavaScript",
			fontAwesomeClassname: "fab fa-js",
		},
		{
			skillName: "Java",
			fontAwesomeClassname: "fab fa-java",
		},
		{
			skillName: "angular",
			fontAwesomeClassname: "fab fa-angular",
		},
		{
			skillName: "reactjs",
			fontAwesomeClassname: "fab fa-react",
		},
		{
			skillName: "nodejs",
			fontAwesomeClassname: "fab fa-node",
		},
		{
			skillName: "npm",
			fontAwesomeClassname: "fab fa-npm",
		},
		{
			skillName: "yarn",
			fontAwesomeClassname: "fab fa-yarn",
		},
		{
			skillName: "sql-database",
			fontAwesomeClassname: "fas fa-database",
		},
		{
			skillName: "azure",
			fontAwesomeClassname: "fab fa-microsoft",
		},
		{
			skillName: "aws",
			fontAwesomeClassname: "fab fa-aws",
		},
		{
			skillName: "firebase",
			fontAwesomeClassname: "fas fa-fire",
		},
		{
			skillName: "python",
			fontAwesomeClassname: "fab fa-python",
		},
		{
			skillName: "docker",
			fontAwesomeClassname: "fab fa-docker",
		},
		{
			skillName: "jenkins",
			fontAwesomeClassname: "fab fa-jenkins",
		},
	],
	display: true, // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
	display: true, // Set false to hide this section, defaults to true
	schools: [
		{
			schoolName: "IACSD, Pune (Affiliated to CDAC-ACTS, Pune)",
			logo: require("./assets/images/iacsd.png"),
			subHeader: "PG Diploma in Advance Computing",
			duration: "Feb 2020 - Feb 2021",
			desc:
				"Learnt C, C++, Java SE, J2EE, Operating System, MEAN Stack, ASP.NET",
			descBullets: [
				"Ranked 4th in the class. Took courses on Ansible, Docker, Linux, etc.",
			],
		},
		{
			schoolName: "SPPU, Pune",
			logo: require("./assets/images/Savitribai-Phule-Pune-University.png"),
			subHeader: "Bachelors of Engineering in Civil Engineering",
			duration: "August 2015 - May 2018",
		},
	],
};

// Your top 3 proficient stacks/tech experience

const techStack = {
	viewSkillBars: true, //Set it to true to show Proficiency Section
	experience: [
		{
			Stack: "Frontend", //Insert stack or technology you have experience in
			progressPercentage: "70%", //Insert relative proficiency in percentage
		},
		{
			Stack: "Backend",
			progressPercentage: "85%",
		},
		{
			Stack: "Programming",
			progressPercentage: "80%",
		},
	],
	displayCodersrank: false, // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
	display: false, //Set it to true to show workExperiences Section
	experience: [
		{
			role: "Software Engineer",
			company: "Facebook",
			companylogo: require("./assets/images/facebookLogo.png"),
			date: "June 2018 – Present",
			desc:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
			descBullets: [
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
			],
		},
		{
			role: "Front-End Developer",
			company: "Quora",
			companylogo: require("./assets/images/quoraLogo.png"),
			date: "May 2017 – May 2018",
			desc:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		},
		{
			role: "Software Engineer Intern",
			company: "Airbnb",
			companylogo: require("./assets/images/airbnbLogo.png"),
			date: "Jan 2015 – Sep 2015",
			desc:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		},
	],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
	githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
	githubUserName: "Sachin7878", // Change to your github username to view your profile in Contact Section.
	showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
	display: false, // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
	title: "Full Stack & Mini Projects",
	subtitle: "SOME PROJECTS I MADE WHILE LEARNING THE TECHNOLOGIES",
	projects: [
		{
			image: require("./assets/images/angular-js-logo.png"),
			projectName: "Food Ordering System",
			projectDesc:
				"Full Stack Online Food Ordering System with Spring Boot REST API with JWT, Angular with Angular Material for Frontend, MySQL for Database. Completely Deployed on AWS Elastic BeanStalk & RDS",
			footerLink: [
				{
					name: "Visit Website",
					url: "http://gg.gg/foodman",
				},
				//  you can add extra buttons here.
			],
		},
		{
			image: require("./assets/images/1280px-React-icon.png"),
			projectName: "React COVID Tracker",
			projectDesc:
				"Basic React App with Graphs and Charts to visualize COVID Cases across world using Public API",
			footerLink: [
				{
					name: "Visit Website",
					url: "https://sachin7878.github.io/react-coronatracker/",
				},
				//  you can add extra buttons here.
			],
		},
		{
			image: require("./assets/images/1280px-React-icon.png"),
			projectName: "React Currency Converter",
			projectDesc:
				"Basic React app to see exchange rates for currency using Public API",
			footerLink: [
				{
					name: "Visit Website",
					url: "https://sachin7878.github.io/react-currencyconverter/",
				},
				//  you can add extra buttons here.
			],
		},
	],
	display: true, // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
	title: emoji("Achievements And Certifications 🏆 "),
	subtitle:
		"Achievements, Certifications and Some Cool Stuff that I have done !",

	achievementsCards: [
		{
			title: "Microsoft AZ-900: Azure Fundamentals",
			subtitle: "Basic cloud concepts and Azure Services Introduction",
			image: require("./assets/images/1_714NZMb5H3_AAIMH6krQyA.png"),
			footerLink: [
				{
					name: "Certification",
					url:
						"https://www.youracclaim.com/badges/d1fa1ac2-0c46-4424-9b55-38d3d7394981",
				},
			],
		},
		{
			title: "MongoDB M103: Basic Cluster Administration",
			subtitle:
				"Basic MongoDB Concepts along with maintaining small cluster introduction",
			image: require("./assets/images/67a5dadc8b67a5629ff02414169545a068fb40ba.png"),
			footerLink: [
				{
					name: "Certification",
					url:
						"https://university.mongodb.com/course_completion/5e6b2a4a-ec8e-4655-8dfd-c1203f3ec482",
				},
			],
		},

		{
			title: "Front End Libraries",
			subtitle: "Basic React, Redux, Bootstrap, Sass Course",
			image: require("./assets/images/fcc.png"),
			footerLink: [
				{
					name: "Certification",
					url:
						"https://www.freecodecamp.org/certification/sachins/front-end-libraries",
				},
			],
		},
		{
			title: "Terraform for AWS",
			subtitle: "Introductory course to using Infrastructure as a Code (IaaC)",
			image: require("./assets/images/udemy.png"),
			footerLink: [
				{
					name: "Certification",
					url: "https://www.udemy.com/certificate/UC-M422XRKR/",
				},
			],
		},
		{
			title: "Jenkins for Beginner",
			subtitle: "Introductory course for Jenkins to crete CI/CD pipelines.",
			image: require("./assets/images/udemy.png"),
			footerLink: [
				{
					name: "Certification",
					url: "https://www.udemy.com/certificate/UC-TAEX9X6J/",
				},
			],
		},
		{
			title: "JavaScript Algorithms and Data Structures",
			subtitle: "Basic JavaScript and data structures",
			image: require("./assets/images/fcc.png"),
			footerLink: [
				{
					name: "Certification",
					url:
						"https://www.freecodecamp.org/certification/sachins/javascript-algorithms-and-data-structures",
				},
			],
		},
		{
			title: "Docker for the Absolute Beginner",
			subtitle:
				"Introductory course to containers and Docker, Dockerfile, Docker-Compose",
			image: require("./assets/images/kk.jpg"),
			footerLink: [
				{
					name: "Certification",
					url:
						"https://www.freecodecamp.org/certification/sachins/javascript-algorithms-and-data-structures",
				},
			],
		},
	],
	display: true, // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
	title: "Blogs",
	subtitle:
		"With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

	blogs: [
		{
			url:
				"https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
			title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
			description:
				"Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?",
		},
		{
			url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
			title: "Why REACT is The Best?",
			description:
				"React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies.",
		},
	],
	display: false, // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
	title: "TALKS",
	subtitle: emoji(
		"I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
	),

	talks: [
		{
			title: "Build Actions For Google Assistant",
			subtitle: "Codelab at GDG DevFest Karachi 2019",
			slides_url: "https://bit.ly/saadpasta-slides",
			event_url: "https://www.facebook.com/events/2339906106275053/",
		},
	],
	display: false, // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
	title: emoji("Podcast 🎙️"),
	subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

	// Please Provide with Your Podcast embeded Link
	podcast: [
		"https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo",
	],
	display: false, // Set false to hide this section, defaults to true
};

const contactInfo = {
	title: emoji("Contact Me ☎️"),
	subtitle:
		"Discuss a project or just want to say hi? My Inbox is open for all.",
	number: "+91-8446651582",
	emailAddress: "sheelavantsachin@gmail.com",
};

// Twitter Section

const twitterDetails = {
	userName: "twitter", //Replace "twitter" with your twitter username without @
	display: false, // Set true to display this section, defaults to false
};

export {
	illustration,
	greeting,
	socialMediaLinks,
	skillsSection,
	educationInfo,
	techStack,
	workExperiences,
	openSource,
	bigProjects,
	achievementSection,
	blogSection,
	talkSection,
	podcastSection,
	contactInfo,
	twitterDetails,
};
