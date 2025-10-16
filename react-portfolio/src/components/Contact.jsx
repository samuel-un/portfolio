import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { useTranslation } from "react-i18next";

const sectionFade = {
	hidden: { opacity: 0, y: 24 },
	show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const formContainer = {
	hidden: { opacity: 0, y: 12 },
	show: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.5,
			ease: "easeOut",
			when: "beforeChildren",
			staggerChildren: 0.08,
		},
	},
};

const fieldItem = {
	hidden: { opacity: 0, y: 12, scale: 0.98 },
	show: {
		opacity: 1,
		y: 0,
		scale: 1,
		transition: { duration: 0.35, ease: "easeOut" },
	},
};

const actionsFade = {
	hidden: { opacity: 0, y: 10 },
	show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
};

export default function Contact() {
	const { t } = useTranslation();
	const [form, setForm] = useState({ name: "", email: "", message: "" });
	const [status, setStatus] = useState("idle");

	const onChange = (e) =>
		setForm({ ...form, [e.target.name]: e.target.value });
	const isValidEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(v.trim());

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (
			!form.name.trim() ||
			!isValidEmail(form.email) ||
			!form.message.trim()
		) {
			setStatus("error");
			return;
		}
		try {
			setStatus("sending");
			const res = await fetch(
				"https://formsubmit.co/ajax/samuelun00@gmail.com",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						Accept: "application/json",
					},
					body: JSON.stringify({
						Nombre: form.name,
						Email: form.email,
						Mensaje: form.message,
						_captcha: "false",
					}),
				}
			);
			if (!res.ok) throw new Error("Fail");
			setStatus("ok");
			setForm({ name: "", email: "", message: "" });
		} catch {
			setStatus("error");
		}
	};

	const handleMailto = () => {
		const subject = encodeURIComponent(t("contact.mailtoSubject"));
		const body = encodeURIComponent(
			`${t("contact.mailtoBodyPrefix")}\n${form.message || ""}`
		);
		window.location.href = `mailto:samuelun00@gmail.com?subject=${subject}&body=${body}`;
	};

	return (
		<motion.section
			id="contact"
			className="section"
			variants={sectionFade}
			initial="hidden"
			whileInView="show"
			viewport={{ once: true, amount: 0.25 }}
			aria-labelledby="contact-title"
		>
			<div className="container">
				<SectionTitle>
					<span id="contact-title">{t("contact.title")}</span>
				</SectionTitle>

				<div className="contact-shell">
					<motion.form
						className="contact-form card"
						onSubmit={handleSubmit}
						noValidate
						variants={formContainer}
						initial="hidden"
						whileInView="show"
						viewport={{ once: true, amount: 0.35 }}
						aria-describedby="contact-lead"
					>
						{/* Nombre */}
						<motion.label className="field" variants={fieldItem}>
							<span className="field-icon" aria-hidden="true">
								<svg viewBox="0 0 24 24">
									<path d="M20 21a8 8 0 0 0-16 0" />
									<circle cx="12" cy="7" r="4" />
								</svg>
							</span>
							<input
								type="text"
								name="name"
								placeholder={t("contact.form.name")}
								value={form.name}
								onChange={onChange}
								className="input"
								autoComplete="name"
								aria-label={t("contact.form.name")}
							/>
						</motion.label>

						{/* Email */}
						<motion.label className="field" variants={fieldItem}>
							<span className="field-icon" aria-hidden="true">
								<svg viewBox="0 0 24 24">
									<rect
										x="3"
										y="5"
										width="18"
										height="14"
										rx="2"
									/>
									<path d="M3 7l9 6 9-6" />
								</svg>
							</span>
							<input
								type="email"
								name="email"
								placeholder={t("contact.form.email")}
								value={form.email}
								onChange={onChange}
								className="input"
								autoComplete="email"
								aria-label={t("contact.form.email")}
							/>
						</motion.label>

						{/* Mensaje */}
						<motion.label className="field" variants={fieldItem}>
							<span className="field-icon" aria-hidden="true">
								<svg viewBox="0 0 24 24">
									<path d="M21 15a4 4 0 0 1-4 4H7l-4 4V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
								</svg>
							</span>
							<textarea
								name="message"
								placeholder={t("contact.form.message")}
								rows={6}
								value={form.message}
								onChange={onChange}
								className="textarea"
								aria-label={t("contact.form.message")}
							/>
						</motion.label>

						{/* Acciones */}
						<motion.div
							className="contact-actions"
							variants={actionsFade}
						>
							<button
								type="submit"
								className="btn btn--primary btn-flex"
								disabled={status === "sending"}
							>
								<span className="btn-icon" aria-hidden="true">
									{status === "sending" ? (
										<svg
											viewBox="0 0 24 24"
											className="spin"
										>
											<circle
												cx="12"
												cy="12"
												r="10"
												stroke="currentColor"
												strokeWidth="2"
												opacity=".25"
												fill="none"
											/>
											<path
												d="M22 12a10 10 0 0 1-10 10"
												stroke="url(#icon-gradient)"
												strokeWidth="2.5"
												fill="none"
												strokeLinecap="round"
											/>
										</svg>
									) : status === "ok" ? (
										<svg viewBox="0 0 24 24">
											<path
												d="M5 13l4 4L19 7"
												stroke="currentColor"
												strokeWidth="2.5"
												fill="none"
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
										</svg>
									) : (
										<svg viewBox="0 0 24 24">
											<path
												d="M3 3l18 9-18 9 3.6-7.2L14 12 6.6 10.2 3 3z"
												stroke="currentColor"
												strokeWidth="2.2"
												fill="none"
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
										</svg>
									)}
								</span>
								{status === "sending"
									? t("contact.form.sending")
									: status === "ok"
									? t("contact.form.sent")
									: t("contact.form.send")}
							</button>

							<button
								type="button"
								className="btn btn--ghost btn-flex"
								onClick={handleMailto}
								title={t("contact.form.mailtoTitle")}
							>
								<span className="btn-icon" aria-hidden="true">
									<svg viewBox="0 0 24 24">
										<path
											d="M3 8l9 6 9-6"
											stroke="currentColor"
											strokeWidth="2.2"
											fill="none"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
										<rect
											x="3"
											y="4"
											width="18"
											height="16"
											rx="2"
											stroke="currentColor"
											strokeWidth="2"
											fill="none"
										/>
										<path
											d="M16 2h6v6"
											stroke="url(#icon-gradient)"
											strokeWidth="2.2"
											fill="none"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
										<path
											d="M16 8l6-6"
											stroke="url(#icon-gradient)"
											strokeWidth="2.2"
											fill="none"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								</span>
								{t("contact.form.mailto")}
							</button>
						</motion.div>

						{/* Estado */}
						<AnimatePresence mode="wait">
							{status === "error" && (
								<motion.p
									key="err"
									className="form-status error"
									initial={{ opacity: 0, y: 6 }}
									animate={{ opacity: 1, y: 0 }}
									exit={{ opacity: 0, y: -6 }}
									transition={{ duration: 0.25 }}
								>
									{t("contact.form.error")}
								</motion.p>
							)}
							{status === "ok" && (
								<motion.p
									key="ok"
									className="form-status ok"
									initial={{ opacity: 0, y: 6 }}
									animate={{ opacity: 1, y: 0 }}
									exit={{ opacity: 0, y: -6 }}
									transition={{ duration: 0.25 }}
								>
									{t("contact.form.ok")}
								</motion.p>
							)}
						</AnimatePresence>
					</motion.form>
				</div>
			</div>
		</motion.section>
	);
}
