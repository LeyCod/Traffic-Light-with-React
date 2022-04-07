import React, { useState } from "react";

import "../../assets/styles/index.css";

const Home = () => {
	const [color, setColor] = useState("red");

	return (
		<div>
			<div className="container-fluid g-0">
				<div className="row justify-content-center align-items-center g-0">
					<div className="d-flex flex-column align-items-center">
						<div className="container-support bg-black"></div>
						<div className="container-lights d-flex flex-column justify-content-evenly align-items-center bg-black">
							<div className="light bg-success"></div>
							<div className="light bg-warning"></div>
							<div className="light bg-danger"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
