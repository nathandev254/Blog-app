import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

function header() {
  return (
    <div className="header">
      <Link className="Logo" to="/">Blog</Link>
      <ul className="header--items">
        <li><Link to="/">Home</Link></li>
        <li><Link to="readmore">Blog</Link></li>
        <li><Link>Service</Link></li>
        <li><Link>Contact</Link></li>
      </ul>
    </div>
  );
}

export default header;
