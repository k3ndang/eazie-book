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
import './RenterHistory.css';



function RenterHistory() {
    const moment = require('moment-timezone');
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
                            <TableCell align="center">Company Email</TableCell>
                            <TableCell align="center">Company Number</TableCell>
                            <TableCell align="center">Item Name</TableCell>
                            <TableCell align="center">Confirmation Number</TableCell>
                            <TableCell align="center">Date</TableCell>
                            <TableCell align="center">Unit Time</TableCell>
                            <TableCell align="center">Time Booked</TableCell>
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
                                    <TableCell align="center">{row.email}</TableCell>
                                    <TableCell align="center">{row.phoneNumber}</TableCell>
                                    <TableCell align="center">{row.item_name}</TableCell>
                                    <TableCell align="center">{row.confirmationNumber}</TableCell>
                                    <TableCell align="center">{moment(row.startDate).tz("Pacific/Tahiti").format('MMMM Do YYYY, h:mm  a')}</TableCell>
                                    <TableCell align="center">{row.unitTime}</TableCell>
                                    <TableCell align="center">{row.hours_book}</TableCell>
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