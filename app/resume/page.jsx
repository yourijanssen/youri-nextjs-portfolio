"use client";

import {
	FaHtml5,
	FaCss3,
	FaJs,
	FaReact,
	FaFigma,
	FaNodeJs,
	FaAngular,
	FaJava,
	FaDiceThree,
	FaNpm,
	FaRegFilePowerpoint,
	FaRegFileWord,
	FaGit,
	FaGitSquare,
	FaGithub,
	FaGitlab, FaFileExcel,
} from "react-icons/fa";

import {
	SiTailwindcss,
	SiNextdotjs,
	SiSpringboot,
	SiSpringsecurity,
	SiSpring,
	SiTypescript,
	SiApachemaven
} from "react-icons/si";

// about data
const about = {
	title: "About me",
	description:
		"Welcome to my portfolio page! My name is Youri Janssen, and I am a junior software developer currently in" +
		" my second and final year of the Associate Degree in Software Development at the Amsterdam University of" +
		" Applied Sciences. Previously, I studied Arts & Economics at HKU, where I completed enrollment but ultimately decided my future lay elsewhere, specifically in programming. My interest in software development blossomed during my final graduation project, where I created a prototype website/webshop for a struggling soccer club alongside a comprehensive business plan. This project introduced me to the world of web development, sparking a passion for programming that led me to enroll at HVA. Today, I consider myself a proficient programmer with a solid grasp of key concepts. I am actively seeking opportunities with a company that values growth and where I can contribute to its success. I am a fast learner and proactive in seeking knowledge through asking questions.",
	info: [
		{
			fieldName: "Name",
			fieldValue: "Youri Janssen",
		},
		{
			fieldName: "Phone",
			fieldValue: "(+31) 6 47 22 39 84",
		},
		{
			fieldName: "Experience",
			fieldValue: "2+ Years",
		},
		{
			fieldName: "Nationality",
			fieldValue: "Dutch",
		},
		{
			fieldName: "Freelance",
			fieldValue: "Available",
		},
		{
			fieldName: "Email",
			fieldValue: "yourijanssen123@gmail.com",
		},
		{
			fieldName: "Languages",
			fieldValue: "English, Dutch, German",
		},
	],
};

// experience data
const experience = {
	icon: "/assets/resume/badge.svg",
	title: "My experience",
	description:
		"Here you can find all the relevant work experiences I've had so far.",
	items: [
		{
			company: "IRP/BIMKeeper: Web-based building management system",
			position: "Full-stack Developer - Internship",
			duration: "December 2023 - Present",
		},
	],
};

// education data
const education = {
	icon: "/assets/resume/cap.svg",
	title: "My education",
	description:
		"Here you can find all the relevant eduction I've had so far.",
	items: [
		{
			institution: "Amsterdam University of Applied Sciences",
			degree: "Software Development - Associate Degree",
			duration: "2022 - 2024",
		},
		{
			institution: "Utrecht School of the Arts",
			degree: "Art & Economics - Bachelor of Arts",
			duration: "2016 - 2021",
			file: "/assets/HBO Bachelor Kunst en Economie (Art and Economics).pdf",
		},
		{
			institution: "Utrecht School of the Arts",
			degree: "Art & Economics - Propaedeutic year",
			duration: "2017",
			file: "/assets/HBO Bachelor Kunst en Economie Propedeuse bachelor (Art and Economics).pdf",
		},
		{
			institution: "College voor Toetsen en Examens",
			degree: "Voorbereidend wetenschappelijk onderwijs (VWO)",
			duration: "2015",
			file: "/assets/Voorbereidend wetenschappelijk onderwijs (staatsexamen).pdf",
		},
		{
			institution: "Scholengemeenschap Oost/Zuidoost",
			degree: "Hoger algemeen voortgezet onderwijs (HAVO)",
			duration: "2009 - 2014",
			file: "/assets/Hoger algemeen voortgezet onderwijs.pdf",
		},

	],
};

// skills data
const skills = {
	title: "My skills",
	description:
		"Here I listed all the relevant skills I've obtained so far, seperated by time periods of 6 months each.",
	year: "2022",
	skillList: [
		{
			icon: <FaHtml5/>,
			name: "html 5",
			year: 2016,
		},
		{
			icon: <FaCss3/>,
			name: "css 3",
			year: 2016,
		},
		{
			icon: <FaJs/>,
			name: "javascript",
			year: 2016,
		},
		{
			icon: <SiTypescript/>,
			name: "Typescript",
			year: 2016,
		},
		{
			icon: <FaReact/>,
			name: "react.js",
			year: 2016,
		},
		{
			icon: <SiNextdotjs/>,
			name: "next.js",
			year: 2017,
		},
		{
			icon: <SiTailwindcss/>,
			name: "tailwind.css",
			year: 2017,
		},
		{
			icon: <FaNodeJs/>,
			name: "node.js",
			year: 2017,
		},
		{
			icon: <FaFigma/>,
			name: "figma",
			year: 2017,
		},
		{
			icon: <FaAngular/>,
			name: "angular",
			year: 2017,
		},
		{
			icon: <FaJava/>,
			name: "java",
			year: 2017,
		},
		{
			icon: <SiApachemaven/>,
			name: "Apache Maven",
			year: 2017,
		},
		{
			icon: <SiSpring/>,
			name: "Spring",
			year: 2017,
		},
		{
			icon: <SiSpringboot/>,
			name: "Spring Boot",
			year: 2017,
		},
		{
			icon: <SiSpringsecurity/>,
			name: "Spring Security",
			year: 2017,
		},
		{
			icon: <VscVscode/>,
			name: "VSCode",
			year: 2018,
		},
		{
			icon: <DiIntellij/>,
			name: "Intellij",
			year: 2018,
		},
		{
			icon: <FaNpm/>,
			name: "NPM",
			year: 2018,
		},
		{
			icon: <FaGitSquare/>,
			name: "Git",
			year: 2018,
		},
		{
			icon: <FaGithub/>,
			name: "GitHub",
			year: 2018,
		},
		{
			icon: <FaGitlab/>,
			name: "GitLab",
			year: 2018,
		},
		{
			icon: <FaRegFilePowerpoint/>,
			name: "Powerpoint",
			year: 2018,
		},
		{
			icon: <FaRegFileWord/>,
			name: "Word",
			year: 2018,
		},
		{
			icon: <FaFileExcel/>,
			name: "Excel",
			year: 2018,
		},
	],
};

