import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.scss";
import App from "./App";
import * as Sentry from "@sentry/browser";
import config from "./config";
import { Provider } from "react-redux";
import store from "redux/store";
// load config variable as soon as app loads
Object.keys(config).forEach((key) => {
	window[key] = config[key];
});

// Initialize sentry for error logging in production
if (process.env.NODE_ENV === "production" || process.env.NODE_ENV === "stage") {
	console.log("SENTRY INITIALIZED !");
	Sentry.init({ dsn: window.SENTRY_URL });
}

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);
