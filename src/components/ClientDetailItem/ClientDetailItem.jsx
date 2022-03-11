import { useSelector, useDispatch } from "react-redux";
import React, { useState, useEffect } from "react";
import { useHistory, useParams } from 'react-router-dom';
import './ClientDetailItem.css'

function ClientDetailItem(){
    // retrieve selected client item from store
    const selectedItem = useSelector((store)=> store.clientSelectedItem)
     console.log('selectedItem is', selectedItem);
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

        </>
    )
};
export default ClientDetailItem; 