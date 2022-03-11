import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';


function AllTerrainVehicles(){

    const dispatch = useDispatch();
    const history = useHistory();

    const categoryId = useSelector(store => store.categoryList);
    console.log('categoryId is', categoryId);

    useEffect(() => {
        dispatch({
            type: 'FETCH_CATEGORIES'
        })  
    }, [])

   

    return(
        <>
       {/*  <div className="atv">
            <Card sx={{ maxWidth: 345}}>
                <CardActionArea>
                <CardMedia 
                    components="img"
                    height="140"
                    src="https://cfmotousa.com/Portals/0//SunBlogNuke/-1/atvbuddy.jpg"
                     alt="atv"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        ATV's
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                        PLACEHOLDER TEXT
                    </Typography>
                </CardContent>
                </CardActionArea>
                    <CardActions>
                        <Button>

                        </Button>
                    </CardActions>
            </Card>
        </div> */}


        <div className="container">
        <div className="grid">
        <div className="grid-col grid-col_6">
        <div className="infoTitle">
            <h2 className="listInfoHeading">ATV's</h2>
            <img
                src={'https://powersports.honda.com/-/media/products/segment/atv/atv-assets/trx90x-750x750.jpg'}
                width={500}
                height={450}
                className="OwlPic"
            />    
        </div>    
        </div>
        <div className="grid">
        <div className="gird-col grid-col_6">
        <div className="infoTitle">
            <h2 className="listInfoHeading">Side-by-Side's</h2>
            <img
                src={'https://cdn.dealerspike.com/imglib/v1/800x600/imglib/trimsdb/14859321-0-97219301.jpg'}
                width={500}
                height={450}
                className="OwlPic"
                onClick={event => history.push(`/sidebyside/${categoryId[6]?.id}`)}
            />    
        </div>
        </div>    
        </div>   
        </div>
        </div>
        </>
    )
}

export default AllTerrainVehicles;