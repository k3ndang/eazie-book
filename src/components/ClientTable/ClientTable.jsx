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
                        <TableCell align="center" className="clientListTableHeadings"> <strong>First Name </strong></TableCell>
                        <TableCell align="center" className="clientListTableHeadings"> <strong>Last Name  </strong></TableCell>
                        <TableCell align="center" className="clientListTableHeadings"> <strong>Username  </strong></TableCell>
                        <TableCell align="center" className="clientListTableHeadings"> <strong>Email </strong></TableCell>
                        <TableCell align="center" className="clientListTableHeadings"> <strong>Phone Number  </strong></TableCell>
                        <TableCell align="center" className="clientListTableHeadings"> <strong>Company Name </strong></TableCell>
                        <TableCell align="center" className="clientListTableHeadings"> <strong>Address </strong></TableCell>
                        <TableCell align="center" className="clientListTableHeadings"> <strong>City </strong></TableCell>
                        <TableCell align="center" className="clientListTableHeadings"> <strong>State </strong></TableCell>
                        <TableCell align="center" className="clientListTableHeadings"> <strong>Zip Code </strong></TableCell>
                        <TableCell align="center" className="clientListTableHeadings"> <strong>Website URL </strong></TableCell>
                        <TableCell align="center" className="clientListTableHeadings"> <strong>Bookable Items </strong></TableCell>
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