import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Navbar({ className }) {
  return (
      <div className={className}>
    <nav>
        <ul>
      <li className="list">
        <Link to="/" className="btn-link-privacy">
          <small>Home</small>
        </Link>
      </li>
      <li className="list">
        <Link to="/target" className="btn-link-privacy">
          <small>target</small>
        </Link>
      </li>
      <li className="list">
        <Link to="/show-target" className="btn-link-privacy">
          <small>ShowTarget</small>
        </Link>
      </li>
      <li className="list">
        <Link to="/exercise-user" className="btn-link-privacy">
          <small>exercise</small>
        </Link>
      </li>
      <li className="list">
        <Link to="/food" className="btn-link-privacy">
          <small>Food</small>
        </Link>
      </li>
      <li className="list">
        <Link to="/save-calories" className="btn-link-privacy">
          <small>savecalday</small>
        </Link>
      </li>
      <li className="list">
        <Link to="/chart" className="btn-link-privacy">
          <small>chartcalories</small>
        </Link>
      </li>
      </ul>
    </nav>
    </div>
  );
}

Navbar.propTypes = {
  className: PropTypes.string.isRequired,
};

export default styled(Navbar)`
  * {
    padding: 0;
    margin: 0;
    list-style:none;
    text-decoration:none;
    list-style:none;
   box-sizing:border-box;
  }

  nav {
    padding-left:35.25rem;
    background-color: #2bc592;
    height: 80px;
    width: 100%;
    margin-bottom: 5rem;


  }
  

  nav ul{
      
  }
  nav ul li {
display:inline;
line-height:80px;
margin: 0 5px;
  }
  nav ul li small{
 color:white;
 font-size: 17px;
 padding: 7px 13px;
 border-radius:3px;
 text-transform:uppercase;
  }
  a:active,a:hover{
      background-color: #54e7aa;
      transition:.5s;
      padding:10px;
 border-radius:30px;

  }
`;
