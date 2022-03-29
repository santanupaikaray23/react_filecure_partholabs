import React from 'react';
import { Link } from 'react-router-dom';
import './listing.css';



const ListingDisplay = (props) =>{
    const renderList = ({listdata})=>{
        if (listdata){
            if(listdata.length>0){
                return listdata.map((item)=>{
                    return(
                        <div className="item">
                            <div className="row">
                                <div className="col-md-5">
                                    <img className="Image" src={item.thumb}/>
                                </div>
                                <div className="col-md-7">
                                    <div className="service_name">
                                        <Link to={`/details/${item._id}`}>({item.name} Click here to go head)</Link>
                                        {/* <div className="service_name">{item.service_name}</div> */}
                                     
                                    </div>
                                </div>
                            </div>
                            <hr/>
                            
                        </div>
                    )
                })
                

            }else{
                return(
                    <div className="item">
                        <h1>No Data Found</h1>
                    </div>
                )

            }
            
        }else{
            return(
                <div className="item">
                    <img src="/images/loader.gif"/>
                </div>
            )
        }
    }

return (
    <div className="container-fluid">
        <div className="main-heading">
            <div className="col-md-12">
                {renderList(props)}
            </div>
        </div>
    </div>
)
}
export default ListingDisplay;