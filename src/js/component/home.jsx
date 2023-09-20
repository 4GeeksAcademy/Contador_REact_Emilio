import React from "react";

//create your first component
const Home = (props) => {
	console.log(props)
	return (<div className="bigCounter ">
		
		<div className="calendar ">
			<i className="far fa-clock"></i>
			</div>
			<div className="three">{props.four}</div>
			<div className="three">{props.three}</div>
			<div className="two">{props.two}</div>
			<div className="one">{props.one}</div>
		</div>
	);
};

export default Home;
