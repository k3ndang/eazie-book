import React from 'react';
import {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import moment from 'moment';

function RenterInfo() {
    const info = useSelector(store => store.renter.renterInfo)
    console.log('info is ', info);
    useEffect(() => {
        dispatch({
            type: 'FETCH_RENTER_INFO'
        });
    }, []);
    const dispatch = useDispatch();
    return (
        <>
            <h1>Renter Information</h1>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow >
                            <TableCell align="center" className="clientListTableHeadings"> <strong>Name</strong></TableCell>
                            <TableCell align="center" className="clientListTableHeadings"> <strong>Email</strong></TableCell>
                            <TableCell align="center" className="clientListTableHeadings"> <strong>Phone Number</strong></TableCell>
                            <TableCell align="center" className="clientListTableHeadings"> <strong>Item Name </strong></TableCell>
                            <TableCell align="center" className="clientListTableHeadings"><strong>Start Date</strong></TableCell>
                            <TableCell align="center" className="clientListTableHeadings"> <strong>Unit Time</strong></TableCell>
                            <TableCell align="center" className="clientListTableHeadings"> <strong>Duration</strong></TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
            <TableBody>
                {info.map((row, index) => {
                    return(
                        <TableRow
                        key={index}
                        sx={{ border: 2, minWidth: 100 }}
                        >
                            <TableCell component="th" scope='row'>
                            {row.username}
                            </TableCell>
                            <TableCell align='center'>{row.email}</TableCell>
                            <TableCell align='center'>{row.phoneNumber}</TableCell>
                            <TableCell align='center'>{row.item_name}</TableCell>
                            <TableCell align='center'>{moment(row.date).format('MMMM Do YYYY, h:mm:ss a')}</TableCell>
                            <TableCell align='center'>{row.unitTime}</TableCell>
                            <TableCell align='center'>{row.time_booked}</TableCell>
                            
                        </TableRow>
                    )
                })}

            </TableBody>


                </Table>

            </TableContainer>

        </>
    )
}

export default RenterInfo;