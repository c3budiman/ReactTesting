import React from 'react';

class Navbar extends React.Component {
  render() {
    return (
      <div>
      <nav className="navbar navbar-expand-md bg-dark navbar-dark">
        <a className="navbar-brand" href="/">C3budiman</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/topics">Topics</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/profil">Profil</a>
            </li>
          </ul>
        </div>
      </nav>
      </div>
    )
  }
}

export default Navbar;
