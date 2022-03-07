import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
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
    // const {idM, idG} = useParams();   // { id: 2 }
    // console.log('growthId in editForm', idM, idG);
    // // Grab the "selected member appointment" from the redux store
    // const selectedMember = useSelector(store => store.selectedMember);
    // console.log('selcted member for update growth', selectedMember);
    // useEffect(() => {
    //     dispatch({
    //         type: 'FETCH_SELECTED_MEMBER_GROWTH',
    //         payload: {
    //             memberId: idM,
    //             growthId: idG
    //         }
    //     });
    // }, [idM]); // 👈 fetch the member again, if the url changes

    // Called when the submit button is pressed
    const handleSubmit = (event) => {
        event.preventDefault();

        // dispatch({
        // type: 'SAVE_MEMBER_GROWTH',
        // payload: selectedMember
        // });

        // history.push(`/memberDetails/${idM}`);
    };


    return (
    <>
        <h2>Edit Bookable Item</h2>

        <form onSubmit={handleSubmit}>
            <Input
                    {/* Title */}
                type="text"
                // value={selectedMember.height}
                // onChange={(evt) => dispatch({
                // type: 'UPDATE_BOOKABLE_ITEM',
                // payload: { height: evt.target.value }
                // })}
            />
            <TextField
                    {/* Summary */}
                type="text"
                // value={selectedMember.weight}
                // onChange={(evt) => dispatch({
                // type: 'UPDATE_BOOKABLE_ITEM',
                // payload: { weight: evt.target.value }
                // })}
            />
            <TextField
                    {/* Detail */}
                type="text"
                // value={selectedMember.weight}
                // onChange={(evt) => dispatch({
                // type: 'UPDATE_BOOKABLE_ITEM',
                // payload: { weight: evt.target.value }
                // })}
            />
            <Input
                    {/* Rate */}
                type="integer"
                // date-format="MON DD, YYYY"
                // value={selectedMember.date}
                // onChange={(evt) => dispatch({
                // type: 'UPDATE_BOOKABLE_ITEM',
                // payload: { date: evt.target.value }
                // })}
            />
            <Input
                    {/* UnitTime */}
                type="text"
                // date-format="MON DD, YYYY"
                // value={selectedMember.date}
                // onChange={(evt) => dispatch({
                // type: 'UPDATE_BOOKABLE_ITEM',
                // payload: { date: evt.target.value }
                // })}
            />
            <Input
                    {/* location */}
                type="text"
                // date-format="MON DD, YYYY"
                // value={selectedMember.date}
                // onChange={(evt) => dispatch({
                // type: 'UPDATE_BOOKABLE_ITEM',
                // payload: { date: evt.target.value }
                // })}
            />
            <Input
                    {/* Category */}
                type="integer"
                // date-format="MON DD, YYYY"
                // value={selectedMember.date}
                // onChange={(evt) => dispatch({
                // type: 'UPDATE_BOOKABLE_ITEM',
                // payload: { date: evt.target.value }
                // })}
            />
            {/* <input
                type='submit'
                value='Update GrowthInfo'
            /> */}
        </form>
        {/* <Cancel 
            type="toDetails"
            memberId={idM}
        /> */}
    </>
    );
}

export default EditBookableItemForm;