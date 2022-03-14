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

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';


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

        const [parentId, setParentId] = useState('');
        const [newItem, setNewItem] = useState('');

        console.log('parentId is,', parentId);
        console.log('newItem is', newItem);

        useEffect(()=> {
            dispatch({
            type: 'FETCH_ITEM_LIST'
            });

            dispatch({
                type: 'FETCH_CATEGORIES'
            })
        }, []);

        const linkItem = () => {
            dispatch({
                type: "LINK_ITEM",
                payload: {
                    itemId: newItem,
                    parentId: parentId
                }
            })
        }

    return (
        <>
         <h1 className="categoryInputTitle">Assign Category For Bookable Item Here </h1>
            <br></br>
            <label> Choose a Category for the Specified Item <Box sx={{ minWidth: 120 }}>
                <br></br>
                <FormControl class="adminCategoryInputContainer">
                    <InputLabel id="demo-simple-select-label">Category</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Age"
                        onChange= {event => setParentId(event.target.value)}
                    >
                        {categoryList.map(category => (
                            <MenuItem value={category.id} key={category.id} onChange= {event => setParentId(event.target.value)}>{category.name}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Box></label>  
           <br></br>
           {/* Dropdown of bookable items that have been registered with the site */}
           <Autocomplete
            options= {itemList}
            sx={{ width: 350 }}
            value= {itemList.label}
            
            renderInput={(params) => <TextField {...params} label="Bookable Items" />}
            onChange={(event, newValue) => setNewItem(newValue.id)}
            />     

            <button onClick={linkItem}>Link Item To Category</button>
            </>
    )
}

export default CategoryInput;