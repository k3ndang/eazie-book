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
                authLevel: authLevel,
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
        setAuthLevel('');

        /* need history.push here */
    }

    return(
        <>
        <Paper onSubmit={inviteClient}>
            <h2>Invite Client</h2>
            <div>
                <Input
                    className="input"
                    type="text"
                    name="First Name"
                    value={firstName}
                    required
                    onChange={(event) => setFirstName(event.target.value)}
                />
            </div>
            <div>
                <Input
                    className="input"
                    type="text"
                    name="Last Name"
                    value={lastName}
                    required
                    onChange={(event) => setLastName(event.target.value)}
                />
            </div>
            <div>
                <Input  
                    className="input"
                    type="text"
                    name="Username"
                    value={username}
                    required
                    onChange={(event) => setUsername(event.target.value)}
                />
            </div>
            <div>
                <Input
                    className="input"
                    type="password"
                    name="Password"
                    value={password}
                    required
                    onChange={(event) => setPassword(event.target.value)}
                />
            </div>
            <div>
                <Input
                    className="input"
                    type="text"
                    name="Email"
                    value={email}
                    required
                    onChange={(event) => setEmail(event.target.value)}
                />
            </div>
            <div>
                <Input
                    className="input"
                    type="text"
                    name="Phone Number"
                    value={phoneNumber}
                    required
                    onChange={(event) => setPassword(event.target.value)}
                />
            </div>
            <div>
                <Input
                    className="input"
                    type="text"
                    name="Company Name"
                    value={companyName}
                    required
                    onChange={(event) => setCompanyName(event.target.value)}
                />
            </div>
            <div>
                <Input
                    className="input"
                    type="text"
                    name="Address"
                    value={address}
                    required
                    onChange={(event) => setAddress(event.target.value)}
                />
            </div>
            <div>
                <Input 
                    className="input"
                    type="text"
                    name="City"
                    value={city}
                    required
                    onChange={(event) => setCity(event.target.value)}
                />
            </div>
            <div>
                <Input
                    className="input"
                    type="text"
                    name="State"
                    value={state}
                    required
                    onChange={(event) => setState(event.target.value)}
                />
            </div>
            <div>
                <Input
                    className="input"
                    type="number"
                    name="Zip Code"
                    value={zipCode}
                    required
                    onChange={(event) => setZipCode(event.target.value)}
                />
            </div>
            <div>
                <Input
                    className="input"
                    type="text"
                    name="Website Url"
                    value={websiteUrl}
                    required
                    onChange={(event) => setWebsiteUrl(event.target.value)}
                />
            </div>
            <div>
                <Input
                    className="input"
                    type="checkbox"
                    name="Client"
                    value={authLevel}
                    onChange={(event) => setAuthLevel(event.target.value)}
                />
            </div>
            <div>
                <Button
                    className="submitBtn"
                    type="submit"
                    name="Submit"
                    value="Submit"
                />
            </div>
        </Paper>
        </>
    )
}

export default InviteClient;