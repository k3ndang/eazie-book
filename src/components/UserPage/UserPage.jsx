import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';
import './UserPage.css'


function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  return (
    <div className="containerBtn">
      <div className="adminHeader"> 
      <div className="welcomeBox">
      <h2>Welcome, {user.username}!</h2>
      <p className="idBox">Your ID is: {user.id}</p>
      <p className= "idBox"> Your Auth-Level is: {user.authLevel}</p>
      <LogOutButton className="btn" />
      </div>

      <div className="addClientButton">  
      <button className="addClientButton" > Add Client </button>
      </div>
      </div>

      {user.authLevel === 'admin' && (
          <>
            <div className='adminTableContainer'> 
            <h3 className="adminTableTitle"> Current List of Clients</h3>
            <div class="table-responsive">
                <table class="table">
                <thead>
                  <tr>
                    <th scope="col" className="col">Company</th>
                    {/* include user.firstName & user.lastName */}
                    <th scope="col" className="col">Name </th>
                    <th scope="col" className="col">Phone Number</th>
                    <th scope="col" className="col">Email</th>
                    <th scope="col"className="col">Item</th>
                    <th scope="col"className="col">Address</th>
                    <th scope="col"className="col">Link to Website</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="col"> 
                    <th scope="row">Emeralds</th>
                    <td > Emerald Goshawk</td>
                    <td>612-651-2771</td>
                    <td>emerald@goshawk.com</td>
                    <td> Bookable Item : Cats   </td>
                    <td> 123 Emerald Ave  (city, state , zip)</td>
                    <td> www.emerald.com</td>
                  </tr>
                 
                </tbody>
                </table>
              </div>
              </div>
          </>
        )}
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
