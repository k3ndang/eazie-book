import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

function LandingPage() {
  const history = useHistory();

  const boatPage = () => {
    console.log('boat button');
    history.push('/watercraft');
  }
  
  const rvPage = () => {
    console.log('rv button');
    history.push('/allTerrain');
  }
  return (
    <div className="container">
      <div className="grid">
        <div className="grid-col grid-col_6">
        <div className="infoTitle"> 
        <h2 className="listInfoHeading">Watercraft</h2>
      <img 
            src= {'https://www.destinvacationboatrentals.com/wp-content/uploads/2013/04/IMG_3081.jpg'}
            width= {500}
            height={450}
            className="OwlPic"
            onClick={boatPage}
        />
      </div>
        </div>
        <div className="grid">
          <div className="grid-col grid-col_6">
          <div className="infoTitle">
            <h2 className="listInfoHeading">All Terrain Vehicles</h2>    

            <img 
              src= {'https://utvactionmag.com/wp-content/uploads/2015/06/ATV-SSV-Family-Shot-in-Woods_MY16_tif.jpg'}
              width={500}
              height={450}
              className="OwlPic"
              onClick={rvPage}
            />
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
