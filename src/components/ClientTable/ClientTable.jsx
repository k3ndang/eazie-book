import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';


import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';

function ClientTable(){

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({
            type: 'FETCH_CLIENTS'
        })
    }, [])

    const clients = useSelector(store => store.clients);

    return(
        <>
        <div className="clientTable">
            <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>First Name</TableCell>
                        <TableCell align="right">Last Name</TableCell>
                        <TableCell align="right">Username</TableCell>
                        <TableCell align="right">Email</TableCell>
                        <TableCell align="right">Phone Number</TableCell>
                        <TableCell align="right">Company Name</TableCell>
                        <TableCell align="right">Address</TableCell>
                        <TableCell align="right">City</TableCell>
                        <TableCell align="right">State</TableCell>
                        <TableCell align="right">Zip Code</TableCell>
                        <TableCell align="right">Website URL</TableCell>
                        <TableCell align="right">Bookable Items</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {clients.map(client => (
                        <TableRow key={client.id} id={client.id}>
                            <TableCell>{client.firstName}</TableCell>
                            <TableCell align="right">{client.lastName}</TableCell>
                            <TableCell align="right">{client.username}</TableCell>
                            <TableCell align="right">{client.email}</TableCell>
                            <TableCell align="right">{client.phoneNumber}</TableCell>
                            <TableCell align="right">{client.companyName}</TableCell>
                            <TableCell align="right">{client.address}</TableCell>
                            <TableCell align="right">{client.city}</TableCell>
                            <TableCell align="right">{client.state}</TableCell>
                            <TableCell align="right">{client.zipcode}</TableCell>
                            <TableCell align="right">{client.websiteUrl}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>    
            </TableContainer>
        </div>
        </>
    )
}

export default ClientTable;