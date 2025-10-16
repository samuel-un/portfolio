import { motion } from "framer-motion";
import Button from "./UI/Button";
import { useTranslation } from "react-i18next";

const AVATAR_URL =
	"https://res.cloudinary.com/dgbngcvkl/image/upload/v1759943070/Foto-Perfil_cbibmq.png";

export default function Hero() {
	const { t } = useTranslation();

	return (
		<section
			id="inicio"
			className="section"
			style={{ paddingTop: "calc(96px + var(--nav-h))" }}
			aria-labelledby="hero-title"
		>
			<div
				className="container"
				style={{
					display: "grid",
					gridTemplateColumns: "1.1fr .9fr",
					alignItems: "center",
					gap: "min(6vw, 52px)",
				}}
			>
				<div>
					<motion.h1
						id="hero-title"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
					>
						{t("hero.title")}
					</motion.h1>

					<motion.p
						className="subtitle text-gradient-animated"
						initial={{ opacity: 0, y: 24, scale: 0.96 }}
						animate={{ opacity: 1, y: 0, scale: 1 }}
						transition={{
							delay: 0.25,
							duration: 0.8,
							ease: [0.25, 0.1, 0.25, 1],
						}}
					>
						{t("hero.subtitle")}
					</motion.p>

					<motion.p
						className="mt-4"
						style={{ maxWidth: "60ch", color: "#C7CAD1" }}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.25, duration: 0.6 }}
					>
						{t("hero.description")}
					</motion.p>

					<motion.div
						className="btn-row mt-6"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.35 }}
					>
						<Button
							href="/Samuel_Utrilla-CV.pdf"
							download
							target="_blank"
							rel="noopener noreferrer"
							variant="primary"
						>
							{t("hero.cta.cv")}
						</Button>

						<Button variant="ghost" href="#projects">
							{t("hero.cta.projects")}
						</Button>
					</motion.div>
				</div>

				<motion.div
					className="avatar-wrap"
					initial={{ opacity: 0, scale: 0.92 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ delay: 0.15, duration: 0.6 }}
					aria-hidden="true"
				>
					<img
						src={AVATAR_URL}
						alt="Samuel Utrilla"
						className="avatar"
					/>
				</motion.div>
			</div>
		</section>
	);
}
