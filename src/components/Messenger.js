import React from "react";

export default class Messenger extends React.Component{

render(){
  return(
    <div id="messages-card" className="mdl-card mdl-shadow--2dp mdl-cell mdl-cell--12-col mdl-cell--6-col-tablet mdl-cell--6-col-desktop">
      <div className="mdl-card__supporting-text mdl-color-text--grey-600">
        <div id="messages">
          <span id="message-filler"></span>
        </div>
        <form id="message-form" action="#">
          <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
            <input className="mdl-textfield__input" type="text" id="message"/>
            <label className="mdl-textfield__label" for="message">Message...</label>
          </div>
          <button id="submit" disabled type="submit" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect">
            Send
          </button>
        </form>
        <form id="image-form" action="#">
          <input id="mediaCapture" type="file" accept="image/*,capture=camera"/>
          <button id="submitImage" title="Add an image" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-color--amber-400 mdl-color-text--white">
            <i className="material-icons">image</i>
          </button>
        </form>
      </div>
    </div>
  )
}

}
