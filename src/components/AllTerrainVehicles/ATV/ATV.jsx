import { useEffect } from 'react';
import { useHistory, useParams }  from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid';


function ATV(){
    const history = useHistory();
    const params = useParams();
    console.log("categoryId is", params) 
    const dispatch = useDispatch();

    const ATVList = useSelector((store) => store.bookableItem.bookableItemReducer);

    useEffect (() => {
        dispatch({
            type: "RENTER_FETCH_BOOKABLE_ITEM",
            payload: params.ATV
        });
    }, [params.ATV])

    return(
        <>
        <h2>ATV</h2>
        <ImageList sx={{ width: 900, height: 750 }}>
            {ATVList.map((item) => (
                <Grid container key={item.id}>
                    <Grid item>
                        <ImageListItem>
                            <img 
                                src={item.url[0]}
                                alt={item.title}
                            />
                        </ImageListItem>
                        <Typography variant='h4'>{item.title}</Typography>
                        <Typography variant='h6'>Summary: {item.summary}</Typography>
                        <Typography variant='h6'>Detail: {item.detail}</Typography>
                        <Typography variant='h6'>Rate: {item.rate}</Typography>
                    </Grid>
                    <button onClick={(evt) => history.push(`/detail/${item.id}`)}>Full Detail</button>
                </Grid>
            ))}
        </ImageList>
        </>
    )
}

export default ATV;
