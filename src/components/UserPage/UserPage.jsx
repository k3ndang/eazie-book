import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';
import ClientTable from '../ClientTable/ClientTable';
import './UserPage.css'


function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  const history = useHistory();

  const addClient = () => {
    history.push("/admin/invite");
  }
  return (
    <div className="containerBtn">
      <div className="adminHeader"> 
      <div className="welcomeBox">
      <h2>Welcome, {user.username}!</h2>
      <p className="idBox">Your ID is: {user.id}</p>
      <p className= "idBox"> Your Auth-Level is: {user.authLevel}</p>
      <LogOutButton className="btn" />
      </div>
      </div>

      {user.authLevel === 'admin' && (
          <>
            <div className='adminTableContainer'> 
            <div className="table-responsive">
                <ClientTable />
              </div>
              </div>
          </>
        )}
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
