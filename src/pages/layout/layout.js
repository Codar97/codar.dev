import React from 'react';
import './layout.scss';
import NavBar from '../nav-bar';
import {
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Home from '../home';
import Footer from '../footer';

function Layout() {
  return (
    <>
      <NavBar/>
      <div className="content">
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/projects"/>
        <Route path="/contact"/>
      </Switch>
      </div>
      <Footer/>
    </>
  );
}

export default Layout;
