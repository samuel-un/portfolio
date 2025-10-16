import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { useTranslation } from "react-i18next";

const sectionFade = {
	hidden: { opacity: 0, y: 24 },
	show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Footer() {
	const { t } = useTranslation();
	const year = new Date().getFullYear();

	return (
		<motion.footer
			id="footer"
			className="section"
			variants={sectionFade}
			initial="hidden"
			whileInView="show"
			viewport={{ once: true, amount: 0.25 }}
			aria-label={t("footer.aria")}
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
							<p className="footer-sub">{t("footer.subtitle")}</p>

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

						{/* Quick navigation */}
						<nav className="footer-col">
							<h3 className="footer-heading">
								{t("footer.sections.title")}
							</h3>
							<ul className="footer-links">
								<li>
									<a href="#inicio">
										{t("footer.sections.home")}
									</a>
								</li>
								<li>
									<a href="#about">
										{t("footer.sections.about")}
									</a>
								</li>
								<li>
									<a href="#stacks">
										{t("footer.sections.stacks")}
									</a>
								</li>
								<li>
									<a href="#projects">
										{t("footer.sections.projects")}
									</a>
								</li>
								<li>
									<a href="#contact">
										{t("footer.sections.contact")}
									</a>
								</li>
							</ul>
						</nav>

						{/* Contact */}
						<div className="footer-col">
							<h3 className="footer-heading">
								{t("footer.contact.title")}
							</h3>
							<ul className="footer-meta">
								<li>
									<a href="mailto:samuelun00@gmail.com">
										samuelun00@gmail.com
									</a>
								</li>
								<li>{t("footer.contact.location")}</li>
								<li>{t("footer.contact.availability")}</li>
							</ul>
						</div>
					</div>

					<div className="footer-bottom">
						<p>{t("footer.bottom", { year })}</p>
						<a
							href="#inicio"
							className="to-top"
							aria-label={t("footer.toTop")}
							title={t("footer.toTop")}
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
