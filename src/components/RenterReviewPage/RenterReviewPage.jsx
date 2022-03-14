import { useSelector, useDispatch } from 'react-redux';
import { useHistory }  from 'react-router-dom';
import moment from 'moment';

function RenterReviewPage () {
    const dispatch = useDispatch();
    const history = useHistory();

    const reviewBooking = useSelector(store => store.renterBooking);
    console.log('review booking', reviewBooking)

    const confirming = (evt) => {
        evt.preventDefault();

        dispatch({
            type: "BOOKING_CONFIRM",
            payload: reviewBooking
        })
        history.push('/thankyou')
    }

    return(
        <>
        <h2>Review Reservation</h2>
        <img 
            src="https://www.amfam.com/-/media/images/amfam/products/boat/product-page-speed-and-power-boats---m.jpg"
        />
        <p>Title: {reviewBooking.selectedItem.title}</p>
        <p>Summary: {reviewBooking.selectedItem.summary}</p>
        <p>Detail: {reviewBooking.selectedItem.detail}</p>
        <p>Date/Time Selected: {moment(reviewBooking.date.toString()).format('MMMM Do YYYY, h:mm:ss a')}</p>
        <p>Duration Booking: {reviewBooking.hourRenting === "All_Day" ? reviewBooking.hourRenting: `${reviewBooking.hourRenting} Hours`}</p>
        <button onClick={confirming}>Confirm</button>
        </>
    )
}

export default RenterReviewPage;