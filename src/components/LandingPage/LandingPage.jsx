import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

function LandingPage() {
  const [heading, setHeading] = useState('Welcome');
  const history = useHistory();

  const onLogin = (event) => {
    history.push('/login');
  };

  return (
    <div className="container">
      <h2>{heading}</h2>

      <div className="grid">
        <div className="grid-col grid-col_8">
        <div className="infoTitle"> 
        <h2 className="listInfoHeading"> Looking to List Your Rental Equipment on Eazie-Book? </h2>
     

        <h3 className="listItem" > Contact Dean via email at Dean@calldeans.com  </h3>
      <img 
            src= {'https://www.destinvacationboatrentals.com/wp-content/uploads/2013/04/IMG_3081.jpg'}
            width= {500}
            height={450}
            className="OwlPic"
        />
      </div>
        </div>
        <div className="grid-col grid-col_4">
          <RegisterForm />

          <center>
            <h4>Already a Member?</h4>
            <button className="btn btn_sizeSm" onClick={onLogin}>
              Login
            </button>
          </center>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
