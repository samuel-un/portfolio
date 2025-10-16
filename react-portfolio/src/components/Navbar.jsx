import { useEffect, useState } from "react";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

const links = [
	{ href: "#inicio", key: "navbar.home", fallback: "Inicio" },
	{ href: "#about", key: "navbar.about", fallback: "Sobre mí" },
	{ href: "#stacks", key: "navbar.stacks", fallback: "Tecnologías" },
	{ href: "#projects", key: "navbar.projects", fallback: "Proyectos" },
	{ href: "#contact", key: "navbar.contact", fallback: "Contacto" },
];

export default function Navbar() {
	const [scrolled, setScrolled] = useState(false);
	const { t } = useTranslation();

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 10);
		onScroll();
		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	return (
		<nav
			className="navbar"
			aria-label={t("navbar.navAria", {
				defaultValue: "Navegación principal",
			})}
			style={{
				borderBottomColor: scrolled
					? "rgba(255,255,255,.08)"
					: "transparent",
			}}
		>
			<svg width="0" height="0" aria-hidden focusable="false">
				<defs>
					<linearGradient
						id="icon-gradient"
						x1="0"
						y1="0"
						x2="24"
						y2="24"
						gradientUnits="userSpaceOnUse"
					>
						<stop offset="0%" stopColor="#A020F0" />
						<stop offset="100%" stopColor="#EF6370" />
					</linearGradient>
				</defs>
			</svg>

			<div
				className="container"
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
				}}
			>
				<a
					href="#inicio"
					className="brand text-gradient"
					aria-label={t("navbar.homeAria", {
						defaultValue: "Ir al inicio",
					})}
				>
					Samuel UN
				</a>

				<div style={{ display: "flex", alignItems: "center", gap: 16 }}>
					<ul className="nav-links">
						{links.map((l) => (
							<li key={l.href}>
								<a
									href={l.href}
									className={
										l.href === "#inicio" ? "active" : ""
									}
								>
									{t(l.key, { defaultValue: l.fallback })}
								</a>
							</li>
						))}
					</ul>

					{/* Separador visual */}
					<div
						style={{
							width: 1,
							height: 24,
							background: "rgba(255,255,255,.1)",
						}}
					/>

					{/* 🔘 Interruptor iOS de idioma */}
					<div style={{ marginRight: 12 }}>
						<LanguageSwitcher />
					</div>

					{/* Enlaces sociales */}
					<div style={{ display: "flex", gap: 16, fontSize: 22 }}>
						<a
							className="social-link"
							aria-label="GitHub"
							href="https://github.com/samuel-un"
							target="_blank"
							rel="noreferrer"
						>
							<FiGithub />
						</a>
						<a
							className="social-link"
							aria-label="LinkedIn"
							href="https://www.linkedin.com/in/samuel-un/"
							target="_blank"
							rel="noreferrer"
						>
							<FiLinkedin />
						</a>
						<a
							className="social-link"
							aria-label="Email"
							href="mailto:samuelun00@gmail.com"
						>
							<FiMail />
						</a>
					</div>
				</div>
			</div>
		</nav>
	);
}
