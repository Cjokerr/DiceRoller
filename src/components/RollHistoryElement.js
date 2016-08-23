import React from "react";

export default class RollHistoryElement extends React.Component{
	constructor(props){
		super();
	}

	render(){
		return(
      <li id={this.props.id} className="mdl-list__item">
    <span className="mdl-list__item-primary-content">
    <i className="material-icons mdl-list__item-icon">person</i>
    {this.props.number} out of {this.props.diceType}
  </span>
  </li>);
		}
	}
