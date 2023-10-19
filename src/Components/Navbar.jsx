import React from "react";
import { Link } from "react-router-dom";
import '../Components/Styles/Navbar.css';
import { Auth } from "./ContextProvider/Provider";
import logo from './Assets/Images/logo.png';

const Navs = () => {
    const { user, logoutUser } = Auth();
    const uname = sessionStorage.getItem('uname');

    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <i className="fas fa-bars"></i>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <Link className="navbar-brand mt-2 mt-lg-0" to="/">
                            <img
                                src={logo}
                                height="35"
                                alt="MDB Logo"
                                loading="lazy"
                            />
                        </Link>
                        <div className="d-flex justify-content-between">
                            <ul className="navbar-nav">
                                {user ? (
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/ToDo">Dashboard</Link>
                                    </li>
                                ) : (
                                    <>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/Login">Login</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/Register">Register</Link>
                                        </li>
                                    </>
                                )}
                            </ul>
                            {user && (
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <span className="nav-link">Welcome, {uname} 🤍</span>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/Login" onClick={logoutUser}>Logout</Link>
                                    </li>
                                </ul>
                            )}
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navs;
