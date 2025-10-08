import { motion } from "framer-motion";
import Button from "./UI/Button";

const AVATAR_URL =
	"https://res.cloudinary.com/dgbngcvkl/image/upload/v1759943070/Foto-Perfil_cbibmq.png";

export default function Hero() {
	return (
		<section
			id="inicio"
			className="section"
			style={{ paddingTop: "calc(96px + var(--nav-h))" }}
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
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
					>
						Soy Samuel UN
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
						Desarrollador Web Full-Stack
					</motion.p>

					<motion.p
						className="mt-4"
						style={{ maxWidth: "60ch", color: "#C7CAD1" }}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.25, duration: 0.6 }}
					>
						Desarrollador Full-Stack junior, apasionado por crear
						aplicaciones web modernas, rápidas y bien estructuradas,
						especializado en Laravel y React.
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
							Download CV
						</Button>

						<Button variant="ghost" href="#projects">
							Ver proyectos
						</Button>
					</motion.div>
				</div>

				<motion.div
					className="avatar-wrap"
					initial={{ opacity: 0, scale: 0.92 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ delay: 0.15, duration: 0.6 }}
					aria-hidden
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
