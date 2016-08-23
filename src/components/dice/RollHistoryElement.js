import React from "react";

export default class RollHistoryElement extends React.Component{
	constructor(props){
		super();
	}

	render(){
		return(
      <li id={this.props.id} className="mdl-list__item">
    <span className="mdl-chip mdl-chip--contact">
		<span className="mdl-chip__contact mdl-color--teal mdl-color-text--white">{this.props.diceType}</span>
	    <span className="mdl-chip__text">{this.props.number}</span>
			<a href="#" className="mdl-chip__action"><i className="material-icons">info</i></a>
  </span>
  </li>);
		}
	}
