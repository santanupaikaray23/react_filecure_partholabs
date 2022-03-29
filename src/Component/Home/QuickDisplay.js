import React from 'react';
import './QuickSearch.css';
import {Link} from 'react-router-dom';

const QuickDisplay = (props)=>{
   const listTrip = ({tripdata}) => {
       if(tripdata){
           return tripdata.map((item)=>{
               return(
                   <Link to={`/list/${item._id}`}>
                       <div className="tileContainer">
                           <div className="tileComponent1">
                               <img src={item.image}/>
                           </div>
                           <div className="tileComponent2">
                               <div className="componentHeading">
                                  Click Here to get {item.name}
                               </div>
                             
                           </div>
                       </div>
                   </Link>
               )
           })
       }
   } 
    return(
        <div className="quickSearchContainer">
            <p className="quickSearchHeading">
                QuickSearch
            </p>
           
           <br/>
           {listTrip(props)}
        </div>
    )
}
export default QuickDisplay;
