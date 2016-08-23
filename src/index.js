import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CatPage from "./pages/CatPage";
import RollPage from "./pages/RollPage";

import {
  Router,
  Route,
  IndexRoute,
  hashHistory
} from "react-router";
const app=document.getElementById('root')

ReactDOM.render(<Router history={hashHistory}>
    <Route path="/" component={App} >
    <IndexRoute component={CatPage} ></IndexRoute>
    <Route path="roll" component={RollPage} ></Route></Route>
</Router>,app);
