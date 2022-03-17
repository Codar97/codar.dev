import React, {useCallback, useEffect, useState} from 'react';
import './layout.scss';
import NavBar from '../nav-bar';
import {Switch, Route} from 'react-router-dom';
import Home from '../home';
import Footer from '../footer';
import NotFound from '../not-found';
import Projects from '../projects';

function Layout() {
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
        <>
            <NavBar responsive={responsive}/>
            <div className="content">
                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route path="/projects">
                        <Projects responsive={responsive}/>
                    </Route>
                    <Route path="/contact"/>
                    <Route component={NotFound}/>
                </Switch>
            </div>
            <Footer/>
        </>
    );
}

export default Layout;
