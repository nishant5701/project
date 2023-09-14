import React, { useEffect } from "react";
import "./App.css";

import Game from "./containers/Game";

const App = () => {
	useEffect(() => {
		// App is loaded, so removing loading screen
		const ele = document.getElementById("ipl-progress-indicator");
		if (ele) {
			setTimeout(() => {
				ele.classList.add("available");
				setTimeout(() => {
					ele.outerHTML = "";
				}, 2000);
			}, 1000);
		}
	}, []);

	return (
		<div className="App">
			<Game />
		</div>
	);
};

export default App;
