import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

const Root = () => {
	return (
		<React.StrictMode>
			<App />
		</React.StrictMode>
	);
};

ReactDOM.render(<Root />, document.getElementById("root"));
