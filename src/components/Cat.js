import React from "react";

export default class Cat extends React.Component{
	constructor(props){
		super();
	}

	render(){
		return(
			<div className="col-md-4 flip-container" ontouchstart="this.classList.toggle('hover');">
			<div className="flipper">
			<div className="front"><img className="img-responsive" src={this.props.picture}/>
			</div>
			<div className="back"><h1>Breed</h1><p>{this.props.breed}</p><h1>Description</h1><p>{this.props.desc}</p>
			</div>
			</div>
			</div>);
		}
	}
