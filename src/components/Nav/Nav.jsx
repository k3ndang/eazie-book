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
          <>
          <Link className="navLink" to="/login">
            Login / Register
          </Link>
          <div className="dropdown">
          <Link className="dropbtn" to="/about">
           About
          </Link>
          </div>
          </>
        )}

        {/* If a user is logged in, show these links */}
        {user.id && (
          <>
            
            {/* <Link className="navLink" to="/info">
              Info Page
            </Link> */}

            
          </>
        )}
  {/* ADMIN === { Home, Client Table, LogOut}
      * Home links to admin landing page
      * Client Table links to client table page
      * LogOut links to the login page */}
        {user.authLevel === 'admin' && (
          <>
             <div className="dropdown">
            <button className="dropbtn"> Manage </button>
            <div className="dropdown-content">
              {/* bring admin to input form to enter client details */}
              <Link to="/admin/invite"> Add a Client  </Link>
              {/* bring admin to category form */}
              {/* Could also say "edit bookable categories" */}
              <Link to="/categoryInput"> Edit Categories </Link>
              {/* brings admin to list of clients, perhaps this is redundant */}
              {/* <Link to="/"> Edit Clients </Link> */}
            </div>
          </div>
              <div className="dropdown">
            <button className="dropbtn"> View List</button>
            <div className="dropdown-content">
              <Link to="/clients"> Client List </Link>
              {/* not sure if bookable items is a different page */}
              <Link to="/viewBookableItem"> Bookable Items List </Link>
            </div>
            </div>
            {/* having an about and an info page seems redundant */}
            <div className="dropdown"> 
            <Link className="dropbtn" to="/about">
             About
            </Link>
            </div>
            <LogOutButton className="dropbtn" />
          </>
        )}

{/* RENTER === {Home, Reservations, LogOut}
      * Home links to the renter landing page
      * Reservations links to the renter reservation info page
      * LogOut links to the login page */}
        {user.authLevel === 'renter' && (
          <>
           
            <div className="dropdown">
            <Link className="dropbtn" to="/user">
              Home
            </Link>
            </div>
              <div className="dropdown">
            <button className="dropbtn"> Reservations</button>
            <div className="dropdown-content">
              <Link to="/"> Make A Reservation </Link>
              {/* This should be the list of everyone that has rented bookable items  */}
              <Link to="/renterHistory"> View Reservations </Link>
            </div>
            </div>     
            <div className="dropdown">
          <Link className="dropbtn" to="/about">
           About
          </Link>
          </div>       
         
            <LogOutButton className="dropbtn" />
          </>
        )}
    
  {/* CLIENT === { Home, LogOut}
      * Home links to the client landing page
      * LogOut links to the login page */}
         {user.authLevel === 'client' && (
          <>
           
            <div className="dropdown">
            <Link className="dropbtn" to="/user">
              Home
            </Link>
            </div>
              <div className="dropdown">
            <button className="dropbtn"> View List</button>
            <div className="dropdown-content">
              <Link to="/clientBookableItems"> Bookable Items  </Link>
              {/* This should be the list of everyone that has rented bookable items  */}
              <Link to="/renterInfo"> Renter Info </Link>
            </div>
            </div>
            {/* having an about and an info page seems redundant */}
            <div className="dropdown"> 
            <Link className="dropbtn" to="/about">
             About
            </Link>
            </div>
         
            <LogOutButton className="dropbtn" />
          </>
        )}
      </div>
    </div>
  );
}

export default Nav;
