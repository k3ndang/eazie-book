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

function RenterInfo() {

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
                            <TableCell align="center" className="clientListTableHeadings"> <strong>Reserving Time</strong></TableCell>
                        </TableRow>
                    </TableHead>


                </Table>

            </TableContainer>

        </>
    )
}

export default RenterInfo;