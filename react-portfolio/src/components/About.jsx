import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { FiLayers, FiCode, FiUsers } from "react-icons/fi";
import Badge from "./UI/Badge";

const badges = [
	{ label: "Desarrollo Full-Stack", icon: FiLayers },
	{ label: "Desarrollo de aplicaciones web", icon: FiCode },
	{ label: "Trabajo en equipo", icon: FiUsers },
];

export default function About() {
	return (
		<section id="about" className="section">
			<SectionTitle>Sobre mí</SectionTitle>

			<div className="container card" style={{ padding: 28 }}>
				<motion.p
					className="large"
					initial={{ opacity: 0, y: 14 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.55 }}
					transition={{ duration: 0.5, ease: "easeOut" }}
				>
					Soy Desarrollador Full-Stack junior con formación en
					Desarrollo de Aplicaciones Web (DAW) y experiencia creando
					proyectos completos con Laravel y React.
				</motion.p>

				<motion.p
					className="mt-4"
					style={{ color: "#C7CAD1", maxWidth: "80ch" }}
					initial={{ opacity: 0, y: 14 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.55 }}
					transition={{ duration: 0.5, ease: "easeOut" }}
				>
					Me apasiona construir aplicaciones modernas, rápidas y bien
					estructuradas, cuidando tanto la parte visual como la lógica
					del backend.
				</motion.p>

				<motion.p
					className="mt-4"
					style={{ color: "#C7CAD1", maxWidth: "80ch" }}
					initial={{ opacity: 0, y: 14 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.55 }}
					transition={{ duration: 0.5, ease: "easeOut" }}
				>
					Actualmente sigo ampliando mis conocimientos en buenas
					prácticas, rendimiento y experiencia de usuario, mientras
					desarrollo proyectos personales y busco mi primera
					oportunidad profesional en el sector.
				</motion.p>

				<div
					className="mt-6"
					style={{ display: "flex", flexWrap: "wrap", gap: 12 }}
				>
					{badges.map((b, i) => (
						<motion.span
							key={b.label}
							initial={{ opacity: 0, y: 10 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, amount: 0.6 }}
							transition={{
								duration: 0.35,
								ease: "easeOut",
								delay: i * 0.08,
							}}
						>
							<Badge icon={b.icon}>{b.label}</Badge>
						</motion.span>
					))}
				</div>
			</div>
		</section>
	);
}
