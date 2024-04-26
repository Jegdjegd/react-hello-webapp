import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-dark mb-3 sticky-top">
      <div className="container-fluid justify-content-around mr-5">
  
        <div className="ml-auto">
          <Link
            to="/addcontact"
            className="btn btn-primary navbar-brand text-white shadow bg-body-tertiary rounded mt-1 mb-2"
            style={{ transition: "all 0.5s ease" }}
          >
            Agregar nuevo contacto
          </Link>
        </div>
      </div>
    </nav>
  );
};
