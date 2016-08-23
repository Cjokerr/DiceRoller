import React from "react";
import {Link} from "react-router";
import LoginHandler from "./LoginHandler";

export default class Header extends React.Component{

	render(){
		return(  <header className="mdl-layout__header">
		    <div className="mdl-layout__header-row">
		      <span className="mdl-layout-title">Smokey Pics</span>
		      <div className="mdl-layout-spacer"></div>
		      <nav className="mdl-navigation mdl-layout--large-screen-only">
					<Link className="mdl-navigation__link" to="/">Smokey Pics</Link>
						<Link className="mdl-navigation__link" to="roll">Roll Page</Link>

					</nav>
		    </div>
		  </header>)
	}
}
