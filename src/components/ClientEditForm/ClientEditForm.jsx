import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';

function InviteClient(){
    const history = useHistory();
    const dispatch = useDispatch();

    const client = useSelector(store => store.activeClient);

    const saveChanges = (event) => {
        event.preventDefault();

        console.log('Submit BTN pressed');
        /* data being sent to inviteClient.saga.js */
        dispatch({
            type: 'INVITE_CLIENT',
            payload:{
                firstName: firstName,
                lastName: lastName,
                username: username,
                password, password,
                email: email,
                phoneNumber: phoneNumber,
                companyName: companyName,
                address: address,
                city: city,
                state: state,
                zipCode: zipCode,
                websiteUrl: websiteUrl,
                /* authLevel: authLevel, */
            }
        });
        /* need history.push here */
    
    }

    const goBack = () => {
        history.push("/user");
    }

    return(
        <>
        {client.map(client => (
            <Paper onSubmit={saveChanges}>
            <Button variant="outlined" onClick={goBack}>Back</Button>
            <h2>Invite Client</h2>
            <div>
                <Input
                    className="input"
                    type="text"
                    name="firstName"
                    value={client.firstName}
                    placeholder="First Name"
                    required
                    onChange={(event) => setFirstName(event.target.value)}
                />
            </div>
            <div>
                <Input
                    className="input"
                    type="text"
                    name="lastName"
                    value={client.lastName}
                    placeholder="Last Name"
                    required
                    onChange={(event) => setLastName(event.target.value)}
                />
            </div>
            <div>
                <Input
                    className="input"
                    type="text"
                    name="email"
                    value={client.email}
                    placeholder="Email"
                    required
                    onChange={(event) => setEmail(event.target.value)}
                />
            </div>
            <div>
                <Input
                    className="input"
                    type="text"
                    name="phoneNumber"
                    value={client.phoneNumber}
                    placeholder="Phone Number"
                    required
                    onChange={(event) => setPhoneNumber(event.target.value)}
                />
            </div>
            <div>
                <Input
                    className="input"
                    type="text"
                    name="companyName"
                    value={client.companyName}
                    placeholder="Company Name"
                    required
                    onChange={(event) => setCompanyName(event.target.value)}
                />
            </div>
            <div>
                <Input
                    className="input"
                    type="text"
                    name="address"
                    value={client.address}
                    placeholder="Address"
                    required
                    onChange={(event) => setAddress(event.target.value)}
                />
            </div>
            <div>
                <Input 
                    className="input"
                    type="text"
                    name="city"
                    value={client.city}
                    placeholder="City"
                    required
                    onChange={(event) => setCity(event.target.value)}
                />
            </div>
            <div>
                <Input
                    className="input"
                    type="text"
                    name="state"
                    value={client.state}
                    placeholder="State"
                    required
                    onChange={(event) => setState(event.target.value)}
                />
            </div>
            <div>
                <Input
                    className="input"
                    type="number"
                    name="zipCode"
                    value={client.zipCode}
                    placeholder="Zip Code"
                    required
                    onChange={(event) => setZipCode(event.target.value)}
                />
            </div>
            <div>
                <Input
                    className="input"
                    type="text"
                    name="websiteUrl"
                    value={client.websiteUrl}
                    placeholder="Website Url"
                    required
                    onChange={(event) => setWebsiteUrl(event.target.value)}
                />
            </div>
            <div>
                <Button
                    variant="outlined"
                    color="primary"
                    className="submitBtn"

                    name="Submit"
                    value="Submit"
                    onClick={saveChanges}
                >
                Submit
                </Button>
            </div>
        </Paper>
        ))}
        
        </>
    )
}

export default InviteClient;