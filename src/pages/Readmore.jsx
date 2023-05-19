import React from "react";
import "./Readmore.css";
import { Link } from "react-router-dom";

function Readmore() {
  return (
    <div className="Readmore--container">
      <h1>Ooops</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
        recusandae quia porro nisi quae velit in. Commodi tenetur laudantium
        dignissimos unde modi! Provident, vero placeat sequi doloribus eum rerum
        porro!
      </p>
      <Link className="readmore--button" to="/">Home</Link>
    </div>
  );
}

export default Readmore;
