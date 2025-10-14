import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import {
	SiLaravel,
	SiReact,
	SiJavascript,
	SiPhp,
	SiMysql,
	SiHtml5,
	SiCss3,
	SiGit,
	SiGithub,
	SiVite,
	SiLinux,
	SiFigma,
	SiBootstrap,
	SiEclipseide,
	SiMongodb,
	SiNodedotjs,
	SiTrello,
	SiPhpmyadmin,
	SiTailwindcss,
	SiPython,
	SiPostman,
	SiDocker,
	SiNpm,
	SiComposer,
} from "react-icons/si";
import { TbBrandVscode, TbSql } from "react-icons/tb";
import { FaJava, FaWindows } from "react-icons/fa";

const techColors = {
	React: "#61DAFB",
	JavaScript: "#F7DF1E",
	HTML: "#E34F26",
	CSS: "#1572B6",
	Vite: "#646CFF",
	Bootstrap: "#7952B3",
	Tailwind: "#06B6D4",
	Laravel: "#FF2D20",
	PHP: "#777BB4",
	Python: "#3776AB",
	Java: "#5382A1",
	"Node.js": "#339933",
	MySQL: "#4479A1",
	MongoDB: "#47A248",
	SQL: "#CC2927",
	phpMyAdmin: "#6C78AF",
	Git: "#F05032",
	GitHub: "#4078C0",
	"VS Code": "#007ACC",
	Eclipse: "#4B5A8C",
	Postman: "#FF6C37",
	Docker: "#2496ED",
	Figma: "#F24E1E",
	Trello: "#0052CC",
	Composer: "#A87E56",
	NPM: "#CB3837",
	Linux: "#FCC624",
	Windows: "#0078D6",
};

const stacks = [
	{
		category: "Frontend",
		items: [
			{ icon: <SiReact />, name: "React" },
			{ icon: <SiJavascript />, name: "JavaScript" },
			{ icon: <SiHtml5 />, name: "HTML" },
			{ icon: <SiCss3 />, name: "CSS" },
			{ icon: <SiVite />, name: "Vite" },
			{ icon: <SiBootstrap />, name: "Bootstrap" },
			{ icon: <SiTailwindcss />, name: "Tailwind" },
		],
	},
	{
		category: "Backend",
		items: [
			{ icon: <SiLaravel />, name: "Laravel" },
			{ icon: <SiPhp />, name: "PHP" },
			{ icon: <SiPython />, name: "Python" },
			{ icon: <FaJava />, name: "Java" },
			{ icon: <SiNodedotjs />, name: "Node.js" },
		],
	},
	{
		category: "Bases de Datos",
		items: [
			{ icon: <SiMysql />, name: "MySQL" },
			{ icon: <SiMongodb />, name: "MongoDB" },
			{ icon: <TbSql />, name: "SQL" },
			{ icon: <SiPhpmyadmin />, name: "phpMyAdmin" },
		],
	},
	{
		category: "Herramientas & Otros",
		items: [
			{ icon: <SiGit />, name: "Git" },
			{ icon: <SiGithub />, name: "GitHub" },
			{ icon: <TbBrandVscode />, name: "VS Code" },
			{ icon: <SiEclipseide />, name: "Eclipse" },
			{ icon: <SiPostman />, name: "Postman" },
			{ icon: <SiDocker />, name: "Docker" },
			{ icon: <SiFigma />, name: "Figma" },
			{ icon: <SiTrello />, name: "Trello" },
			{ icon: <SiComposer />, name: "Composer" },
			{ icon: <SiNpm />, name: "NPM" },
		],
	},
	{
		category: "Sistemas Operativos",
		items: [
			{ icon: <SiLinux />, name: "Linux" },
			{ icon: <FaWindows />, name: "Windows" },
		],
	},
];

const container = {
	hidden: { opacity: 0 },
	show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const item = {
	hidden: { opacity: 0, y: 20 },
	show: { opacity: 1, y: 0 },
};

export default function Stacks() {
	return (
		<section id="stacks" className="section">
			<SectionTitle>Mis Stacks</SectionTitle>

			<motion.div
				className="container card stacks"
				variants={container}
				initial="hidden"
				whileInView="show"
				viewport={{ once: true, amount: 0.2 }}
			>
				{stacks.map((group) => (
					<motion.div
						key={group.category}
						className="stack-group"
						variants={item}
					>
						<motion.h3
							className="stack-category text-gradient-animated"
							initial={{ opacity: 0, y: 24, scale: 0.96 }}
							animate={{ opacity: 1, y: 0, scale: 1 }}
							transition={{
								delay: 0.15,
								duration: 0.8,
								ease: [0.25, 0.1, 0.25, 1],
							}}
						>
							{group.category}
						</motion.h3>

						<div className="stack-grid">
							{group.items.map((tech, i) => (
								<motion.div
									key={tech.name}
									className="stack-item"
									initial={{ opacity: 0, y: 10 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true, amount: 0.6 }}
									transition={{
										duration: 0.35,
										ease: "easeOut",
										delay: i * 0.08,
									}}
									whileHover={{
										scale: 1.08,
										rotate: -3,
										y: -5,
									}}
								>
									<div
										className="stack-icon"
										style={{ color: techColors[tech.name] }}
									>
										{tech.icon}
									</div>
									<span>{tech.name}</span>
								</motion.div>
							))}
						</div>
					</motion.div>
				))}
			</motion.div>
		</section>
	);
}
