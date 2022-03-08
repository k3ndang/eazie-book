import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Input from '@mui/material/Input';
import Box from '@mui/material/Box';
import { Button, Grid } from "@material-ui/core";


// import { useParams } from 'react-router-dom';
// import Cancel from './CancelBtn'

function EditBookableItemForm () {
    const dispatch = useDispatch();
    const history = useHistory();
    const params = useParams();   // { id: 2 }
    console.log('bookableItemId', params);
    
    // // Grab the "selected bookableItem" from the redux store
    const selectedBookableItem = useSelector(store => store.selectedBookableItem);
    console.log('selected bookableItem for update', selectedBookableItem);


    useEffect(() => {
        dispatch({
            type: 'FETCH_SELECTED_BOOKABLE_ITEM',
            payload: params.id
        });
    }, [params.id]); // 👈 fetch the member again, if the url changes

    // Called when the submit button is pressed
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch({
        type: 'SAVE_BOOKABLE_ITEM',
        payload: selectedBookableItem
        })

        history.push(`/viewBookableItem`);
    };


    return (
    <>
        <h2>Edit Bookable Item</h2>
        <form onSubmit={handleSubmit}>
            <Input
                type="text"
                value={selectedBookableItem.title}
                onChange={(evt) => dispatch({
                type: 'UPDATE_BOOKABLE_ITEM',
                payload: { title: evt.target.value }
                })}
            />
            <TextField
                type="text"
                value={selectedBookableItem.summary}
                onChange={(evt) => dispatch({
                type: 'UPDATE_BOOKABLE_ITEM',
                payload: { summary: evt.target.value }
                })}
            />
            <TextField
                type="text"
                value={selectedBookableItem.detail}
                onChange={(evt) => dispatch({
                type: 'UPDATE_BOOKABLE_ITEM',
                payload: { detail: evt.target.value }
                })}
            />
            <Input
                type="integer"
                value={selectedBookableItem.rate}
                onChange={(evt) => dispatch({
                type: 'UPDATE_BOOKABLE_ITEM',
                payload: { rate: evt.target.value }
                })}
            />
            <Input
                type="text"
                value={selectedBookableItem.unitTime}
                onChange={(evt) => dispatch({
                type: 'UPDATE_BOOKABLE_ITEM',
                payload: { unitTime: evt.target.value }
                })}
            />
            <Input
                type="text"
                value={selectedBookableItem.location}
                onChange={(evt) => dispatch({
                type: 'UPDATE_BOOKABLE_ITEM',
                payload: { location: evt.target.value }
                })}
            />
            <Input
                type="integer"
                value={selectedBookableItem.categoryId}
                onChange={(evt) => dispatch({
                type: 'UPDATE_BOOKABLE_ITEM',
                payload: { category: evt.target.value }
                })}
            />
            <Button
                type='submit'
                variant="outlined"
                color="primary"
                size="small"
            >
                Update
            </Button>
        </form>

        
    </>
    );
}

export default EditBookableItemForm;