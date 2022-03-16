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

    const confirmationCode = useSelector(store => store.renterBooking)
    console.log('confirmation code', confirmationCode)

    return (
        <>
        <h2>Thank You For Using Eazie_Book</h2>
        <h4>Your Confirmation Code</h4>
        <p>{confirmationCode.confirmationNumber}</p>
        </>
    )
}

export default ThankYou;