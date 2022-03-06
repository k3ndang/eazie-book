import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';

function Nav() {
  const user = useSelector((store) => store.user);


  /* 
  Links we think we will use
  ADMIN === { Home, Client Table, LogOut}
      * Home links to admin landing page
      * Client Table links to client table page
      * LogOut links to the login page

  CLIENT === { Home, LogOut}
      * Home links to the client landing page
      * LogOut links to the login page

  RENTER === {Home, Reservations, LogOut}
      * Home links to the renter landing page
      * Reservations links to the renter reservation info page
      * LogOut links to the login page
  */

  return (
    <div className="nav">
      <Link to="/home">
        <h2 className="nav-title">Eazie-Book</h2>
      </Link>
      <div>
        {/* If no user is logged in, show these links */}
        {!user.id && (
          // If there's no user, show login/registration links
          <Link className="navLink" to="/login">
            Login / Register
          </Link>
        )}

        {/* If a user is logged in, show these links */}
        {user.id && (
          <>
            <Link className="navLink" to="/user">
              Home
            </Link>

            <Link className="navLink" to="/info">
              Info Page
            </Link>

            <LogOutButton className="navLink" />
          </>
        )}
  {/* ADMIN === { Home, Client Table, LogOut}
      * Home links to admin landing page
      * Client Table links to client table page
      * LogOut links to the login page */}
        {user.authLevel === 'renter' && (
          <>
             <div className="dropdown">
            <button className="dropbtn"> Manage </button>
            <div className="dropdown-content">
              <Link to="/">< a href="#"> Add a Client </a> </Link>
              <Link to="/"> List of Registered Clients </Link>
            </div>
          </div>
              <div className="dropdown">
            <button className="dropbtn"> Go To List</button>
            <div className="dropdown-content">
              <Link to="/">< a href="#"> Life List </a> </Link>
              <Link to="/">< a href="#"> Dream List </a> </Link>
            </div>
            </div>
         
          </>
        )}

        <Link className="navLink" to="/about">
          About
        </Link>
      </div>
    </div>
  );
}

export default Nav;
