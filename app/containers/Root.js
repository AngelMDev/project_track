// @flow
import React, { Component } from 'react';
import Home from '../components/Home';
import Sidebar from '../components/Sidebar'
import '../app.global.css';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

export default class Root extends Component<Props> {
  render(){
    return(
      <HashRouter>
        <div>
          <Sidebar />
          <div className="main-container">
            <div className="inner-border">
              <Route exact path="/" component={Home} />
              <Route path="/Timer" component={null} />
              <Route path="/List" component={null} />
              <Route path="/Music" component={null} />
              <Route path="/Settings" component={null} />
            </div>
          </div>
        </div>
      </HashRouter>
    )
  }
}
