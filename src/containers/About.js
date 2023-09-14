import React, { Component } from "react";
import { StyleSheet, css } from "aphrodite";

import { getHighScore } from "../config/SaveScore";
import ReplayIcon from "@material-ui/icons/Replay";
import ScheduleIcon from "@material-ui/icons/Schedule";

const styles = StyleSheet.create({
	container: {
		display: "flex",
		// flex: 1,
		// flexDirection: "column",
		position: "relative",
		padding: "0 30px",
		gap: "10px",
		textAlign: "center",
		alignItems: "center",
		justifyContent: "space-between",
	},
	score: {
		color: "#fff",
		cursor: "pointer",
	},
});

export default class About extends Component {
	constructor(props) {
		super(props);
		this.state = {
			show: false,
			seconds: 0,
		};
	}

	componentDidMount() {
		this.intervalId = setInterval(this.tick, 1000);
		window.addEventListener("beforeunload", this.clearInterval);
	}

	componentWillUnmount() {
		clearInterval(this.intervalId);
		window.removeEventListener("beforeunload", this.clearInterval);
	}

	tick = () => {
		this.setState((prevState) => ({
			seconds: prevState.seconds + 1,
		}));
	};

	clearInterval = () => {
		clearInterval(this.intervalId);
	};

	formatTime(seconds) {
		const hours = Math.floor(seconds / 3600);
		const minutes = Math.floor((seconds % 3600) / 60);
		const remainingSeconds = seconds % 60;

		const formattedTime = `${this.padZero(hours)}:${this.padZero(
			minutes
		)}:${this.padZero(remainingSeconds)}`;
		return formattedTime;
	}

	padZero(value) {
		return value.toString().padStart(2, "0");
	}

	handleShowHint = () => {
		this.setState((prevState) => ({
			show: !prevState.show,
		}));
	};

	render() {
		const formattedTime = this.formatTime(this.state.seconds);
		const { show } = this.state;

		return (
			<div className={css(styles.container)}>
				<ReplayIcon
					className={css(styles.score)}
					onClick={() => window.location.reload()}
				/>
				<h2 className={css(styles.score)}>{`High Score: ${getHighScore()}`}</h2>
				<div className={css(styles.container)}>
					{show && (
						<div
							style={{
								position: "absolute",
								padding: "5px",
								top: "-100px",
								left: "-300px",
								backgroundColor: "white",
								borderRadius: "10px",
								textAlign: "start",
							}}
						>
							<ul>
								<li>THE LETTERS WILL BE DROPPED FROM THE TOP</li>
								<li>ARRANGE THEM TO FORM MEANINGFUL WORDS</li>
								<li>SELECT THE MEANINGFULL WORDS AND DESTROY THEM TO SCORE</li>
							</ul>
						</div>
					)}
					<h2
						className={css(styles.score)}
						style={{
							border: "1px solid #fff",
							padding: "5px 10px",
							borderRadius: "10px",
						}}
						onClick={this.handleShowHint}
					>
						{show ? "CLOSE" : "HINT"}
					</h2>
					<div className={css(styles.score, styles.container)}>
						<ScheduleIcon />
						<h2>{formattedTime}</h2>
					</div>
				</div>
			</div>
		);
	}
}
