import { useEffect } from 'react';
import { useHistory, useParams }  from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid';
import BoatDetail from '../BookableItemDetail/BookableItemDetail'



function BoatList () {
    const history = useHistory();
    const params = useParams();
    console.log("categoryId is", params) 
    const dispatch = useDispatch();

    const boatList = useSelector((store) => store.bookableItem.bookableItemReducer);

    useEffect (() => {
        dispatch({
            type: "RENTER_FETCH_BOOKABLE_ITEM",
            payload: params.boatId
        });
    }, [params.boatId])
    
    return (
        <>
        <h2>Boat</h2>
        <ImageList sx={{ width: 900, height: 750 }}>
            {boatList.map((boat) => (
                <Grid container key={boat.id}>
                    <Grid item>
                        
                        <ImageListItem>
                            <img 
                                src="https://www.amfam.com/-/media/images/amfam/products/boat/product-page-speed-and-power-boats---m.jpg"
                                alt={boat.title}
                            />
                        </ImageListItem>
                        <Typography variant='h4'>{boat.title}</Typography>
                        <Typography variant='h6'>Summary: {boat.summary}</Typography>
                        <Typography variant='h6'>Detail: {boat.detail}</Typography>
                        <Typography variant='h6'>Rate: {boat.rate}</Typography>
                    </Grid>
                    <button onClick={(evt) => history.push(`/detail/${boat.id}`)}>Full Detail</button>
                </Grid>
            ))}
        </ImageList>
        </>
    )
};

export default BoatList;