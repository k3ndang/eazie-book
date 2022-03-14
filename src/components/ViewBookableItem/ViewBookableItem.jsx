import * as React from 'react';
import {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
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


function ViewBookableItem() {
    const dispatch = useDispatch();
    const history = useHistory();

    const rows = useSelector((store) => store.bookableItem.bookableItemReducer);
    console.log('bookableItem list from store', rows)


    const fetchBookableItem = () => {
        dispatch({ 
            type: 'FETCH_BOOKABLE_ITEM' 
        })
    };

    useEffect(() => {
        fetchBookableItem()
    }, []);

    const addItem = () => {
        history.push('/addBookableItem')
    }

    const goBack = () => {
        history.push('/user');
    }

    return(
        <>
        <Button onClick={goBack}>Back</Button>
        <Button onClick={addItem}>Add New Item</Button>
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
                        <TableCell align="center">categoryId</TableCell>
                        <TableCell align="center">clientId</TableCell>
                        <TableCell align="center"></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row, index) => (
                        <TableRow
                            key={index}
                            sx={{ border: 2, minWidth: 100 }}
                        >
                            <TableCell component="th" scope="row">
                                {row.title}
                            </TableCell>
                            <TableCell align="center">{row.summary}</TableCell>
                            <TableCell align="center">{row.detail}</TableCell>
                            <TableCell align="center">{row.rate}</TableCell>
                            <TableCell align="center">{row.unitTime}</TableCell>
                            <TableCell align="center">{row.location}</TableCell>
                            <TableCell align="center">{row.categoryId}</TableCell>
                            <TableCell align="center">{row.clientId}</TableCell>
                            <TableCell align="center">
                                <Link 
                                    to={`/editBookableItemForm/${row.id}`}
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