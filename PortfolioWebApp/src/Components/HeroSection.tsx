import LinkInfoCard from "./LinkInfoCard";
import CoffeeGuy from "../assets/GuySippingCoffeeMeme.png";
import RunningMan from "../assets/runningman.png";
import HeroImage from "../assets/HeroImage.png";
import "../index.css";
import { render } from "react-dom";
function HeroSection() {
	const BackStyle = {
		backgroundImage: `url(${HeroImage})`,
		backgroundSize: "fit",
		backgroundRepeat: "no-repeat",
	};

	return (
		<>
			<div
				className="container-fluid"
				data-bs-theme="dark"
				style={BackStyle}
			>
				<div className="hero-section yap">
					<h1 className="title-yap">Hello World!</h1>
					<p>I'm Emilio Armijo, Learn a thing or two about me!</p>
					<div className="container-fluid ">
						<div className="card-group card-width-setter">
							<LinkInfoCard image={CoffeeGuy}>
								<h5 className="card-title">
									I made this website btw
								</h5>
								<p className="card-text">
									Check out how I learned website development
									with react, html, css, blah, blah, blah ...
									<br></br>
									Im also learning the <strong>
										MERN
									</strong>{" "}
									stack.
								</p>
								<a href="#" className="btn btn-primary">
									Go somewhere
								</a>
							</LinkInfoCard>
							<LinkInfoCard image={RunningMan}>
								<h5 className="card-title">
									Check Out my Running
								</h5>
								<p className="card-text">
									I guess I run around a bit, check out my
									progression and cool runs.
								</p>
								<a href="#" className="btn btn-primary">
									My running 🏃
								</a>
							</LinkInfoCard>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default HeroSection;
