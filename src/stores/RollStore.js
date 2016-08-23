import {EventEmitter} from "events";

import dispatcher from "../Dispatcher";

class RollStore extends EventEmitter {

  constructor(){
    super()
    this.rolls = [
    ];}

    addRoll(number,diceType){
      const id = Date.now();
      this.rolls.push({
        id,
        number,
      diceType});
        this.emit("change");
      }

      getAll(){
        return this.rolls;
      }

      handleActions(action){
        switch(action.type){
          case "ADD_ROLL":{
            this.addRoll(action.number,action.diceType)
            break;
          }
          case "GET_ROLL":{
            this.getALL();
            break;
          }

          default:{
            console.log("Error")
            break;
          }
        }
      }
    }

    const rollStore = new RollStore();
    dispatcher.register(rollStore.handleActions.bind(rollStore))

    window.dispatcher = dispatcher;
    export default rollStore;
