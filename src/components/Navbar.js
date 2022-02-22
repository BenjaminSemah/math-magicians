import React from 'react';
import { Outlet, Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="topbar">
      <div className="inside--nav">
        <h2>Math Magicians</h2>
        <nav className="nav--links">
          <Link className="nav--item bod" to="/home">Home </Link>
          <Link className="nav--item bod" to="/calculator">Calculator </Link>
          <Link className="nav--item" to="/quote">Quote</Link>
        </nav>
      </div>
      <Outlet />
    </div>
  );
}
