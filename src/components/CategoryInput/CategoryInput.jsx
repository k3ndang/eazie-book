import * as React from 'react';

import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function CategoryInput() {
// homes boats and rvs
// is in figma, not in scope doc 

    return (
        <>
            <h1>this is the category input thing</h1>
            <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Category</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Age"
                    >
                        <MenuItem value={'Homes'}>Homes</MenuItem>
                        <MenuItem value={'Boats'}>Boats</MenuItem>
                        <MenuItem value={'Rvs'}>Rvs</MenuItem>
                    </Select>
                </FormControl>
            </Box>

        </>
    )
}

export default CategoryInput;