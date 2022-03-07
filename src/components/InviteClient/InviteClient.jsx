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

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [websiteUrl, setWebsiteUrl] = useState('');
    const [authLevel, setAuthLevel] = useState('');


    const inviteClient = (event) => {
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

        setFirstName('');
        setLastName('');
        setUsername('');
        setPassword('');
        setEmail('');
        setPhoneNumber('');
        setCompanyName('');
        setAddress('');
        setCity('');
        setState('');
        setZipCode('');
        setWebsiteUrl('');


        /* need history.push here */
    
    }

    const goBack = () => {
        history.push("/user");
    }

    const goBack = () => {
        history.push("/user");
    }

    return(
        <>
        <Paper onSubmit={inviteClient}>
            <Button variant="outlined" onClick={goBack}>Back</Button>
            <h2>Invite Client</h2>
            <div>
                <Input
                    className="input"
                    type="text"
                    name="firstName"
                    value={firstName}
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
                    value={lastName}
                    placeholder="Last Name"
                    required
                    onChange={(event) => setLastName(event.target.value)}
                />
            </div>
            <div>
                <Input  
                    className="input"
                    type="text"
                    name="username"
                    value={username}
                    placeholder="Username"
                    required
                    onChange={(event) => setUsername(event.target.value)}
                />
            </div>
            <div>
                <Input
                    className="input"
                    type="password"
                    name="password"
                    value={password}
                    placeholder="Password"
                    required
                    onChange={(event) => setPassword(event.target.value)}
                />
            </div>
            <div>
                <Input
                    className="input"
                    type="text"
                    name="email"
                    value={email}
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
                    value={phoneNumber}
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
                    value={companyName}
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
                    value={address}
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
                    value={city}
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
                    value={state}
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
                    value={zipCode}
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
                    value={websiteUrl}
                    placeholder="Website Url"
                    required
                    onChange={(event) => setWebsiteUrl(event.target.value)}
                />
            </div>
           {/*  <div>
                <Input
                    className="input"
                    type="checkbox"
                    name="Client"
                    value={authLevel}
                    placeholder="Client"
                    onChange={(event) => setAuthLevel(event.target.value)}
                />
            </div> */}
            <div>
                <Button
                    variant="outlined"
                    color="primary"
                    className="submitBtn"

                    name="Submit"
                    value="Submit"
                    onClick={inviteClient}
                >
                Submit
                </Button>
            </div>
        </Paper>
        </>
    )
}

export default InviteClient;