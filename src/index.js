import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import  User from "./User";
import * as serviceWorker from './serviceWorker';
import Header from './header';
import {
  BrowserRouter,
  Switch,
  Route,

} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Header/>
    <BrowserRouter>
      <Switch>
          <Route exact path="/" component={App} />
          <Route path="/user/:id" component={User} />
      </Switch>
    </BrowserRouter>
    

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change  <Route path="/my-list" component={MyListPage} />
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
