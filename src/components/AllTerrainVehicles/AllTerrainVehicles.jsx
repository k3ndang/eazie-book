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

    const category = useSelector(store => store.categoryList);
    console.log('categoryList', category);

    useEffect(() => {
        dispatch({
            type: 'FETCH_CATEGORIES'
        })  
    }, []);

   

    return(
        <>
        <div className="atv">
        <Card sx={{ maxWidth: 345}}>
            <CardMedia
                component="img"
                alt="boat"
                height="140"
                src="https://powersports.honda.com/-/media/products/segment/atv/atv-assets/trx90x-750x750.jpg"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                ATV
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Tug, deck boat, dingy, lifeboat, sailboat, cuddy, 
                pontoon, ferry, houseboat, Center Console Boat, bass boat, bay boat, 
                bowrider, Convertible Fishing Boat, Dual console boat, catamaran, 
                inflatable boats, utility boat and yacht.
            </Typography>
            </CardContent>
            <CardActions>
                <Button 
                    size="small"
                    onClick={(evt) => history.push(`/atv/${category[6]?.id}`)}
                >
                    See More
                </Button>
            </CardActions>
        </Card>
        </div>
        <div className="sideBySide">
        <Card sx={{ maxWidth: 345}}>
            <CardMedia
                component="img"
                alt="boat"
                height="140"
                src="https://cdn.dealerspike.com/imglib/v1/800x600/imglib/trimsdb/14859321-0-97219301.jpg"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                Side-By-Side
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Tug, deck boat, dingy, lifeboat, sailboat, cuddy, 
                pontoon, ferry, houseboat, Center Console Boat, bass boat, bay boat, 
                bowrider, Convertible Fishing Boat, Dual console boat, catamaran, 
                inflatable boats, utility boat and yacht.
            </Typography>
            </CardContent>
            <CardActions>
                <Button 
                    size="small"
                    onClick={(evt) => history.push(`/sidebyside/${category[5]?.id}`)}
                >
                    See More
                </Button>
            </CardActions>
        </Card>
        </div>
        </>
    )
}

export default AllTerrainVehicles;