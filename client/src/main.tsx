import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

function loadAnalyticsScript() {
	const endpoint = import.meta.env.VITE_ANALYTICS_ENDPOINT as string | undefined;
	const websiteId = import.meta.env.VITE_ANALYTICS_WEBSITE_ID as string | undefined;

	if (!endpoint || !websiteId) {
		return;
	}

	try {
		const url = new URL(endpoint, window.location.origin);
		if (url.protocol !== "https:") {
			return;
		}

		const basePath = url.pathname.endsWith("/") ? url.pathname.slice(0, -1) : url.pathname;
		const script = document.createElement("script");
		script.defer = true;
		script.src = `${url.origin}${basePath}/umami`;
		script.setAttribute("data-website-id", websiteId);
		document.body.appendChild(script);
	} catch {
		// Ignore invalid analytics endpoint configuration.
	}
}

loadAnalyticsScript();

createRoot(document.getElementById("root")!).render(<App />);
