import axios from 'axios';
import React, {Component} from 'react';
import ListingDisplay from './listingDisplay';
 
const url= "http://localhost:9700/servicedetails"

class Listing extends Component{
    constructor(){
        super()
      
        this.state={
            servicedetails:''
        }
    }
    render(){
      
        return(
            <div className="row">
                  <div className="col-md-10">
                  <ListingDisplay listdata={this.state.servicedetails}/>  
                </div>
            </div>
        )
    }

    componentDidMount(){
        let tripId = this.props.match.params.id;
        axios.get(`${url}/${tripId}`)
        .then((res)=>{this.setState({servicedetails:res.data})})
    }
  
}
export default Listing;