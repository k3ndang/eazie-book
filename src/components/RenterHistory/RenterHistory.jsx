import React from 'react';
import axios from 'axios';
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
                            <TableCell align="right">Dates Booked</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {/* {rows.map((row, index) => (
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
                        ))} */}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default RenterHistory;