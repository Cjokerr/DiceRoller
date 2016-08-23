import React from "react";
import DiceBox from "../components/dice/DiceBox";
import DiceHistory from "../components/dice/DiceHistory"
import Messenger from "../components/Messenger";

export default class RollPage extends React.Component{
	constructor(){
		super();
	}
	render(){

			return(
				<div className="content-grid mdl-grid">
        	<div className="mdl-cell">
              <DiceHistory/></div>
            <div className="mdl-cell">
              <DiceBox/>
            </div>
            <div className="mdl-cell">
              <Messenger/>
            </div>
				</div>
			)
		}

	}
