import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Button, Grid } from "@material-ui/core";
import TextField from '@mui/material/TextField';
import Input from '@mui/material/Input';
import Box from '@mui/material/Box';
import Autocomplete from '@mui/material/Autocomplete';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

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

    const clients = useSelector(store => store.companyName);
    const categoryList = useSelector(store => store.categoryList);

    const [newBookableItem, setNewBookableItem] = useState({
        title:    '',
        summary:  '',
        details:   '',
        rate:     '',
        unitTime: '',
        location: '',
        categoryId: ''
    });

    const [fileData, setFileData] = useState();

    const[ clientId, setClientId] = useState('');

    useEffect(() => {
        dispatch({
            type: 'FETCH_COMPANY_NAME'
        });

        dispatch({
            type: 'FETCH_CATEGORIES'
        });
    }, []);
    
    const handleChange = (evt, property) => {
        setNewBookableItem({...newBookableItem, [property]: evt.target.value})
    };

    
    const addNewBookableItem = (evt) => {
        evt.preventDefault();

        
        dispatch({
            type: 'POST_BOOKABLE_ITEM',
            payload:  {
                newBookableItem: newBookableItem,
                clientId: clientId
            }
        })
        /* const data = new FormData();
        data.append('file', fileData)
        const imageToSend = {
            data: data,
            newBookableItem: newBookableItem
        }
        dispatch({
            type: 'POST_PHOTO', 
            payload: imageToSend
        }) */

    }

    const goBack = () => {
        history.push('/viewBookableItem')
    }


    return(
        <>
        <button onClick={goBack}>Back</button>


            <Box
                onSubmit={addNewBookableItem}
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 2, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <Autocomplete
                    options={clients}
                    sx={{width:350}}
                    value={clients.label}

                    renderInput={(params) => <TextField {...params} label="Clients (Company Name)" />}
                    onChange={(event, newValue) => setClientId(newValue.id)}
                />
                <label>Choose a category for the Item<Box sx={{ minWidth: 120}}>
                    <FormControl sx={{ m: 1, minWidth: 150 }}>
                        <InputLabel id="demo-simple-select-autowidth-label">Category</InputLabel>
                        <Select
                            labelId="demo-simple-select-autowidth-label"
                            id="demo-simple-select-autowidth"
                            label="Category"
                            onChange={(evt) => handleChange(evt, "categoryId")}
                        >
                            {categoryList.map(category => (
                                <MenuItem value={category.id} key={category.id} onChange={(evt) => handleChange(evt, "categoryId")}>{category.name}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Box></label>
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
                   {/*  <Button
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
                    </Button> */}
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