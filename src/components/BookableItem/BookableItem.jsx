import React from 'react'; 
import AddBookableItemForm from '../AddBookableItem/AddBookableItem'
import { useHistory, useParams } from "react-router-dom";
function BookableItem () {

    const history = useHistory();

    

    return (
        <>
        <AddBookableItemForm />
        </>
    )
}

export default BookableItem;