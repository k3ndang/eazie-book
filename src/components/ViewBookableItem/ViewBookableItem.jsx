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


    return(
        <>
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Item</TableCell>
                        <TableCell align="right">Summary</TableCell>
                        <TableCell align="right">Details</TableCell>
                        <TableCell align="right">Rate</TableCell>
                        <TableCell align="right">Time</TableCell>
                        <TableCell align="right">Location</TableCell>
                        <TableCell align="right">categoryId</TableCell>
                        <TableCell align="right">clientId</TableCell>
                        <TableCell align="right"></TableCell>
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
                            <TableCell align="right">{row.summary}</TableCell>
                            <TableCell align="right">{row.detail}</TableCell>
                            <TableCell align="right">{row.rate}</TableCell>
                            <TableCell align="right">{row.unitTime}</TableCell>
                            <TableCell align="right">{row.location}</TableCell>
                            <TableCell align="right">{row.categoryId}</TableCell>
                            <TableCell align="right">{row.clientId}</TableCell>
                            <TableCell align="right">
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