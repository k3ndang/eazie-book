import * as React from 'react';
import {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

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


    const fetchBookableItem = () => {
        dispatch({ type: 'FETCH_BOOKABLE_ITEM' })
    }
    useEffect(() => {
        fetchBookableItem()
    }, [])
    const rows = useSelector(store => store.bookableItemReducer)
    return(
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Item</TableCell>
                            <TableCell align="right">Summary</TableCell>
                            <TableCell align="right">Details</TableCell>
                            <TableCell align="right">Type</TableCell>
                            <TableCell align="right">Rate</TableCell>
                            <TableCell align="right">Time</TableCell>
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
                                <TableCell align="right">{row.details}</TableCell>
                                <TableCell align="right">{row.type}</TableCell>
                                <TableCell align="right">{row.rate}</TableCell>
                                <TableCell align="right">{row.time}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>


        </>
    )

}

export default ViewBookableItem;