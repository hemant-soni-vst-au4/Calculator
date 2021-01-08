import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link to="/" className="navbar-brand">
              Math Magician
            </Link>
          </div>
          <ul className="nav navbar-nav navbar-right">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/calcy">Calculator</Link>
            </li>
            <li>
              <Link to="/quote">Quote</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
