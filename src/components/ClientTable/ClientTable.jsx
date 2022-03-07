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
import './ClientTable.css'
function ClientTable(){
        const history = useHistory();
        const dispatch = useDispatch();

    useEffect(() => {
        dispatch({
            type: 'FETCH_CLIENTS'
        })
    }, [])

        const clients = useSelector(store => store.clients);
        
        const addClient = () => {
            history.push("/admin/invite");
        }
    return(
        <>
        <div className="clientTable">
            <div className="clientListButton" >
                <h2>  Current list of Clients </h2>
                <button className="addClientButton" onClick={addClient}> Add Client </button>

            </div>
            
            <h3 className="adminTableTitle"> Client Information</h3>
            <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow >
                        <TableCell align="center" className="clientListTableHeadings">First Name</TableCell>
                        <TableCell align="center" className="clientListTableHeadings">Last Name</TableCell>
                        <TableCell align="center" className="clientListTableHeadings">Username</TableCell>
                        <TableCell align="center" className="clientListTableHeadings">Email</TableCell>
                        <TableCell align="center" className="clientListTableHeadings">Phone Number</TableCell>
                        <TableCell align="center" className="clientListTableHeadings">Company Name</TableCell>
                        <TableCell align="center" className="clientListTableHeadings">Address</TableCell>
                        <TableCell align="center" className="clientListTableHeadings">City</TableCell>
                        <TableCell align="center" className="clientListTableHeadings">State</TableCell>
                        <TableCell align="center" className="clientListTableHeadings">Zip Code</TableCell>
                        <TableCell align="center" className="clientListTableHeadings">Website URL</TableCell>
                        <TableCell align="center" className="clientListTableHeadings">Bookable Items</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {clients.map(client => (
                        <TableRow key={client.id} id={client.id}>
                            <TableCell align="center" className="clientListTableRow">{client.firstName}</TableCell>
                            <TableCell align="center" className="clientListTableRow">{client.lastName}</TableCell>
                            <TableCell align="center" className="clientListTableRow">{client.username}</TableCell>
                            <TableCell align="center" className="clientListTableRow">{client.email}</TableCell>
                            <TableCell align="center" className="clientListTableRow">{client.phoneNumber}</TableCell>
                            <TableCell align="center" className="clientListTableRow">{client.companyName}</TableCell>
                            <TableCell align="center" className="clientListTableRow">{client.address}</TableCell>
                            <TableCell align="center" className="clientListTableRow">{client.city}</TableCell>
                            <TableCell align="center" className="clientListTableRow">{client.state}</TableCell>
                            <TableCell align="center" className="clientListTableRow">{client.zipcode}</TableCell>
                            <TableCell align="center" className="clientListTableRow">{client.websiteUrl}</TableCell>
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