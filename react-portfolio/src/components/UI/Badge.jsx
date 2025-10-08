import { motion } from "framer-motion";
import React from "react";

export default function Badge({ icon: Icon, children }) {
	return (
		<motion.button
			type="button"
			className="badge-glass"
			whileHover={{ y: -2, scale: 1.04 }}
			whileTap={{ scale: 0.98 }}
			transition={{ type: "spring", stiffness: 300, damping: 20 }}
		>
			<svg width="0" height="0" aria-hidden focusable="false">
				<defs>
					<linearGradient
						id="badge-gradient"
						x1="0"
						y1="0"
						x2="1"
						y2="0"
					>
						<stop offset="0%" stopColor="#A020F0" />
						<stop offset="100%" stopColor="#EF6370" />
					</linearGradient>
				</defs>
			</svg>

			<span className="badge__content">
				{Icon && <Icon className="badge__icon" aria-hidden />}
				<span className="badge__label">{children}</span>
			</span>
		</motion.button>
	);
}
