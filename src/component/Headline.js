import React from "react";

function Listmovie(props) {
    return (
        <div>
            {props.top.map(function(judl) {
                return (
                    <div>
                        <div className="top">
                            <img
                                src={judl.Poster}
                                alt="home"
                                width="500px"
                                height="300px"
                            />
                        </div>
                        <div className="row">
                            <h3>{judl.Title}</h3>
                            <span>{judl.Year}</span>
                            <div className="row">
                                <p>{judl.Synopsis}</p>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
export default Listmovie;
