import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class NNavbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">DailyDose</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/about">About</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/business">Business</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/entertainment">Entertainment</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/general">General</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/health">Health</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/science">Science</Link>
                    </li>  
                    <li className="nav-item">
                      <Link className="nav-link" to="/sports">Sports</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/technology">Technology</Link>
                    </li>
                  </ul>
                </div>
            </div>
        </nav>
      </div>
    )
  }
}

export default NNavbar
