import * as React from 'react';
import {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
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


/* function createData(title, summary, details, type, rate, time) {
    return { title, summary, details, type, rate, time };
} */


/* const rows = [
    createData('Zorp', 'zeep', 'heeb', 'hoob', 4.0, 420 ),
    createData('asdf', 'zeep', 'heeb', 'hoob', 4.0, 420),
    createData('weroiu', 'zeep', 'heeb', 'hoob', 4.0, 420),
    createData('sdfjkldfsjlk', 'zeep', 'heeb', 'hoob', 4.0, 420),
    createData('zap', 'zeep', 'heeb', 'hoob', 4.0, 420),
]; */



function ViewBookableItem() {
    const dispatch = useDispatch()

    // let title = useSelector(store => store.bookableItem.titleReducer)
    // let summary = useSelector(store => store.bookableItem.summaryReducer)
    // let details = useSelector(store => store.bookableItem.detailReducer)
    // let rate = useSelector(store => store.bookableItem.rateReducer)
    // let time = useSelector(store => store.bookableItem.unitTimeReducer)
    // let categoryId = useSelector(store => store.bookableItem.categoryIdReducer)
    // let clientId = useSelector(store => store.bookableItem.clientIdReducer)
    // const handleSubmit = () => {
        
    //     dispatch({
    //         type: 'POST_BOOKABLE_ITEM',
    //         payload: {
    //             title: title, 
    //             summary, summary, 
    //             details: details, 
    //             rate: rate, 
    //             time: time,
    //             location, location,
    //             categoryId: categoryId,
    //             clientId: clientId
    //         }
    //     })
    // }


    const fetchBookableItem = () => {
        // dispatch({ type: 'FETCH_BOOKABLE_ITEM' })
    }
    useEffect(() => {
        // fetchBookableItem()
    }, [])
   


    return(
        <>
            {/* <Stack onSubmit={handleSubmit}
                component="form"
                sx={{
                    width: '25ch',
                }}
                spacing={2}
                noValidate
                autoComplete="off"
            >
                <TextField
                    hiddenLabel
                    id="filled-hidden-label-small"
                    variant="filled"
                    placeholder='item'
                    size="small"
                    onChange={(e) => dispatch({type: 'SET_TITLE', payload: e.target.value})}
                />
                <TextField
                    hiddenLabel
                    id="filled-hidden-label-small"
                    variant="filled"
                    placeholder='summary'
                    size="small"
                    onChange={(e) => dispatch({ type: 'SET_SUMMARY', payload: e.target.value })}
                />
                <TextField
                    hiddenLabel
                    id="filled-hidden-label-small"
                    variant="filled"
                    placeholder='details'
                    size="small"
                    onChange={(e) => dispatch({ type: 'SET_DETAIL', payload: e.target.value })}
                />
                <TextField
                    hiddenLabel
                    id="filled-hidden-label-small"
                    variant="filled"
                    placeholder='rate'
                    size="small"
                    onChange={(e) => dispatch({ type: 'SET_RATE', payload: e.target.value })}
                />
                <TextField
                    hiddenLabel
                    id="filled-hidden-label-small"
                    variant="filled"
                    placeholder='time'
                    size="small"
                    onChange={(e) => dispatch({ type: 'SET_UNIT_TIME', payload: e.target.value })}
                />
                <TextField
                    hiddenLabel
                    id="filled-hidden-label-small"
                    variant="filled"
                    placeholder='location'
                    size="small"
                    onChange={(e) => dispatch({ type: 'SET_LOCATION', payload: e.target.value })}
                />
                <TextField
                    hiddenLabel
                    id="filled-hidden-label-small"
                    variant="filled"
                    placeholder='categoryId'
                    size="small"
                    onChange={(e) => dispatch({ type: 'SET_CATEGORY_ID', payload: e.target.value })}
                />
                <TextField
                    hiddenLabel
                    id="filled-hidden-label-small"
                    variant="filled"
                    placeholder='clientId'
                    size="small"
                    onChange={(e) => dispatch({ type: 'SET_CLIENT_ID', payload: e.target.value })}
                />
                <Button type='submit'>Add item</Button>
            </Stack> */}
            {/* <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Item</TableCell>
                            <TableCell align="right">Summary</TableCell>
                            <TableCell align="right">Details</TableCell>
                            <TableCell align="right">Rate</TableCell>
                            <TableCell align="right">Time</TableCell>
                            <TableCell align="right">categoryId</TableCell>
                            <TableCell align="right">clientId</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.title}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.title}
                                </TableCell>
                                <TableCell align="right">{row.summary}</TableCell>
                                <TableCell align="right">{row.detail}</TableCell>
                                <TableCell align="right">{row.rate}</TableCell>
                                <TableCell align="right">{row.unitTime}</TableCell>
                                <TableCell align="right">{row.categoryId}</TableCell>
                                <TableCell align="right">{row.clientId}</TableCell>
                                <Button>Edit</Button>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer> */}


        </>
    )

}

export default ViewBookableItem;