import React, { useState } from "react";

import "../../assets/styles/index.css";

const Home = () => {
	const defaultColors = ["red", "yellow", "green"];

	const [ActiveColor, setActiveColor] = useState("");

	return (
		<div>
			<div className="container-fluid g-0">
				<div className="row justify-content-center align-items-center g-0">
					<div className="d-flex flex-column align-items-center">
						<div className="container-support bg-black"></div>
						<div className="container-lights d-flex flex-column justify-content-evenly align-items-center bg-black">
							<div
								onClick={() => {
									setActiveColor = "red";
								}}
								className={
									"light red" +
									(ActiveColor === "red"
										? " glow-effect"
										: "")
								}></div>
							<div
								onClick={() => {
									setActiveColor = "yellow";
								}}
								className={
									"light yellow" +
									(ActiveColor === "yellow"
										? " glow-effect"
										: "")
								}></div>
							<div
								onClick={() => {
									setActiveColor = "green";
								}}
								className={
									"light green" +
									(ActiveColor === "green"
										? " glow-effect"
										: "")
								}></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
