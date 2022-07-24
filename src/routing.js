import { BrowserRouter,Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
// import './routing.css';
// import Profile from './Component/Profile/Profile'
import Home from './Component/Home/Home';
import ListingApi from './Component/listing/listingApi';
import DetailComponent from './Component/details/details';
 import PlaceBooking from './Component/booking/placeBooking';
 import BookingComponent from './Component/booking/bookingDisplay';
//  import Post from './Component/Post/Post';
 import LoginComponent from './Component/Login';
 import RegisterComponent from './Component/Register';
 import UserComponent from './Component/UserApi';
 import Logout2Component from './Component/Home/Logout2';
 import LogoutComponent from './Component/Logout';
//  import CheckoutComponent from './Component/Checkout';

// import Checkout from './Component/Checkout';


 
 

       


 const Routing = () => {


    
  
    return(
        <BrowserRouter forceRefresh={true}>
  
        <Header/>
        {/* <PayPalScriptProvider options={{"client-id":process.env.REACT_APP_PAYPAL_CLIENT_ID}}>
                
                      
                <Route path="/checkout" element={<><Checkout/></>}/>
         
 
        </PayPalScriptProvider> */}
       
       <Route path="/logout2" component={Logout2Component}/>  
       <Route exact path="/" component={LoginComponent}/>
       <Route path="/register" component={RegisterComponent}/>
       <Route path="/show" component={UserComponent}/>
       <Route exact path="/home" component={Home}/>
       {/* <Route path="/checkout" component={CheckoutComponent}/> */}

      
       {/* <Route exact path="/profile" component={Profile}/> */}
       {/* <Route exact path="/Post" component={Post}/> */}
       
   
       <Route path="/list/:id" component={ListingApi}/>
       <Route path="/details/:id" component={DetailComponent}/>
       <Route path="/booking/:service_name" component={PlaceBooking}/>
       
       <Route path="/viewBooking" component={BookingComponent}/>
    
       <Route path="/logout" component={LogoutComponent}/>
       
     
  
      
       <Footer/>
      
       </BrowserRouter>
       
     

    )
}
export default Routing;