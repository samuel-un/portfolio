import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./i18n";
import i18n from "./i18n";

i18n.on("languageChanged", (lng) => {
	document.documentElement.lang = lng;
});

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
