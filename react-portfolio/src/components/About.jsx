import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { FiLayers, FiCode, FiUsers } from "react-icons/fi";
import Badge from "./UI/Badge";
import { useTranslation } from "react-i18next";

const badges = [
	{ key: "fullstack", icon: FiLayers },
	{ key: "webdev", icon: FiCode },
	{ key: "teamwork", icon: FiUsers },
];

export default function About() {
	const { t } = useTranslation();

	return (
		<section id="about" className="section">
			<SectionTitle>{t("about.title")}</SectionTitle>

			<div className="container card" style={{ padding: 28 }}>
				<motion.p
					className="large"
					initial={{ opacity: 0, y: 14 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.55 }}
					transition={{ duration: 0.5, ease: "easeOut" }}
				>
					{t("about.p1")}
				</motion.p>

				<motion.p
					className="mt-4"
					style={{ color: "#C7CAD1", maxWidth: "80ch" }}
					initial={{ opacity: 0, y: 14 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.55 }}
					transition={{ duration: 0.5, ease: "easeOut" }}
				>
					{t("about.p2")}
				</motion.p>

				<motion.p
					className="mt-4"
					style={{ color: "#C7CAD1", maxWidth: "80ch" }}
					initial={{ opacity: 0, y: 14 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.55 }}
					transition={{ duration: 0.5, ease: "easeOut" }}
				>
					{t("about.p3")}
				</motion.p>

				<div
					className="mt-6"
					style={{ display: "flex", flexWrap: "wrap", gap: 12 }}
				>
					{badges.map((b, i) => (
						<motion.span
							key={b.key}
							initial={{ opacity: 0, y: 10 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, amount: 0.6 }}
							transition={{
								duration: 0.35,
								ease: "easeOut",
								delay: i * 0.08,
							}}
						>
							<Badge icon={b.icon}>
								{t(`about.badges.${b.key}`)}
							</Badge>
						</motion.span>
					))}
				</div>
			</div>
		</section>
	);
}
