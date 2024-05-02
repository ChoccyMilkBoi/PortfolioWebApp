import LinkInfoCard from "./LinkInfoCard";
import React, { useState } from "react";
import BlueBlur from "../assets/BlueBlurGrad.svg";

function BodySection() {
	let [Text, setText] = useState("");
	const backing = {
		backgroundImage: `url(${BlueBlur})`,
		backgroundSize: "fit",
		backgroundRepeat: "no-repeat",
	};
	return (
		<>
			<div
				className="section-wrapper yap"
				data-bs-theme="dark"
				style={backing}
			>
				<div>
					<h1 data-bs-theme="dark">
						Who art thou (and some easter eggs based on whom)
					</h1>
				</div>
				<input
					name="GetName"
					title="Put in your name "
					value={Text}
					onChange={(e) => setText(e.target.value)}
				/>

				<p>
					The text you entered is: {}
					{(Text == "Shayaan" && (
						<b>
							What a nerd, imagine being named <i>Shayaan</i>
						</b>
					)) ||
						(Text && Text == "Eli" && <b>ELI 😍</b>)}
				</p>
			</div>
		</>
	);
}

export default BodySection;
