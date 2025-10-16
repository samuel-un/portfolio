// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import "./styles/base.css";
import "./styles/variables.css";
import "./styles/layout.css";

import "./i18n/index.js";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
