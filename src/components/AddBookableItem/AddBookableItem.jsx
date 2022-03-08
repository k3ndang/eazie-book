import React, { useState } from 'react';
import { Button, Grid } from "@material-ui/core";
import TextField from '@mui/material/TextField';
import Input from '@mui/material/Input';
import Box from '@mui/material/Box';

import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";


import { useDispatch } from "react-redux";
import './AddBookableItem.css';


function addBookableItem () {
    /**
    Need a paramId = clientId 
    this would go into dispatch payload with newBookableItem
    */

    const dispatch = useDispatch();
    const params = useParams();
    const history = useHistory();

    const [newBookableItem, setNewBookableItem] = useState({
        title:    '',
        summary:  '',
        details:   '',
        rate:     '',
        unitTime: '',
        location: '',
        categoryId: 1,
        clientId:    1,
    });

    const [fileData, setFileData] = useState()
    
    const handleChange = (evt, property) => {
        setNewBookableItem({...newBookableItem, [property]: evt.target.value})
    };

    
    const addNewBookableItem = (evt) => {
        evt.preventDefault();

        
        dispatch({
            type: 'POST_BOOKABLE_ITEM',
            payload:  newBookableItem
        })
        const data = new FormData();
        data.append('file', fileData)
        dispatch({
            type: 'POST_PHOTO', 
            payload: {
                data: data,
                id: newBookableItem.clientId
            }
        })

    }


    return(
        <>
            <Box
                onSubmit={addNewBookableItem}
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 2, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <Grid className="bookableForm">
                    <Input
                        required
                        type="text"
                        placeholder="Title"
                        value={newBookableItem.title}
                        onChange={(evt) => handleChange(evt, "title")}
                    />
                    <TextField
                        required
                        type="text"
                        label="Summary"
                        color="secondary"
                        focused
                        multiline
                        rows={4}
                        variant="outlined"
                        value={newBookableItem.summary}
                        onChange={(evt) => handleChange(evt, "summary")}
                    />
                    <Input
                        required
                        type="text"
                        placeholder="UnitTime"
                        value={newBookableItem.unitTime}
                        onChange={(evt) => handleChange(evt, "unitTime")}
                    />
                    <Input
                        required
                        type="text"
                        placeholder="Location"
                        value={newBookableItem.location}
                        onChange={(evt) => handleChange(evt, "location")}
                    />
                    <Input
                        required
                        
                        type="integer"
                        placeholder="Rate"
                        value={newBookableItem.rate}
                        onChange={(evt) => handleChange(evt, "rate")}
                    />
                    <TextField
                        required
                        type="text"
                        label="Detail"
                        color="secondary"
                        focused
                        multiline
                        rows={4}
                        variant="outlined"
                        value={newBookableItem.details}
                        onChange={(evt) => handleChange(evt, "details")}
                    />
                    <Button
                        type='file'
                        onChange={(e) => setFileData(e.target.files[0])}
                        variant="outlined"
                        color="primary"
                        size="small"
                        component='label'
                    >Upload a Photo
                    <input 
                    
                    type='file'
                    hidden
                    />
                    </Button>
                    <Button
                        type="submit"
                        variant="outlined"
                        color="primary"
                        size="small"
                    >
                        Submit
                    </Button>
                </Grid>
            </Box>
        </>
    )
};

export default addBookableItem;