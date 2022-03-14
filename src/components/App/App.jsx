import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import RenterHistory from '../RenterHistory/RenterHistory'
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import CategoryInput from '../CategoryInput/CategoryInput'
import AboutPage from '../AboutPage/AboutPage';
import UserPage from '../UserPage/UserPage';
import InfoPage from '../InfoPage/InfoPage';
import LandingPage from '../LandingPage/LandingPage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import InviteClient from '../InviteClient/InviteClient';
import BookableItem from '../BookableItem/BookableItem'
import AddBookableItem from '../AddBookableItem/AddBookableItem'
import EditBookableItemForm from '../EditBookableItemForm/EditBookableItemForm'
import ViewBookableItem from '../ViewBookableItem/ViewBookableItem';
import ClientTable from '../ClientTable/ClientTable';
import AllTerrainVehicles from '../AllTerrainVehicles/AllTerrainVehicles';
import Watercraft from '../Watercraft/Watercraft';
import Jetski from '../Watercraft/Jetski/Jetski';
import Boat from '../Watercraft/Boat/Boat';
import Pontoon from '../Watercraft/Pontoon/Pontoon';
import ClientBookableItems from '../ClientBookableItems/ClientBookableItems';
import ClientDetailItem from '../ClientDetailItem/ClientDetailItem';
import BookableItemDetail from "../BookableItemDetail/BookableItemDetail";
import RenterReviewPage from '../RenterReviewPage/RenterReviewPage';
import ThankYou from '../ThankYou/ThankYou';
import SideBySide from '../AllTerrainVehicles/SideBySide.jsx/SideBySide';
import BookableItemList from '../BookableItemsList/BookableItemsList'
import RenterInfo from '../RenterInfo/RenterInfo';
import AddPhoto from '../AddPhoto/AddPhoto';

import './App.css';

function App() {
  const dispatch = useDispatch();

  const user = useSelector(store => store.user);

  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
  }, [dispatch]);

  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
          <Redirect exact from="/" to="/home" />

          {/* Visiting localhost:3000/about will show the about page. */}
          <Route
            // shows AboutPage at all times (logged in or not)
            exact
            path="/about"
          >
            <AboutPage />
          </Route>


          <Route
            // shows AboutPage at all times (logged in or not)
            exact
            path="/viewBookableItem"
          >
            <ViewBookableItem />
          </Route>

          <ProtectedRoute
          exact 
          path="/renterInfo"
          >
            <RenterInfo />
          </ProtectedRoute>


          {/* ROUTES FOR ADMIN */}


          {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}
          <ProtectedRoute
            // logged in shows UserPage else shows LoginPage
            exact
            path="/user"
          >
            <UserPage />
          </ProtectedRoute>

          {/* ROUTE for client invite page */}
          <ProtectedRoute 
            exact
            path='/admin/invite'
          >
            <InviteClient />  
          </ProtectedRoute>

          {/* ROUTE for client table */}
          <ProtectedRoute
            exact 
            path="/clients"
          >
            <ClientTable />  
          </ProtectedRoute>

          {/* ROUTE for bookableItem page */}
          <ProtectedRoute
            exact
            path="/viewBookableItem"
          >
            <ViewBookableItem />
          </ProtectedRoute>

          {/* ROUTE for add bookable item */}
          <Route
            exact
            path="/addBookableItem"
          >
            <AddBookableItem />
          </Route>

          {/* ROUTE for editing an item */}
          <Route
            exact
            path="/editBookableItemForm/:id"
          >
            <EditBookableItemForm />
          </Route>

            
          <ProtectedRoute

            exact
            path='/renterHistory'
          >
              <RenterHistory />
            </ProtectedRoute>
          <ProtectedRoute
           exact
            path="/categoryInput"
          >
            <CategoryInput />
          </ProtectedRoute>

          <ProtectedRoute
            exact
            path="/addPhotos/:id"
          >
            <AddPhoto />
          </ProtectedRoute>

          {/* ROUTE for info page */}
          <ProtectedRoute
            // logged in shows InfoPage else shows LoginPage
            exact
            path="/info"
          >
          <Route>
            <EditBookableItemForm />
          </Route>

          <Route>
            <InfoPage />
          </Route>
            
          </ProtectedRoute>

          {/* END OF ROUTES FOR ADMIN */}

          {/* ROUTES FOR CLIENT */}

          {/* ROUTE for client bookable items */}
          <ProtectedRoute
            exact
            path="/clientBookableItems"
          >
          <Route>
            <ClientBookableItems />
          </Route>

          </ProtectedRoute>

          {/* ROUTE for specific client bookable items */}
          <ProtectedRoute
            exact 
            path="/clientBookableItems/:id"
          >
            <ClientDetailItem />
          </ProtectedRoute>

          {/* END OF ROUTES FOR CLIENT */}








          {/* ROUTES FOR RENTER */}

          {/* ROUTE for renter history */}
          <Route
            exact
            path='/renterHistory'
          >
              <RenterHistory />
          </Route>

          {/* ROUTE for renter watercraft */}
          <Route
            exact
            path="/watercraft"
          >
            <Watercraft />
          </Route>

          {/* ROUTE for renter jetski's */}
          <Route 
            exact
            path="/jetski/:jetskiId"
          >
            <Jetski />
          </Route>

          {/* ROUTE for renter boat's */}
          <Route 
            exact
            path="/boat/:boatId"
          >
            <Boat />
          </Route>
            <ProtectedRoute
            exact 
            path='/bookableItemList'
            >

            </ProtectedRoute>

          {/* ROUTE for renter pontoon's */}
          <Route 
            exact
            path="/detail/:id"
          >
            <BookableItemDetail />
          </Route>

          <Route 
            exact
            path="/pontoon/:pontoonId"
          >
            <Pontoon />
          </Route>

          {/* ROUTE for renter all terrain vehicles */}
          <Route
            exact
            path='/allTerrain'
          >
            <AllTerrainVehicles />  
          </Route>

          {/* ROUTE for renter Side-By-Side's */}
          <Route
            exact
            path='/sidebyside/:sidebysideId'
          >
            <SideBySide />
          </Route>

          {/* END OF ROUTES FOR RENTER */}

          

          <Route
            exact
            path="/login"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect to the /user page
              <Redirect to="/user" />
              :
              // Otherwise, show the login page
              <LoginPage />
            }
          </Route>

          <Route
            exact
            path="/registration"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect them to the /user page
              <Redirect to="/user" />
              :
              // Otherwise, show the registration page
              <RegisterPage />
            }
          </Route>
      

          <Route
            exact
            path="/renterReviewPage"
          >
            <RenterReviewPage />
          </Route>

          <Route 
            exact
            path="/thankyou"
          >
            <ThankYou />
          </Route>

          <Route
            exact
            path="/home"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect them to the /user page
              <Redirect to="/user" />
              :
              // Otherwise, show the Landing page
              <LandingPage />
            }
          </Route>

          

          {/* If none of the other routes matched, we will show a 404. */}
          <Route>
            <h1>404</h1>
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
