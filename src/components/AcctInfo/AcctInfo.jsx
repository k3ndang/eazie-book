import { Container, Grid, Typography } from '@mui/material'

export default () => (
    <Container fixed maxWidth="sm">
        <Grid container spacing={4} padding="1rem">
            <Grid item>
                <Typography variant='h5'><b>Account Info (user types)</b></Typography>
            </Grid>

            <Grid item>
                <Typography variant='h4' >Admin:</Typography>
                <Typography variant="body1">
                    As an admin, you'll have control over the entire Eaziebook
                    network. you'll be able to invite clients and add them to the
                    database, assign categories to bookable items, and view complete
                    lists of clients and bookable items, with the ability to edit or
                    delete any of them. You can also add a photo to any given
                    bookable item.
                </Typography>
            </Grid>

            <Grid item>
                <Typography variant='h4'>Client:</Typography>
                <Typography variant="body1">
                    As a client, you represent a company providing a service and
                    using eaziebook as a middleman for said service. From your page
                    you'll be able to view a list of your company's bookable items,
                    as well as an info table for clients who've booked your items.
                </Typography>
            </Grid>

            <Grid item>
                <Typography variant='h4'>Renter:</Typography>
                <Typography variant="body1">
                    You get to have all the fun! As a renter, you can book any of
                    the services eaziebook provides. Click on make a reservation to
                    view categories, click on a category to your desired item type,
                    select your item, pick your dates to book it, and you're set!
                    You can also view all of your item reservations and see the info
                    for the parent company you booked through.
                </Typography>
            </Grid>
        </Grid>
    </Container>
);
