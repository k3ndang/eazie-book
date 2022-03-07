import React from 'react';
import { Button, Grid } from "@material-ui/core";
import TextField from '@mui/material/TextField';
import Input from '@mui/material/Input';
import Box from '@mui/material/Box';
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import './AddBookableItem.css';


function addBookableItem () {
    /**
    Need a paramId = clientId 
    this would go into dispatch payload with newBookableItem
    */

    const dispatch = useDispatch;
    const history = useHistory;

    const [newBookableItem, setNewBookableItem] = useState({
        title:    '',
        summary:  '',
        detail:   '',
        rate:     '',
        unitTime: '',
        location: '',
        categoryId: '',
    });

    const handleChange = (evt, property) => {
        setNewBookableItem({...newBookableItem, [property]: evt.target.value})
    };

    const addNewBookableItem = (evt) => {
        evt.preventDefault();
        // dispatch({
        //     type: 'ADD_NEW_BOOKABLE_ITEM',
        //     payload: {

        //     }
        // })
    }
    return(
        <div>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 2, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <Grid className="bookableForm">
                    <div>
                        <Input
                            required
                            type='text'
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
                            type='text'
                            placeholder="UnitTime"
                            value={newBookableItem.unitTime}
                            onChange={(evt) => handleChange(evt, "unitTime")}
                        />
                        <Input
                            required
                            type='text'
                            placeholder="Location"
                            value={newBookableItem.location}
                            onChange={(evt) => handleChange(evt, "location")}
                        />
                    </div>
                    <div>
                        <Input
                            required
                            type='integer'
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
                            value={newBookableItem.detail}
                            onChange={(evt) => handleChange(evt, "detail")}
                        />
                        <Input
                            required
                            type='integer'
                            placeholder="Category"
                            value={newBookableItem.categoryId}
                            onChange={(evt) => handleChange(evt, "categoryId")}
                        />
                        <Button
                            type="submit"
                            variant="outlined"
                            color="primary"
                            size="small"
                        >
                            Submit
                        </Button>
                    </div>
                </Grid>
                <div className='submitBtn'>
                    
                </div>
            </Box>
        </div>
    )
};

export default addBookableItem;