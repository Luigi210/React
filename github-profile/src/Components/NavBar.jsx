import React from 'react';
import {NavLink} from 'react-router-dom'
import '../Styles/NavBar.sass';
import {Icon} from "semantic-ui-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function NavBar(){
    return(
        <>
            <nav className="navbar navbar-dark bg-primary navbar-expand-lg" style={{position: 'sticky', top: 0}}>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <div className="navbar-brand">
                            <NavLink to="/" className="nav-link">
                                GitHub Search
                            </NavLink>
                        </div>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/main" className="nav-link">
                            Main
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/profile" className="nav-link">
                            Personal Info
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/repo" className="nav-link">
                            Repositories
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-mdb-toggle="collapse"
                            data-mdb-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        {/*<Icon className={"fas fa-bars"}/>*/}
                        <FontAwesomeIcon icon={"fas fa-bars"}/>
                    </button>
                </div>
            </nav>
            <div className="collapse" id="navbarToggleExternalContent">
                <div className="bg-light shadow-3 p-4">
                    <button className="btn btn-link btn-block border-bottom m-0">Link 1</button>
                    <button className="btn btn-link btn-block border-bottom m-0">Link 2</button>
                    <button className="btn btn-link btn-block m-0">Link 3</button>
                </div>
            </div>
        </>
    )
}
