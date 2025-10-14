import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const sectionFade = {
	hidden: { opacity: 0, y: 24 },
	show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Footer() {
	const year = new Date().getFullYear();

	return (
		<motion.footer
			id="footer"
			className="section"
			variants={sectionFade}
			initial="hidden"
			whileInView="show"
			viewport={{ once: true, amount: 0.25 }}
		>
			<div className="container">
				<div className="footer-card card">
					<div className="footer-grid">
						{/* Brand */}
						<div className="footer-col">
							<a
								href="#inicio"
								className="footer-brand text-gradient-animated"
							>
								Samuel Utrilla
							</a>
							<p className="footer-sub">
								Desarrollador Full-Stack · Sevilla, España
							</p>

							<div className="footer-social">
								<a
									className="social-link"
									href="https://github.com/samuel-un"
									target="_blank"
									rel="noreferrer"
									aria-label="GitHub"
									title="GitHub"
								>
									<FiGithub />
								</a>
								<a
									className="social-link"
									href="https://www.linkedin.com/in/samuel-un/"
									target="_blank"
									rel="noreferrer"
									aria-label="LinkedIn"
									title="LinkedIn"
								>
									<FiLinkedin />
								</a>
								<a
									className="social-link"
									href="mailto:samuelun00@gmail.com"
									aria-label="Email"
									title="Email"
								>
									<FiMail />
								</a>
							</div>
						</div>

						{/* Navegación rápida */}
						<nav className="footer-col">
							<h3 className="footer-heading">Secciones</h3>
							<ul className="footer-links">
								<li>
									<a href="#inicio">Inicio</a>
								</li>
								<li>
									<a href="#about">Sobre mí</a>
								</li>
								<li>
									<a href="#stacks">Tecnologías</a>
								</li>
								<li>
									<a href="#projects">Mis Proyectos</a>
								</li>
								<li>
									<a href="#contact">Contáctame</a>
								</li>
							</ul>
						</nav>

						{/* Contacto */}
						<div className="footer-col">
							<h3 className="footer-heading">Contacto</h3>
							<ul className="footer-meta">
								<li>
									<a href="mailto:samuelun00@gmail.com">
										samuelun00@gmail.com
									</a>
								</li>
								<li>Sevilla, España</li>
								<li>
									Abierto a oportunidades laborales como
									Desarrollador Full-Stack Junior
								</li>
							</ul>
						</div>
					</div>

					<div className="footer-bottom">
						<p>
							© {year} <strong>Samuel Utrilla</strong> · Hecho con
							React + Vite · Deploy en Vercel
						</p>
						<a
							href="#inicio"
							className="to-top"
							aria-label="Volver arriba"
							title="Volver arriba"
						>
							<svg viewBox="0 0 24 24" aria-hidden="true">
								<path d="M12 19V5" />
								<path d="M5 12l7-7 7 7" />
							</svg>
						</a>
					</div>
				</div>
			</div>
		</motion.footer>
	);
}
