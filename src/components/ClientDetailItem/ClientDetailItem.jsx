import { useSelector, useDispatch } from "react-redux";
import React, { useState, useEffect } from "react";
import { useHistory, useParams } from 'react-router-dom';
import './ClientDetailItem.css'

function ClientDetailItem(){
    // retrieve selected client item from store
    const selectedItem = useSelector((store)=> store.clientSelectedItem)
     console.log('selectedItem is', selectedItem[0]);
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
        
        <h1 className="ClientDetailPageTitle"> Here we are in the client detail item Page</h1>

       
        {/* <div className= "detailPageTitle">
        {selectedItem.map((item, index => {
     
        <h2 key={index}> Name of Company: {item.companyName} </h2>
   
        <img 
            src= {item.url}
            width= {600}
            height={450}
        />
         <div className="ClientDetailPageContactInfo" > 
            <h3> Contact Information: </h3>
            <h3> Address of Equipment: {item.address}, {item.location}, {item.zipcode} </h3>
            <h3> Phone Number: {item.phoneNumber} </h3> 
          
        </div> */}
       
         <div> 
            <h3> Item Information: </h3>
         </div>

        {/* </div>
        ))} */}
        </>
    )
};
export default ClientDetailItem; 