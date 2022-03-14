import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams }  from 'react-router-dom';

function ThankYou () {
    const params = useParams();
    const dispatch = useDispatch();
    

    useEffect(() => {
        dispatch({
            type: "FETCH_BOOKING_CONFIRM",
            payload: params.id
        })
    }, [params.id])


    return (
        <>
        <h3>Thank You For Using Eazie_Book</h3>
        </>
    )
}

export default ThankYou;