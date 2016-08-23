import dispatcher from "../Dispatcher";

export function createArticle(title){
    dispatcher.dispatch({
      type: "CREATE_ARTICLE",
      title,
    });
}
export function deleteArticle(id){
    dispatcher.dispatch({
      type: "DELETE_ARTICLE",
      id,
    });
}