import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";

import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";

import {ScrollArea} from "@/components/ui/scroll-area";
import {motion} from "framer-motion";
import Downloads, {DegreeDownload, HKUDownload} from "@/components/Downloads";
import Social from "@/components/Social";
import {VscVscode} from "react-icons/vsc";
import {DiIntellij} from "react-icons/di";

const Resume = () => {
	return (
		<motion.div
			initial={{opacity: 0}}
			animate={{
				opacity: 1,
				transition: {delay: 2.4, duration: 0.4, ease: "easeIn"},
			}}
			className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
		>
			<div className="container mx-auto">
				<Tabs
					defaultValue="experience"
					className="flex flex-col xl:flex-row gap-[60px]"
				>
					<TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
						<TabsTrigger value="experience">Experience</TabsTrigger>
						<TabsTrigger value="education">Education</TabsTrigger>
						<TabsTrigger value="skills">Skills</TabsTrigger>
						<TabsTrigger value="about">About me</TabsTrigger>
					</TabsList>

					{/* content */}
					<div className="min-h-[70vh] w-full">
						{/* experience */}
						<TabsContent value="experience" className="w-full">
							<div className="flex flex-col gap-[30px] text-center xl:text-left">
								<h3 className="text-4xl font-bold">{experience.title}</h3>
								<p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
									{experience.description}
								</p>
								<ScrollArea className="h-[400px]">
									<ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
										{experience.items.map((item, index) => {
											return (
												<li
													key={index}
													className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
												>
													<span className="text-accent">{item.duration}</span>
													<h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
														{item.position}
													</h3>
													<div className="flex items-center gap-3">
														{/* dot */}
														<span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
														<p className="text-white/60">{item.company}</p>
													</div>
												</li>
											);
										})}
									</ul>
								</ScrollArea>
							</div>
						</TabsContent>

						{/* education */}
						<TabsContent value="education" className="w-full">
							<div className="flex flex-col gap-[30px] text-center xl:text-left">
								<h3 className="text-4xl font-bold">{education.title}</h3>
								<p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
									{education.description}
								</p>
								<ScrollArea className="h-[400px]">
									<ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
										{education.items.map((item, index) => {
											return (
												<li
													key={index}
													className="bg-[#232329] h-[300px] py-6 px-10 rounded-xl flex flex-col justify-start items-start lg:items-start gap-1"
												>
													<span className="text-accent">{item.duration}</span>
													<h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
														{item.degree}
													</h3>
													<div className="flex items-center gap-3">
														{/* dot */}
														<span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
														<p className="text-white/60">{item.institution}</p>
													</div>
													<div className="flex flex-col xl:flex-row items-center gap-8">
														<DegreeDownload url={item.file}/>
													</div>
												</li>
											);
										})}
									</ul>
								</ScrollArea>
							</div>
						</TabsContent>

						{/* skills */}
						<TabsContent value="skills" className="w-full h-full">
							<div className="flex flex-col gap-[30px]">
								<div className="flex flex-col gap-[30px] text-center xl:text-left">
									<h3 className="text-4xl font-bold">{skills.title}</h3>
									<p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
										{skills.description}
									</p>
								</div>
								<ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
									{skills.skillList.map((skill, index) => {
										return (
											<li key={index}>
												<TooltipProvider delayDuration={100}>
													<Tooltip>
														<TooltipTrigger
															className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
															<div
																className="text-6xl group-hover:text-accent transition-all duration-300">
																{skill.icon}
															</div>
														</TooltipTrigger>
														<TooltipContent>
															<p className="capitalize">{skill.name}</p>
														</TooltipContent>
													</Tooltip>
												</TooltipProvider>
											</li>
										);
									})}
								</ul>
							</div>
						</TabsContent>

						{/* about */}
						<TabsContent
							value="about"
							className="w-full text-center xl:text-left"
						>
							<div className="flex flex-col gap-[30px]">
								<h3 className="text-4xl font-bold">{about.title}</h3>
								<p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
									{about.description}
								</p>
								<ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
									{about.info.map((item, index) => {
										return (
											<li
												key={index}
												className="flex items-center justify-center xl:justify-start gap-4"
											>
												<span className="text-white/60">{item.fieldName}</span>
												<span className="text-xl">{item.fieldValue}</span>
											</li>
										);
									})}
								</ul>
							</div>
						</TabsContent>
					</div>
				</Tabs>
			</div>
		</motion.div>
	);
};

export default Resume;
