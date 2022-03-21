import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';
import ClientTable from '../ClientTable/ClientTable';
import ClientBookableItems from '../ClientBookableItems/ClientBookableItems';
import LandingPage from '../LandingPage/LandingPage';
import './UserPage.css'


function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  const history = useHistory();

  const addClient = () => {
    history.push("/admin/invite");
  }
  return (
    <>
    <div className="containerBtn">
      <h2>Welcome to Eazie Book!</h2>
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
        <div>
        {user.authLevel === 'client' && (
          <>
            <div className='clientTableContainer'>
              <div className="table-responsive">
                <ClientBookableItems />
              </div>
            </div>
          </>
        )}
        </div>
      <div>
        {user.authLevel === 'renter' && (
          <>
          <div className='renterLandingPage'>
            <LandingPage />
          </div></>
        )}
      </div>

    </>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
