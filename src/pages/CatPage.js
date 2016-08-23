import React from "react";
import Cat from "../components/Cat";
import CatStore from "../stores/CatStore";

export default class CatPage extends React.Component{
	constructor(){
		super();
		this.state = {cats: CatStore.getAll()};
	}
	componentWillMount(){
	  CatStore.on("change", ()=>{
	    this.setState({
	      cats: CatStore.getAll(),
	    })
	  })
	}
	render(){
		const {cats} =this.state;

		const CatComps = cats.map((cat)=>{
			return <Cat key={cat.id} {...cat}/>;});
			return(
				<div className="row">
				{CatComps}
				</div>
			)
		}

	}
