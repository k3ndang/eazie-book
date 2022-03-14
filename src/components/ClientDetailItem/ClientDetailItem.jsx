import { useSelector, useDispatch } from "react-redux";
import React, { useState, useEffect } from "react";
import { useHistory, useParams } from 'react-router-dom';
import './ClientDetailItem.css'

function ClientDetailItem(){
    // retrieve selected client item from store
    const selectedItem = useSelector((store)=> store.clientSelectedItem)
     console.log('selectedItem is', selectedItem.id);
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
    return(
        <>
        <div className="ClientDetailContainer"> 
        <h2 className="ClientDetailPageCompanyName"> Company Name:</h2> <div className= "ClientDetailPageCompanyName"> {selectedItem.companyName} </div>
        <br/>
        <br/>
       <div> 
        <img 
            src= {selectedItem.url}
            width= {400}
            height={400}
        />
      </div>
      
       
         <div className="ClientDetailItemInfo"> 
            <h3 className="ClientDetailInfoTitle"> Item Information: </h3>
            <h3 className="ClientDetailInfo"> Category: </h3> <div className="ClientDetailInfo"> {selectedItem.name}</div>  <br/>
            <h3 className="ClientDetailInfo"> Summary: </h3> <div className="ClientDetailInfo"> {selectedItem.summary}</div>  <br/>
            <h3 className="ClientDetailInfo"> Rate: </h3> <div className="ClientDetailInfo"> ${selectedItem.rate} per {selectedItem.unitTime}</div>  <br/>
            <h3 className="ClientDetailInfo"> Details Regarding Rental: </h3> <div className="ClientDetailInfo"> {selectedItem.detail} </div>  <br/>
         </div>
         <div className="ClientDetailPageContactInfo" > 
            <h3 className="ClientDetailInfoTitle"> Contact Information: </h3>
            <h3 className="ClientDetailContactInfo"> Address of Equipment: </h3>   <div className="ClientDetailContactInfo"> {selectedItem.address}, {selectedItem.location}, {selectedItem.zipcode} </div> <br/>
            <h3 className="ClientDetailContactInfo"> Phone Number: </h3>           <div className="ClientDetailContactInfo"> {selectedItem.phoneNumber} </div>
          
        </div> 
        </div>
        </>
    )
};
export default ClientDetailItem; 