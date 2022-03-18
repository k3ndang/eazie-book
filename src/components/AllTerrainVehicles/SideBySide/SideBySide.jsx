import { useEffect } from 'react';
import { useHistory, useParams }  from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid';


function SideBySide(){

    const history = useHistory();
    const params = useParams();
    console.log("categoryId is", params);
    const dispatch = useDispatch();

    const sideBySideList = useSelector((store) => store.bookableItem.bookableItemReducer);

    useEffect(() => { 
        dispatch({
            type: 'RENTER_FETCH_BOOKABLE_ITEM',
            payload: params.sideBySideId
        })
    }, [params.sideBySideId]);

    return(
        <>
        <h2>Side-By-Side</h2>
        <ImageList sx={{width: 900, height: 750}}>
            {sideBySideList.map((item) => (
                <Grid container key={item.id}>
                    <Grid item>
                            <img
                                src={item.url[0]}
                                alt={item.title}
                                width="5000px"
                                height="400px"
                            />
                        <Typography variant="h4">{item.title}</Typography>
                        <Typography variant="h6">Summary: {item.summary}</Typography>
                        <Typography variant="h6">Detail: {item.detail}</Typography>
                        <Typography variant="h6">Rate: ${item.rate}</Typography>
                    </Grid>
                    <button onClick={(evt) => history.push(`/detail/${item.id}`)}>Full Detail</button>
                </Grid>
            ))}
        </ImageList>
        </>
    )
}

export default SideBySide;