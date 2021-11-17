import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function SideBarMenu() {
    return (
        <div className='l-navbar' id="nav-bar">
            <nav className="nav">
                <div>
                    <Link to="/dashboard" className="nav__logo">
                        <i className='bx bx-layer nav__logo-icon'></i>
                        <span className="nav__logo-name">Avo</span>
                    </Link>

                    <div className="nav__list">
                        <NavLink to="/dashboard" className="nav__link" activeClassName="active__nav">
                            <i className='bx bx-grid-alt nav__icon' ></i>
                            <span className="nav__name">Dashboard</span>
                        </NavLink>

                        <NavLink to="/users" className="nav__link" activeClassName="active__nav">
                            <i className='bx bx-user nav__icon' ></i>
                            <span className="nav__name">Users</span>
                        </NavLink>

                        <NavLink to="/add-exercise" className="nav__link" activeClassName="active__nav">
                            <i className='bx bx-cycling'></i>
                            <span className="nav__name">Exercise</span>
                        </NavLink>

                        <NavLink to="/foods" className="nav__link" activeClassName="active__nav">
                            <i className='bx bx-food-menu'></i>
                            <span className="nav__name">Foods</span>
                        </NavLink>
                    </div>
                </div>

                <Link to="/" className="nav__link">
                    <i className='bx bx-log-out nav__icon' ></i>
                    <span className="nav__name">Log Out</span>
                </Link>
            </nav>
        </div>
    )
}

export default SideBarMenu;