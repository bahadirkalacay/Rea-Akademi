import React from "react";
import { Button } from "react-bootstrap";
import "./Navbar.css"

function Navbar() {
  return (
    <div className="container nav">
      <Button href="/" variant="outline-primary">Home</Button>
      <Button href="/add" style={{marginLeft: "15px" }} variant="outline-warning">Add Book</Button>
    </div>
  );
}

export default Navbar;
