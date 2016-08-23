import dispatcher from "../Dispatcher";

export function addRoll(number,diceType){
    dispatcher.dispatch({
      type: "ADD_ROLL",
      number,
      diceType,
    });
}
