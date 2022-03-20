import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Component/Home/Home';


const Routing = () => {
    return(
        <BrowserRouter forceRefresh={true}>
            <Header/>
            <Route exact path="/" component={Home}/>
          
            <Footer/>
        </BrowserRouter>
    )
}

export default Routing;