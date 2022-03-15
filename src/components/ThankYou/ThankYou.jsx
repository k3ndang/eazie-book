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

    const bookingConfirmation = useSelector(store => store.renterBooking)
    console.log('confirmation code', bookingConfirmation)

    return (
        <>
        <h2>Thank You For Using Eazie_Book</h2>
        <h4>Your Confirmation Code</h4>
        {bookingConfirmation.map((code) =>
            <p key={code.id}>{code.confirmationNumber}</p>
        )}
        </>
    )
}

export default ThankYou;