import * as React from 'react';

import {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { useHistory, Link, useParams } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import './ViewBookableItem.css';

function ViewBookableItem() {
    const dispatch = useDispatch();
    const history = useHistory();
    const params = useParams();
    console.log('client Id', params.id)

    const rows = useSelector((store) => store.bookableItem.bookableItemReducer);
    console.log('bookableItem list from store', rows)

    const selectedClientItem = useSelector((store) => store.selectedClientItem);

    /*  const fetchBookableItem = () => {
         dispatch({ 
             type: 'FETCH_BOOKABLE_ITEM' 
         })
     }; */

    useEffect(() => {
        dispatch({
            type: "FETCH_CLIENT_BOOKABLE_ITEM",
            payload: params.id
        })
    }, [params.id]);

    const addItem = () => {
        history.push('/addBookableItem')
    }

    const goBack = () => {
        history.push('/clients');
    }

    return (
        <>
            <Button variant="outlined" color="primary" onClick={goBack}>Back</Button>
            <Button variant="outlined" color="primary" onClick={addItem}>Add New Item</Button>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Item</TableCell>
                            <TableCell align="center">Summary</TableCell>
                            <TableCell align="center">Details</TableCell>
                            <TableCell align="center">Rate</TableCell>
                            <TableCell align="center">Time</TableCell>
                            <TableCell align="center">Location</TableCell>
                            <TableCell align="center">Category</TableCell>
                            <TableCell align="center">Company Name</TableCell>
                            <TableCell align="center"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {selectedClientItem.map((item, index) => (

                            <TableRow
                                key={index}
                                sx={{ border: 2, minWidth: 100 }}
                            >
                                <TableCell component="th" scope="row">
                                    {item.title}
                                </TableCell>
                                <TableCell align="center">{item.summary}</TableCell>
                                <TableCell align="center">{item.detail}</TableCell>
                                <TableCell align="center">{item.rate}</TableCell>
                                <TableCell align="center">{item.unitTime}</TableCell>
                                <TableCell align="center">{item.location}</TableCell>
                                <TableCell align="center">{item.name}</TableCell>
                                <TableCell align="center">{item.companyName}</TableCell>
                                <TableCell align="center"><Link to={`/addPhotos/${item.id}`} >Add Photo</Link></TableCell>
                                <TableCell align="center">
                                    <Link
                                        to={`/editBookableItemForm/${item.id}`}
                                    >
                                        Edit
                                    </Link>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )

}

export default ViewBookableItem;