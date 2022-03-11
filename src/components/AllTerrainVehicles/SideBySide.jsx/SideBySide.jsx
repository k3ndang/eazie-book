import React, { useState, useEffect } from 'react';
import { useHistory, useSelector } from 'react-router-dom';

import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';


function SideBySide(){

    useEffect(() => {
        dispatchEvent({
            type: 'FETCH_SIDEBYSIDE'
        })
    }, []);

    const sideBySide = useSelector(store => store.sideBySide);

    return(
        <>
        <Card sx={{ maxWidth: 345}}>
            <CardActionArea>
            {sideBySide.map(item => (
            <>
            <CardMedia
                components="img"
                height="140"
                src={item.url}
                alt={item.title}
            />
            <CardContent>
                <Typography gutterBottom variant="h5">
                {item.title}    
                </Typography>
                <Typography gutterBottom variant="h5">
                    {item.summary}
                </Typography>
            </CardContent>
            </>
            ))}
            
            </CardActionArea>
        </Card>
        </>
    )
}

export default SideBySide;