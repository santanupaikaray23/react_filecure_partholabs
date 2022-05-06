import React from 'react';
import Search from './Search';
import QuickSearch from './QuickSearch';
import Logout2 from './Logout2';

const Home = () => {
    return(
        <div>
            <Search/>
            <QuickSearch/>
            <Logout2/>
        </div>
    )
}

export default Home;