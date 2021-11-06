import React from 'react';
import {NavLink} from 'react-router-dom'
import '../Styles/NavBar.sass';

export default function NavBar(){
    return(
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
    )
}
