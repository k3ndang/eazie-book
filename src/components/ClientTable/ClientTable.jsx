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
    const history = useHistory();

    const [newFirstName, setFirstName] = useState('');
    const [newLastName, setLastName] = useState('');
    const [newEmail, setEmail] = useState('');
    const [newPhoneNumber, setPhoneNumber] = useState('');
    const [newCompanyName, setCompanyName] = useState('');
    const [newAddress, setAddress] = useState('');
    const [newCity, setCity] = useState('');
    const [newState, setState] = useState('');
    const [newZipCode, setZipCode] = useState('');
    const [newWebsiteUrl, setWebsiteUrl] = useState('');
    const [clientId, setClientId] = useState('');


    const [btnStatus, setBtnStatus] = useState(false);

    useEffect(() => {
        dispatch({
            type: 'FETCH_CLIENTS'
        })
    }, [])

    const clients = useSelector(store => store.clients);

    const deleteClient = (id) => {
        /* still need sweet alerts */
        dispatch({
            type: 'DELETE_SELECTED_CLIENT',
            payload: {id: id}
        });

        history.push('/user');
        console.log('delete button pressed');
    }

    const editClient = (client) => {
        console.log('Edit button clicked');

        setBtnStatus(true);

        setFirstName(client.firstName);
        setLastName(client.lastName);
        setEmail(client.email);
        setPhoneNumber(client.phoneNumber);
        setCompanyName(client.companyName);
        setAddress(client.address);
        setCity(client.city);
        setState(client.state);
        setZipCode(client.zipcode);
        setWebsiteUrl(client.websiteUrl);
        setClientId(client.id);
    }

    const handleSave = () => {
        console.log('Save button pressed!');

        setBtnStatus(false);

        console.log('save btnStatus is:', btnStatus);

        dispatch({
            type: 'UPDATE_CLIENT',
            payload: {
                id: clientId,
                firstName: newFirstName,
                lastName: newLastName,
                email: newEmail,
                phoneNumber: newPhoneNumber,
                companyName: newCompanyName,
                address: newAddress,
                city: newCity,
                state: newState,
                zipCode: newZipCode,
                websiteUrl: newWebsiteUrl
            }
        })
    }

    const cancelChanges = () => {
        setBtnStatus(false);
    }

    const bookableItem = () => {
        history.push('/addBookableItem')
    }

    return(
        <>
        <div className="clientTable">
            <TableContainer component={Paper}>
            <Table>
        {
            btnStatus ? 
            <>
            <TableHead>
                <TableRow>
                    <TableCell>First Name</TableCell>
                    <TableCell align="right">Last Name</TableCell>
                    <TableCell align="right">Email</TableCell>
                    <TableCell align="right">Phone Number</TableCell>
                    <TableCell align="right">Company Name</TableCell>
                    <TableCell align="right">Address</TableCell>
                    <TableCell align="right">City</TableCell>
                    <TableCell align="right">State</TableCell>
                    <TableCell align="right">Zip Code</TableCell>
                    <TableCell align="right">Website Url</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                    <TableCell align="right">
                    <TextField 
                        id="outlined-basic" 
                        size="small"
                        value={newFirstName}
                        onChange={(event) => setFirstName(event.target.value)}/>
                </TableCell>
                <TableCell align="right">
                    <TextField
                        id="outlined-basic"
                        size="small"
                        value={newLastName}
                        onChange={(event) => setLastName(event.target.value)}/>
                </TableCell>
                <TableCell align="right">
                    <TextField
                        id="outlined-basic"
                        size="small"
                        value={newEmail}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </TableCell>
                <TableCell align="right">
                    <TextField
                        id="outlined-basic"
                        size="small"
                        value={newPhoneNumber}
                        onChange={(event) => setPhoneNumber(event.target.value)}
                    />
                </TableCell>
                <TableCell align="right">
                    <TextField
                        id="outlined-basic"
                        size="small"
                        value={newCompanyName}
                        onChange={(event) => setCompanyName(event.target.value)}
                    />
                </TableCell>
                <TableCell align="right">
                    <TextField
                        id="outlined-basic"
                        size="small"
                        value={newAddress}
                        onChange={(event) => setAddress(event.target.value)}
                    />
                </TableCell>
                <TableCell align="right">
                    <TextField
                        id="outlined-basic"
                        size="small"
                        value={newCity}
                        onChange={(event) => setCity(event.target.value)}
                    />
                </TableCell>
                <TableCell align="right">
                    <TextField
                        id="outlined-basic"
                        size="small"
                        value={newState}
                        onChange={(event) => setState(event.target.value)}
                    />
                </TableCell>
                <TableCell align="right">
                    <TextField
                        id="outlined-basic"
                        size="small"
                        value={newZipCode}
                        onChange={(event) => setZipCode(event.target.value)}
                    />
                </TableCell>
                <TableCell align="right">
                    <TextField
                        id="outlined-basic"
                        size="small"
                        value={newWebsiteUrl}
                        onChange={(event) => setWebsiteUrl(event.target.value)}
                    />
                </TableCell>
                <TableCell align="right"><button onClick={handleSave}>Save</button></TableCell>
                <TableCell align="right"><button onClick={cancelChanges}>Cancel</button></TableCell>
                </TableRow>
            </TableBody>
            </>

            :

            <>
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
                        <TableCell align="right"></TableCell>
                        <TableCell align="right"></TableCell>
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
                            <TableCell align="right"><button onClick={event => bookableItem()}>See Bookable Items</button></TableCell>
                            <TableCell align="right"><button onClick={event => editClient(client)}>Edit</button></TableCell>
                            <TableCell align="right"><button onClick={event => deleteClient(client.id)}>Delete</button></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </>
        
            
        }     
            </Table>    
            </TableContainer>
        </div>
        </>
    )
}

export default ClientTable;