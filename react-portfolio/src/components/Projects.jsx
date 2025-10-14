import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import Button from "./UI/Button";
import { projects } from "../data/projects";

const sectionFade = {
	hidden: { opacity: 0, y: 24 },
	show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const uiFade = {
	hidden: { opacity: 0, y: 8 },
	show: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.35, ease: "easeOut", delay: 0.1 },
	},
};

const trackFade = {
	hidden: { opacity: 0 },
	show: { opacity: 1, transition: { duration: 0.3 } },
};

export default function Projects() {
	const [index, setIndex] = useState(0);
	const [paused, setPaused] = useState(false);

	const visible = 3;
	const totalSlides = Math.max(1, projects.length - visible + 1);
	const AUTOPLAY_MS = 8000;

	const prevSlide = () => {
		setIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
	};

	const nextSlide = () => {
		setIndex((prev) => (prev + 1 >= totalSlides ? 0 : prev + 1));
	};

	useEffect(() => {
		if (paused || totalSlides <= 1) return;
		const id = setInterval(() => {
			setIndex((prev) => (prev + 1 >= totalSlides ? 0 : prev + 1));
		}, AUTOPLAY_MS);
		return () => clearInterval(id);
	}, [paused, totalSlides]);

	return (
		<motion.section
			id="projects"
			className="section"
			variants={sectionFade}
			initial="hidden"
			whileInView="show"
			viewport={{ once: true, amount: 0.25 }}
			onMouseEnter={() => setPaused(true)}
			onMouseLeave={() => setPaused(false)}
			onTouchStart={() => setPaused(true)}
			onTouchEnd={() => setPaused(false)}
			onFocusCapture={() => setPaused(true)}
			onBlurCapture={() => setPaused(false)}
		>
			<SectionTitle>Mis Proyectos</SectionTitle>

			<div className="container-projects">
				<div
					className="carousel"
					onMouseEnter={() => setPaused(true)}
					onMouseLeave={() => setPaused(false)}
				>
					{/* Flecha izquierda */}
					<motion.button
						className="carousel-btn left"
						onClick={prevSlide}
						aria-label="Anterior"
						variants={uiFade}
						initial="hidden"
						whileInView="show"
						viewport={{ once: true, amount: 0.4 }}
					>
						<svg
							className="carousel-icon"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						>
							<path d="M15 18l-6-6 6-6" />
						</svg>
					</motion.button>

					{/* Track */}
					<motion.div
						className="carousel-track"
						variants={trackFade}
						initial="hidden"
						whileInView="show"
						viewport={{ once: true, amount: 0.25 }}
					>
						{projects.slice(index, index + visible).map((p) => (
							<motion.article
								key={p.id}
								className="project-card card"
								initial={{ opacity: 0, y: 18, scale: 0.98 }}
								animate={{ opacity: 1, y: 0, scale: 1 }}
								transition={{ duration: 0.45, ease: "easeOut" }}
								onMouseEnter={() => setPaused(true)}
								onMouseLeave={() => setPaused(false)}
								onFocusCapture={() => setPaused(true)}
								onBlurCapture={() => setPaused(false)}
							>
								{projects.indexOf(p) < 3 && (
									<div
										className="featured-tag"
										aria-label="Proyecto destacado"
									>
										<span>⭐ Destacado</span>
									</div>
								)}

								<h3 className="project-title">{p.title}</h3>

								<div className="project-meta">
									{p.tags.map((t) => (
										<span className="tag" key={t}>
											{t}
										</span>
									))}
									{p.status && (
										<span className="tag tag--status">
											{p.status}
										</span>
									)}
								</div>

								<a
									href={p.demo}
									target="_blank"
									rel="noreferrer"
									className="project-thumb"
									onMouseEnter={() => setPaused(true)}
									onMouseLeave={() => setPaused(false)}
								>
									<img
										src={p.image}
										alt={p.title}
										loading="lazy"
									/>
									<span className="thumb-glow" />
								</a>

								<p className="project-desc">{p.description}</p>

								<footer className="project-actions">
									{p.demoUrl && (
										<Button
											href={p.demoUrl}
											target="_blank"
											rel="noreferrer"
											className="btn-flex"
										>
											<span className="btn-icon">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="18"
													height="18"
													viewBox="0 0 24 24"
													fill="none"
													stroke="currentColor"
													strokeWidth="2"
													strokeLinecap="round"
													strokeLinejoin="round"
												>
													<path d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
													<polyline points="15 3 21 3 21 9" />
													<line
														x1="10"
														y1="14"
														x2="21"
														y2="3"
													/>
												</svg>
											</span>
											Demo
										</Button>
									)}

									<Button
										variant="ghost"
										href={p.repoUrl}
										target="_blank"
										rel="noreferrer"
										className="btn-flex"
									>
										<span className="btn-icon">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="18"
												height="18"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												strokeWidth="2"
												strokeLinecap="round"
												strokeLinejoin="round"
											>
												<path d="M9 19c-4.97 1.67-4.97-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 21.13V25" />
											</svg>
										</span>
										Repositorio
									</Button>
								</footer>
							</motion.article>
						))}
					</motion.div>

					{/* Dots */}
					<motion.div
						className="carousel-dots"
						role="tablist"
						aria-label="Navegación de proyectos"
						variants={uiFade}
						initial="hidden"
						whileInView="show"
						viewport={{ once: true, amount: 0.4 }}
					>
						{Array.from({ length: totalSlides }).map((_, i) => (
							<button
								key={i}
								className={`dot ${i === index ? "active" : ""}`}
								onClick={() => setIndex(i)}
								onFocus={() => setPaused(true)}
								onBlur={() => setPaused(false)}
								aria-label={`Ir al grupo ${i + 1}`}
								aria-current={i === index ? "true" : "false"}
							/>
						))}
					</motion.div>

					{/* Flecha derecha */}
					<motion.button
						className="carousel-btn right"
						onClick={nextSlide}
						aria-label="Siguiente"
						variants={uiFade}
						initial="hidden"
						whileInView="show"
						viewport={{ once: true, amount: 0.4 }}
					>
						<svg
							className="carousel-icon"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						>
							<path d="M9 6l6 6-6 6" />
						</svg>
					</motion.button>
				</div>
			</div>
		</motion.section>
	);
}
