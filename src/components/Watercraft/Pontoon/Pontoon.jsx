import { useEffect } from 'react';
import { useHistory, useParams }  from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid';




function PontoonList () {
    const history = useHistory();
    const params = useParams();
    console.log("categoryId is", params) 
    const dispatch = useDispatch();

    const pontoonList = useSelector((store) => store.bookableItem.bookableItemReducer);

    useEffect (() => {
        dispatch({
            type: "RENTER_FETCH_BOOKABLE_ITEM",
            payload: params.pontoonId
        });
    }, [params.pontoonId])
    
    return (
        <>
        <h2>Pontoon</h2>
        <ImageList sx={{ width: 900, height: 750 }}>
            {pontoonList.map((pontoon) => (
                <Grid container key={pontoon.id}>
                    <Grid item>
                        <ImageListItem>
                            <img 
                                src="https://www.windsongboatrentals.com/images/boats/black-lexington/gallery_files/vlb_images1/dji_20200904_132131.jpg"
                                alt={pontoon.title}
                            />
                        </ImageListItem>
                        <Typography variant='h4'>{pontoon.title}</Typography>
                        <Typography variant='h6'>Summary: {pontoon.summary}</Typography>
                        <Typography variant='h6'>Detail: {pontoon.detail}</Typography>
                        <Typography variant='h6'>Rate: {pontoon.rate}</Typography>
                    </Grid>
                    <button onClick={(evt) => history.push(`/detail/${pontoon.id}`)}>Full Detail</button>
                </Grid>
            ))}
        </ImageList>
        </>
    )
};

export default PontoonList;