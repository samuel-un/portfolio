import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en/common.json";
import es from "./locales/es/common.json";

const LS_KEY = "lang";
const FALLBACK = "en";
const ALLOWED = ["en", "es"];

const saved =
	typeof localStorage !== "undefined" ? localStorage.getItem(LS_KEY) : null;
const initialLng = ALLOWED.includes(saved || "") ? saved : "en";

function setHtmlLang(lng) {
	document.documentElement.setAttribute("lang", lng);
}

function updateSEO() {
	const meta = document.querySelector('meta[name="description"]');
	if (meta && i18n.exists("seo.description")) {
		meta.setAttribute("content", i18n.t("seo.description"));
	}
	const og = document.querySelector('meta[property="og:locale"]');
	if (og) {
		og.setAttribute("content", i18n.language === "es" ? "es_ES" : "en_GB");
	}
}

i18n.use(initReactI18next)
	.init({
		resources: { en: { translation: en }, es: { translation: es } },
		lng: initialLng,
		fallbackLng: FALLBACK,
		interpolation: { escapeValue: false },
	})
	.then(() => {
		setHtmlLang(i18n.language);
		updateSEO();
	});

i18n.on("languageChanged", (lng) => {
	const safe = ALLOWED.includes(lng) ? lng : FALLBACK;
	try {
		localStorage.setItem(LS_KEY, safe);
	} catch {}
	setHtmlLang(safe);
	updateSEO();
});

export default i18n;
