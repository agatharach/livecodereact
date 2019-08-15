import React from "react";
import logo from "../logo.svg";
import { Link } from "react-router-dom";
// import { connect } from "unistore/react";
// import { actions } from "../store";

function Headermovie(props) {
    return (
        <header>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="row">
                            <div className="col-md-6">
                                <ul className="menumovie">
                                    <li>
                                        <img
                                            src={logo}
                                            alt="Logo"
                                            width="80px"
                                        />
                                    </li>
                                    <li>Movie</li>
                                    <li>
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li>
                                        <Link to="/profile">Profile</Link>
                                    </li>
                                    <li>
                                        <Link to="/signin">SignIn</Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/signout"
                                            onClick={() => props.logout()}
                                        >
                                            SignOut
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
export default Headermovie;
