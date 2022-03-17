import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from "react-router-dom";
import { Button, Grid } from "@material-ui/core";
import TextField from '@mui/material/TextField';
import Input from '@mui/material/Input';
import Box from '@mui/material/Box';
import Autocomplete from '@mui/material/Autocomplete';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Stack from "@mui/material/Stack";

import './AddPhoto.css';

function AddPhoto(){
    const dispatch = useDispatch();
    const params = useParams();
    console.log('param is', params);
    const photos = useSelector(store => store.photos);
    console.log('photos are', photos);

    useEffect(() => {
        dispatch({
            type: "FETCH_ITEM_PHOTOS",
            payload: params.id
        })
    }, [params.id])

    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileSelect = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    console.log('id param is', params.id);

    async function handleSubmit(event){


        const formData = new FormData();
        formData.append('selectedFile', selectedFile);
        formData.append('itemId', params.id)
        /* let imageDataToSend = {
            formData: formData,
            itemId: params.id
        } */

        dispatch({
            type: 'POST_PHOTO',
            payload: formData,
        });
    }

    return(
        <>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <Input
                    type="file"
                    className="form-control-file"
                    name="upload_file"
                    onChange={handleFileSelect}
                />

            <Stack direction="row" spacing={2}>
                <button
                    id="photoSubmit"
                    type="submit"
                    value="Add new Photo"
                >
                Add Photo
                </button>
            </Stack>
            </div>
        </form>    
        {photos.map((photo) => (
            <>
            <Card sx={{display : 'flex', flexDirection: {xs: 'column', md: 'row'}, alignItems : 'center',maxWidth : 300  }}>
                <CardMedia 
                    display="flex"
                    component="img"
                    height="175"
                    image={`${photo.url}`}
                />
            </Card>

            </>
        ))}

        </>
    )
}

export default AddPhoto;