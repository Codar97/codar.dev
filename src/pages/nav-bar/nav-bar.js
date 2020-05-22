import React, {useEffect, useState, useCallback} from 'react';
import {NavLink} from 'react-router-dom';

const links = {
  "/": "home",
  "/projects": "projects",
  "/contact": "contact"
};

function NavBar() {
  const [responsive, setResponsive] = useState(false);
  const checkResponsiveness = useCallback(() => {
    if (!responsive && window.innerWidth < 750) {
      setResponsive(true);
    } else if (responsive && window.innerWidth > 750) {
      setResponsive(false);
    }
  }, [responsive]);
  useEffect(() => {
    checkResponsiveness();
    window.addEventListener("resize", checkResponsiveness);
    return () => {
      window.removeEventListener("resize", checkResponsiveness);
    }
  }, [checkResponsiveness]);


  return (
    <div className="nav-bar">
      <div className="nav-bar__title" onClick={() => setResponsive(true)}>
        <NavLink to="/" className="nav-bar__title__text">
          codar@sam-clark
        </NavLink>
        :
        {responsive && <ResponsiveMenu/>}
      </div>
      {!responsive &&
      <div className="nav-bar__links">
        {Object.keys(links).map((to) => <Link to={to}>{links[to]}</Link>)}
      </div>
      }
    </div>
  );
}

function ResponsiveMenu() {
  const [drowpdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = useCallback(() => {
    setDropdownOpen(!drowpdownOpen);
  },[drowpdownOpen]);

  return (<div className="nav-bar__dropdown">
    <span onClick={toggleDropdown}
          className="nav-bar__links__link--active nav-bar__links__link nav-bar__dropdown__button">{links[window.location.pathname]}</span>
    <div className={`nav-bar__dropdown__content${drowpdownOpen ? " nav-bar__dropdown__content--open" : ""}`}>
      {Object.keys(links).filter((to) => to !== window.location.pathname).map((to) => <Link onClick={toggleDropdown}
                                                                                            to={to}>{links[to]}</Link>)}
    </div>
  </div>);
}

function Link({to, children, onClick}) {
  return (
    <NavLink onClick={onClick} to={to} exact className="nav-bar__links__link"
             activeClassName="nav-bar__links__link--active">
      {children}
    </NavLink>
  )
}

export default NavBar;
