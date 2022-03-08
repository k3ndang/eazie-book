import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './CategoryInput.css'
import Autocomplete from '@mui/material/Autocomplete';

function CategoryInput() {
// homes boats and rvs
// is in figma, not in scope doc 
    //hooks
    const dispatch = useDispatch();
        //grab the list of item names from the reducer 
        const itemList = useSelector(store=> store.itemList);
        const categoryList = useSelector (store=> store.categoryList);
        console.log('item list reducer is ', itemList);
        
       
        //useState variables
        let [parentCategory, setParentCategory]= useState('');


        useEffect(()=> {
            dispatch({
            type: 'FETCH_ITEM_LIST'
            });
        }, []);

    return (
        <>
         <h1 className="categoryInputTitle">Assign Category For Bookable Item Here </h1>
           <label> <h3 className="setParentCategory"> Set Parent Categories </h3>
            <input
            required
            type="text"
            name= "categoryParents"
            value= {parentCategory}
            onChange= {(e)=> {
                setParentCategory(e.target.value)
            }}
            />
            </label>
           
           
           {/* Dropdown of bookable items that have been registered with the site */}
           <Autocomplete
            options= {itemList}
            sx={{ width: 350 }}
            value= {itemList.label}
            
            renderInput={(params) => <TextField {...params} label="Bookable Items" />}
            onChange={(e, newValue) => {
                            dispatch ({ type: 'SET_CATEGORY_ID',
                                        payload: newValue.id }) }}
            
        />
           
           <label> Choose a Category for the Specified Item <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Category</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Age"
                        onChange= {(e, newValue) => { 
                            dispatch({
                                type: 'SET_CATEGORY_ID',
                                payload: newValue.id
                            })

                        }}
                    >
                        <MenuItem value={'Homes'}>Homes</MenuItem>
                        <MenuItem value={'Boats'}>Boats</MenuItem>
                        <MenuItem value={'Rvs'}>Rvs</MenuItem>
                    </Select>
                </FormControl>
            </Box></label>
           
            
        </>
    )
}

export default CategoryInput;