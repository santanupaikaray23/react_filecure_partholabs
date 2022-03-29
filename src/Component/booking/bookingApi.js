import React,{Component} from 'react';
import axios from 'axios';
import BookingDisplay from './bookingDisplay';


const url = "http://localhost:9700/placeBooking";

class viewBooking extends Component{
    constructor(){
        super()

        this.state={
            addplaceBooking:''

        }

    }
    render(){
        return(
            <BookingDisplay bookdata={this.state.addplaceBooking}/>
        )
    }
    componentDidMount(){
        axios.get(url).then((res)=>{this.setState({addplaceBooking:res.data})})
    }
}

export default viewBooking