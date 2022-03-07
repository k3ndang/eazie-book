import React from 'react';
import './AboutPage.css'

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {

  return (
    
    

      <div className='container'>
    
    <div className="infoBoxList">
          <div className="infoTitle"> 
            <h2 className="listInfoHeading"> Technologies Implemented </h2>
            <h3 className="listItem" > • React js / Material UI</h3>
            <h3 className="listItem" > • Node js  / PostgreSQL  </h3>
            <h3 className="listItem" > • Javascript / Html / CSS </h3>
            
          <img 
                src= {'https://www.upsnowmobiling.com/images/Snowmobile_Rentals.jpg'}
                width= {500}
                height={420}
                className="OwlPic"
            />
          </div>
      
      <div className="infoTitle"> 
        <h2 className="infoHeading"> Eazie-Book</h2>
        <h3 className="topBorder" > An app built to simplify booking recreational vehicles and leisure boats for small businesses </h3>
        <h3 className="listItem" > </h3>
        <h3 className="listItem" > </h3>
      <img 
            src= {'https://img.grouponcdn.com/deal/tvs3vCXXs1Pc9UYqESzHXvMFM6F/tv-1164x874/v1/c870x524.jpg'}
            width= {700}
            height={400}
            className="OwlPic"
        />
      </div>
        
          <div className="infoTitle"> 
            <h2 className="listInfoHeading"> Trying to List Your Rental Equipment to ook Via Eazie-Book? </h2>
         
  
            <h3 className="listItem" > Contact Dean via email at Dean@calldeans.com  </h3>
          <img 
                src= {'https://www.destinvacationboatrentals.com/wp-content/uploads/2013/04/IMG_3081.jpg'}
                width= {500}
                height={450}
                className="OwlPic"
            />
          </div>
          </div>
          <div className="footerInfo">
            <h3> App Creators :: Ken Dang, Jonathan Normand, Leah Grim, Toivo Hannigan</h3>
           
          </div>
    </div>
      
  )
}

export default AboutPage;
