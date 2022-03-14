import React from 'react';
import axios from 'axios';
import {useState, useEffect} from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Paper from '@mui/material/Paper';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';

function RenterHistory() {

    const renterReducer = useSelector(store => store.renter.renterHistory)

    // console.log('renterReducer is', renterReducer);
    const dispatch = useDispatch()
    
    useEffect(() => {
        fetchRenterHistory()
    }, []) 
    
    const fetchRenterHistory = () => {
        dispatch({type: 'FETCH_RENTER_HISTORY'})
    }
    return(
        <>
        <Button >Book Another Item</Button>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Company Name</TableCell>
                            <TableCell align="right">Company Email</TableCell>
                            <TableCell align="right">Company Number</TableCell>
                            <TableCell align="right">Item Name</TableCell>
                            <TableCell align="right">Unit Time</TableCell>
                            <TableCell align="right">Time Booked</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>

                        {renterReducer.map((row, index) => {
                            return(
                                <TableRow
                                key={index}
                                sx={{ border: 2, minWidth: 100 }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.companyName}
                                    </TableCell>
                                    <TableCell align="right">{row.email}</TableCell>
                                    <TableCell align="right">{row.phoneNumber}</TableCell>
                                    <TableCell align="right">{row.companyName}</TableCell>
                                    <TableCell align="right">{row.unitTime}</TableCell>
                                    <TableCell align="right">{row.hours_book}</TableCell>
                                </TableRow>
                            )
                        })}
                        
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default RenterHistory;