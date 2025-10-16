import { useTranslation } from "react-i18next";
import { useEffect, useMemo, useState } from "react";

const FLAGS = {
	en: "https://res.cloudinary.com/dgbngcvkl/image/upload/v1760637821/en_jyyhcy.png",
	es: "https://res.cloudinary.com/dgbngcvkl/image/upload/v1760637821/es_bxwofv.png",
};

export default function LanguageSwitcher({ className = "" }) {
	const { i18n } = useTranslation();
	const [checked, setChecked] = useState(i18n.language === "es");

	useEffect(() => setChecked(i18n.language === "es"), [i18n.language]);

	const nextLang = useMemo(
		() => (i18n.language === "en" ? "es" : "en"),
		[i18n.language]
	);

	const toggle = () => i18n.changeLanguage(nextLang);

	return (
		<button
			type="button"
			role="switch"
			aria-checked={checked}
			aria-label={`Language: ${i18n.language.toUpperCase()}. Switch to ${nextLang.toUpperCase()}`}
			title={`Switch to ${nextLang.toUpperCase()}`}
			onClick={toggle}
			className={`ios-lang-switch ${checked ? "is-on" : ""} ${className}`}
		>
			<span className="ios-lang-switch__track" aria-hidden="true">
				{/* Bandera EN (lado izquierdo) */}
				<span className="ios-lang-switch__flag-container ios-lang-switch__flag-container--left">
					<img
						src={FLAGS.en}
						alt=""
						className="ios-lang-switch__flag-img"
						draggable="false"
					/>
				</span>

				{/* Bandera ES (lado derecho) */}
				<span className="ios-lang-switch__flag-container ios-lang-switch__flag-container--right">
					<img
						src={FLAGS.es}
						alt=""
						className="ios-lang-switch__flag-img"
						draggable="false"
					/>
				</span>
			</span>

			{/* Thumb vacío - solo tapa la bandera activa */}
			<span className="ios-lang-switch__thumb" aria-hidden="true" />
		</button>
	);
}
