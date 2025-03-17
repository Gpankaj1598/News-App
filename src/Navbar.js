import React from 'react'
import { Link } from "react-router-dom";


const Navbar = ()=>{

    // const desgin = {
    //     color: '#f11946'
    // }

        return (
            <div>
                <nav className="navbar fixed-top navbar-expand-lg bg-info text-white">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">News App</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/">Home</Link></li>
                                <li className="nav-item"><Link className="nav-link active" to="/business">Business</Link></li>
                                <li className="nav-item"><Link className="nav-link active" to="/entertainment">Entertainment</Link></li>
                                <li className="nav-item"><Link className="nav-link active" to="/general">General</Link></li>
                                <li className="nav-item"><Link className="nav-link active" to="/health">Health</Link></li>
                                <li className="nav-item"><Link className="nav-link active" to="/sciences">Sciences</Link></li>
                                <li className="nav-item"><Link className="nav-link active" to="/sports">Sports</Link></li>
                                <li className="nav-item"><Link className="nav-link active" to="/technology">Technology</Link></li>
                            </ul>
                                {/* <div className={`form-check mr-auto form-switch text-${props.mode ==='light' ? 'dark' : 'light'}`}>
                                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={desgin}>Enable Mode</label>
                                </div> */}
                            <form className="d-flex" role="search">
                                <input className="form-control me-2" id="content" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form> 
                        </div>
                    </div>
                </nav>
            </div>
        );
}

export default Navbar;