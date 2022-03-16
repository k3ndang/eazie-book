import { useSelector, useDispatch } from "react-redux";
import React, { useState, useEffect } from "react";
import { useHistory, useParams } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import './ClientDetailItem.css'

function ClientDetailItem(){
    // retrieve selected client item from store
    const selectedItem = useSelector((store)=> store.clientSelectedItem)
     console.log('selectedItem is', selectedItem.url);
    //Hooks
     const dispatch = useDispatch();
     const params = useParams(); 
     const history = useHistory(); 
    
    //on page load, run a GET request to grab the data from the selected item
     useEffect(()=> {
        console.log('params.id are', params.id);
        dispatch({
          type: 'FETCH_CLIENT_SELECTED_ITEM',
          payload: params.id
        });
      }, [params.id]);

      //function to bring the client to bookable item list page
      function goToClientList(){
        history.push('/clientBookableItems')
      }

      /* function pagination(num){
        setPage(num);

      } */
    return(
        <>
        <div className="ClientDetailContainer"> 

        <h2 className="ClientDetailInfoTitle"> Company Name: </h2> <div className= "ClientDetailInfo"> {selectedItem.companyName} </div>
        <br/>
        <br/>
        
       <div>
        {selectedItem.url?.map((photo, i) => (
          <img
            key={i}
            src={photo}
          />
        ))}
      </div>
      
       
         <div className="ClientDetailItemInfo"> 
            <h3 className="ClientDetailInfoTitle"> Item Information: </h3>
            <h3 className="ClientDetailInfo">  <u> Category:</u> </h3> <div className="ClientDetailInfo"> {selectedItem.name}</div>  <br/>
            <h3 className="ClientDetailInfo"> <u> Summary: </u></h3> <div className="ClientDetailInfo"> {selectedItem.summary}</div>  <br/>
            <h3 className="ClientDetailInfo"> <u> Rate:</u> </h3> <div className="ClientDetailInfo"> ${selectedItem.rate} per {selectedItem.unitTime}</div>  <br/>
            <h3 className="ClientDetailInfo"> <u> Details Regarding Rental: </u></h3> <div className="ClientDetailInfo"> {selectedItem.detail} </div>  <br/>
         </div>
         <div className="ClientDetailPageContactInfo" > 
            <h3 className="ClientDetailInfoTitle"> Contact Information: </h3>
            <h3 className="ClientDetailContactInfo"> Address of Equipment: </h3>   <div className="ClientDetailContactInfo"> {selectedItem.address}, {selectedItem.location}, {selectedItem.zipcode} </div> <br/>
            <h3 className="ClientDetailContactInfo"> Phone Number: </h3>           <div className="ClientDetailContactInfo"> {selectedItem.phoneNumber} </div>
          
        </div> 
        <br/>
        <br/>
        <div className="returnToHome" onClick={goToClientList}>  <h4>  Return to <br/> Bookable Item List </h4>
        <HomeIcon sx={{ fontSize: 50 }} >  </HomeIcon>
        </div>
        
        </div>
        </>
    )
};
export default ClientDetailItem; 