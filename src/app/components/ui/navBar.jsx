import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import logo from "../../design/logo2.png";

const NavBar = () => {
    return (
        <div className="container-lg">
            <nav className="navbar navbar-expand-sm bg-primary rounded-bottom ">
                <div className="container-fluid">
                    <img
                        src={logo}
                        className="rounded float-start"
                        alt="Logo"
                        width={100}
                        height={100}
                    ></img>

                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active text-white" href="#">
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active text-white" href="#">
                                Home1
                            </a>
                        </li>{" "}
                        <li className="nav-item">
                            <a className="nav-link active text-white" href="#">
                                Home2
                            </a>
                        </li>{" "}
                        <li className="nav-item">
                            <a className="nav-link active text-white" href="#">
                                Home3
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;
