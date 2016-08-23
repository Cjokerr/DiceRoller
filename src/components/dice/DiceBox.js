import React from "react";
import * as RollActions from "../../actions/RollActions"

export default class DiceBox extends React.Component{
	constructor(props){
		super();
    this.state = {roll: "You have not rolled yet"};

	}
  rollDice(diceType){
    var roll = Math.floor(Math.random() * diceType) + 1;
    this.setState({roll: roll});
    RollActions.addRoll(roll, "d"+diceType);
  }
	render(){
		return(
			<div className="mdl-card mdl-shadow--2dp mdl-cell--8-col" >
      <div className="mdl-card__title mdl-card--expand">
    <h2 className="mdl-card__title-text">Dice Drawer</h2>
  </div>
      <div className="mdl-card__supporting-text">{this.state.roll}</div>
      <div className="mdl-card__actions mdl-card--border">
  <button onClick={()=>this.rollDice(6)} className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">D6</button>
  <button onClick={()=>this.rollDice(10)} className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">D10</button>
  <button onClick={()=>this.rollDice(20)} className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">D20</button>
  <button onClick={()=>this.rollDice(40)} className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">D40</button>

			</div></div>);
		}
	}
