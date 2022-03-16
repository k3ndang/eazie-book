import * as React from 'react';

import {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { useHistory, Link, useParams } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import './ViewBookableItem.css';

function ViewBookableItem() {
    const dispatch = useDispatch();
    const history = useHistory();
    const params = useParams();
    console.log('client Id', params.id)

    const rows = useSelector((store) => store.bookableItem.bookableItemReducer);
    console.log('bookableItem list from store', rows)

    const selectedClientItem = useSelector((store) => store.selectedClientItem);

    /*  const fetchBookableItem = () => {
         dispatch({ 
             type: 'FETCH_BOOKABLE_ITEM' 
         })
     }; */

    useEffect(() => {
        dispatch({
            type: "FETCH_CLIENT_BOOKABLE_ITEM",
            payload: params.id
        })
    }, [params.id]);

    const addItem = () => {
        history.push('/addBookableItem')
    }

    const goBack = () => {
        history.push('/clients');
    }

    return (
        <>
            <div className="ButtonsTrial"> 
            <Button variant="outlined" color="primary" onClick={goBack} className="viewBookableItemButtons" align="center">Back</Button>
            <Button variant="outlined" color="primary" onClick={addItem} className="viewBookableItemButtons" align="center">Add New Item</Button>
            </div>
            <Grid container>
                <Grid item>
            <TableContainer component={Paper} sx={{ maxWidth: 8000 }} className="ViewBookableItemTableContainer">
                <Table sx={{ minWidth: 500 }} aria-label="simple table">
               
                    <TableHead>
                        <TableRow className="ViewBookableItemTableRowHeading">
                            <TableCell align="center" className="ViewBookableItemTableRowName">Item</TableCell>
                            <TableCell align="center" className="ViewBookableItemTableRowName">Summary</TableCell>
                            <TableCell align="center" className="ViewBookableItemTableRowName">Details</TableCell>
                            <TableCell align="center" className="ViewBookableItemTableRowName">Rate</TableCell>
                            <TableCell align="center" className="ViewBookableItemTableRowName">Time</TableCell>
                            <TableCell align="center" className="ViewBookableItemTableRowName">Location</TableCell>
                            <TableCell align="center" className="ViewBookableItemTableRowName">Category</TableCell>
                            <TableCell align="center" className="ViewBookableItemTableRowCompanyName">Company Name</TableCell>
                            <TableCell align="center" className="ViewBookableItemTableRowButton">  </TableCell>
                            <TableCell align="center" className="ViewBookableItemTableRowButton">  </TableCell>

                        </TableRow>
                    </TableHead>
              
                    <TableBody>
                        {selectedClientItem.map((item, index) => (

                            <TableRow
                                key={index}
                                sx={{ border: 2, minWidth: 100 }}
                            >
                                <TableCell component="th" scope="row" className="ViewBookableItemTableCell">
                                    {item.title}
                                </TableCell>
                                <TableCell align="center" className="ViewBookableItemTableCellSummary">{item.summary}</TableCell>
                                <TableCell align="center" className="ViewBookableItemTableCellSummary">{item.detail}</TableCell>
                                <TableCell align="center" className="ViewBookableItemTableCell">${item.rate}</TableCell>
                                <TableCell align="center" className="ViewBookableItemTableCell">per {item.unitTime}</TableCell>
                                <TableCell align="center" className="ViewBookableItemTableCell">{item.location}</TableCell>
                                <TableCell align="center" className="ViewBookableItemTableCell">{item.name}</TableCell>
                                <TableCell align="center" className="ViewBookableItemTableCell">{item.companyName}</TableCell>
                                <TableCell align="center" className="ViewBookableItemTableCell"><Link to={`/addPhotos/${item.id}`} >Add Photo</Link></TableCell>
                                <TableCell align="center">
                                    <Link
                                        to={`/editBookableItemForm/${item.id}`}
                                    >
                                        Edit
                                    </Link>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            </Grid>
            </Grid>
        </>
    )

}

export default ViewBookableItem;