import React from 'react';
import {NavLink} from 'react-router-dom';

function NavBar() {
  return (
    <div className="nav-bar">
      <div className="nav-bar__title">
        <a className="nav-bar__title__text">
          codar@sam-clark
        </a>
        :
      </div>
      <div className="nav-bar__links">
        <Link to="/">home</Link>
        <Link to="/projects">projects</Link>
        <Link to="/contact">contact</Link>
      </div>
    </div>
  );
}

function Link({to, children}) {
  return (
    <NavLink to={to} exact className="nav-bar__links__link" activeClassName="nav-bar__links__link--active">
      {children}
    </NavLink>
  )
}

export default NavBar;
