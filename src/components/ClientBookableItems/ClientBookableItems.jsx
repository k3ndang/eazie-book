import React, { useState, useEffect } from "react";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from 'react-router-dom';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import './ClientBookableItem.css'

function ClientBookableItems() {
    //Reducers 
    const itemData = useSelector(store=> store.clientList);
    console.log('itemData is', itemData);
  //  console.log('client list contains', clientList);
    //Hooks
      const dispatch = useDispatch();
      const history = useHistory();
      const params = useParams(); 

    //client selects an image of what they want to book, and sends "item" to handleSelectedItem
    function handleSelectedItem(item){
        //declare a dispatch to send the selected item to the selectedItem reducer 
       dispatch({
           type: 'SET_CLIENT_SELECTED_ITEM',
           payload: item, params
       })
       //once the item object and params are sent to the detail Item reducer, send client to /clientBookableItems page
       history.push(`/clientBookableItems/${item.id}`)
   }

     //  FETCH_CLIENT_LIST
     // on page load, run a GET request to grab the clients bookable items from the database
     // list is stored in clientList reducer 
     useEffect(()=> {
        dispatch({
          type: 'FETCH_CLIENT_LIST'
        });
      }, []);
   
    return (
        <>
           {/* itemData[0].companyName breaks page not sure how to render client name once  */}
           {/* Category name not properly rendering  */}
        <h1> {itemData.companyName}, Your List of Bookable items</h1>
            <ImageList sx={{ width: 1300, height: 750 }}>

                 {itemData.map(item => {
                    return (
                        <>
                            <Grid container key={item.img} className="clientListGridContainer">
                                <Grid item>
                                    <ImageListItem>
                                        <img
                                            src={`${item.url}?w=248&fit=crop&auto=format`}
                                            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                            alt={item.title}
                                            loading='lazy'
                                            onClick={() => handleSelectedItem(item)}
                                        />
                                    </ImageListItem>
                                

                                
                                    <h2 className="clientItemHeadingTitle">{item.title}</h2>
                                    <h4 className="clientItemTitle"> Category:</h4>  <div className="clientItemDescription">{item.name} </div> <br/>
                                    <h4 className="clientItemTitle"> Summary: </h4> <div className="clientItemDescription"> {item.summary} </div> <br/>
                                    <h4 className="clientItemTitle"> Rate: </h4> <div className="clientItemDescription">  {item.rate}  per {item.unitTime} </div> <br/>
                                    <h4 className="clientItemTitle"> Location: </h4> <div className="clientItemDescription">  {item.location} </div> <br/>
                                    <h4 className="clientItemTitle"> Details Regarding Rental: </h4> <div className="clientItemDescription"> {item.detail} </div> <br/>
                                </Grid>
                            </Grid>
                        </>
                    )
                })}



            </ImageList>
        </>
    )
}

export default ClientBookableItems;