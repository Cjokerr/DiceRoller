import React from "react";
import RollStore from "../../stores/RollStore";
import RollHistoryElement from "./RollHistoryElement"

export default class DiceHistory extends React.Component{
  constructor(){
    super();
    this.state={rolls:[{id:0,number:0}]};
  }
  componentWillMount(){
    RollStore.on("change", ()=>{
      this.setState({
        rolls: RollStore.getAll(),
      })
    })
  }
  render(){
    const {rolls} =this.state;

    const RollComp = rolls.map((roll)=>{
      return <RollHistoryElement key={roll.id} {...roll}/>;});
      return(
        <div className="mdl-card mdl-shadow--2dp mdl-cell--12-col mdl-cell--6-col-tablet mdl-cell--6-col-desktop" >
        <div className="mdl-card__title mdl-card--expand">
        <h2 className="mdl-card__title-text">Rolls</h2>
        </div>
        <div className="mdl-card__supporting-text mdl-color-text--grey-600">
        <ul className="mdl-list">
        {RollComp}
        </ul>
        </div>
        </div>);
      }
    }
