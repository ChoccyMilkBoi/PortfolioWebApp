// For the children props, do the following elements for children:
/*
<h5 className="card-title">Card title</h5>
<p className="card-text">Text</p>
<a href="#" className="btn btn-primary">Go somewhere</a>
*/

// For the image, use the link to the image in an internal directory.
import React, { ReactNode } from "react";

interface Props {
	image?: string;
	children?: ReactNode;
}

function LinkInfoCard({ image, children }: Props) {
	const CardImageStyle = {
		height: "10 rem",
	};
	return (
		<div className="card card-width-setter">
			<img
				style={CardImageStyle}
				src={image}
				className="card-img-top"
				alt="The image didn't load ;("
			/>
			<div className="card-body">{children}</div>
		</div>
	);
}

export default LinkInfoCard;
