import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



function Watercraft () {
    const history = useHistory();
    const dispatch = useDispatch();
    const category = useSelector ((store) => store.categoryList)
    console.log('categoryList:', category);


    useEffect (() => {
        dispatch({
            type: "FETCH_CATEGORIES"
        })
    }, [])

    return (
        <>
        <div className="boat">
        <Card sx={{ maxWidth: 345}}>
            <CardMedia
                component="img"
                alt="boat"
                height="140"
                src="https://www.amfam.com/-/media/images/amfam/products/boat/product-page-speed-and-power-boats---m.jpg"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                Boat
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Tug, deck boat, dingy, lifeboat, sailboat, cuddy, 
                pontoon, ferry, houseboat, Center Console Boat, bass boat, bay boat, 
                bowrider, Convertible Fishing Boat, Dual console boat, catamaran, 
                inflatable boats, utility boat and yacht.
            </Typography>
            </CardContent>
            <CardActions>
                <Button 
                    size="small"
                    onClick={(evt) => history.push(`/boat/${category[3]?.id}`)}
                >
                    See More
                </Button>
            </CardActions>
        </Card>
        </div>
        <br />
        <div className="jetski">
        <Card sx={{ maxWidth: 345}}>
            <CardMedia
                component="img"
                alt="jetski"
                height="140"
                src="https://www.highsnobiety.com/static-assets/thumbor/9RQrT1s1Cz1fvE-9Rj2gqH5IG4E=/1600x1067/www.highsnobiety.com/static-assets/wp-content/uploads/2021/06/09114326/supreme-jetski-release-main.jpg"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                Jetski
            </Typography>
            <Typography variant="body2" color="text.secondary">
                A Jet Ski is a small machine like a motorcycle 
                that is powered by a jet engine and can travel on 
                the surface of water.
            </Typography>
            </CardContent>
            <CardActions>
                <Button 
                    size="small"
                    onClick={(evt) => history.push(`/jetski/${category[4]?.id}`)}
                >
                    See More
                </Button>
            </CardActions>
        </Card>
        </div>
        <br />
        <div className="pontoon">
        <Card sx={{ maxWidth: 345}}>
            <CardMedia
                component="img"
                alt="pontoon"
                height="140"
                src="https://www.windsongboatrentals.com/images/boats/black-lexington/gallery_files/vlb_images1/dji_20200904_132131.jpg"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                Pontoon
            </Typography>
            <Typography variant="body2" color="text.secondary">
                A pontoon boat is a flattish boat that relies on floats to remain buoyant. 
                These pontoons contain much reserve buoyancy and allow designers to create 
                large deck plans fitted with a variety of accommodations including expansive 
                lounge areas, stand-up bars, and sun pads
            </Typography>
            </CardContent>
            <CardActions>
                <Button 
                    size="small"
                    onClick={(evt) => history.push(`/pontoon/${category[7]?.id}`)}
                >
                    See More
                </Button>
            </CardActions>
        </Card>
        </div>
        </>
    )
};

export default Watercraft;