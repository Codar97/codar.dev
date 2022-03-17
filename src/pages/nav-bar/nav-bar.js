import React, {useCallback, useState} from 'react';
import {NavLink} from 'react-router-dom';

const links = {
    "/": "home",
    "/projects": "projects",
    // "/contact": "contact"
};

function NavBar({responsive}) {
    return (
        <div className="nav-bar">
            <div className="nav-bar__title">
                <NavLink to="/" className="nav-bar__title__text">
                    codar<span>@</span>sam-clark
                </NavLink>
                :
                {responsive && <ResponsiveMenu/>}
            </div>
            {!responsive &&
                <div className="nav-bar__links">
                    {Object.keys(links).map((to) => <Link to={to}>{links[to]}</Link>)}
                    <a href={'mailto:samuelc1997@hotmail.co.uk'} className="nav-bar__links__link">contact</a>
                </div>
            }
        </div>
    );
}

function ResponsiveMenu() {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggleDropdown = useCallback(() => {
        setDropdownOpen(!dropdownOpen);
    }, [dropdownOpen]);

    return (<div className="nav-bar__dropdown">
        <div onClick={toggleDropdown} className="nav-bar__dropdown__button">
            <span className="nav-bar__links__link--active nav-bar__links__link">{links[window.location.pathname]}</span>
            <span className={`nav-bar__dropdown__icon${dropdownOpen ? " nav-bar__dropdown__icon--open" : ""}`}/>
        </div>
        <div className={`nav-bar__dropdown__content${dropdownOpen ? " nav-bar__dropdown__content--open" : ""}`}>
            {Object.keys(links).filter((to) => to !== window.location.pathname).map((to) => <Link
                onClick={toggleDropdown}
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
