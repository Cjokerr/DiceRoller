import dispatcher from "../Dispatcher";

export function addRole(number){
    dispatcher.dispatch({
      type: "CREATE_ARTICLE",
      number,
    });
}
