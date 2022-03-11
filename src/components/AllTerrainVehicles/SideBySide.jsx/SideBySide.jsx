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
            type: 'FETCH_SIDEBYSIDE',
            payload: params.sideBySideId
        })
    }, [params.sideBySideId]);

    const sideBySide = useSelector(store => store.sideBySide);

    return(
        <>
        <h2>Side-By-Side</h2>
        <ImageList sx={{width: 900, height: 750}}>
            {sideBySideList.map((item) => (
                <Grid container key={item.id}>
                    <Grid item>
                        <ImageListItem>
                            <img
                                src="https://www.windsongboatrentals.com/images/boats/black-lexington/gallery_files/vlb_images1/dji_20200904_132131.jpg"
                                alt={item.title}
                            />
                        </ImageListItem>
                        <Typography variant="h4">{item.title}</Typography>
                        <Typography variant="h6">Summary: {item.summary}</Typography>
                        <Typography variant="h6">Detail: {item.detail}</Typography>
                        <Typography variant="h6">Rate: {item.rate}</Typography>
                    </Grid>
                </Grid>
            ))}
        </ImageList>
        </>
    )
}

export default SideBySide;