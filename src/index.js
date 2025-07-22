import ReactDOM from "react-dom/client";
import App from "./components/App";
import "./reset.css";
import "./styles.css";

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
