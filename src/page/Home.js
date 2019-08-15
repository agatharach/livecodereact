import React from "react";
import { Link } from "react-router-dom";
import Headermovie from "../component/Header2";
import Romance from "../aset/romance.jpg";
import Action from "../aset/action.jpg";
import Fiction from "../aset/fiction.jpg";
import Comedy from "../aset/comedy.jpg";

function Home() {
    return (
        <div>
            <Headermovie />
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <ul className="menumovie">
                            <li>
                                <img src={Romance} alt="romance" />
                                <Link to="/romance">
                                    <button className="btn btn-primary">
                                        See Movies
                                    </button>
                                </Link>
                            </li>
                            <li>
                                <img src={Action} alt="action" />
                                <Link to="/action">
                                    <button className="btn btn-primary">
                                        See Movies
                                    </button>
                                </Link>
                            </li>
                            <li>
                                <img src={Fiction} alt="fiction" />
                                <Link to="/fiction">
                                    <button className="btn btn-primary">
                                        See Movies
                                    </button>
                                </Link>
                            </li>
                            <li>
                                <img src={Comedy} alt="comedy" />
                                <Link to="/comedy">
                                    <button className="btn btn-primary">
                                        See Movies
                                    </button>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Home;
