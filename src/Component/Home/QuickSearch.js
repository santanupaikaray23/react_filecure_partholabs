import React, {Component} from 'react';
import QuickDisplay from './QuickDisplay';


const url = "http://localhost:9700/booking"

class QuickSearch extends Component{
    constructor(){
        super()

        this.state={
            tripType:''
        }
    }
    render(){
        return(
            <QuickDisplay tripdata={this.state.booking}/>
        )
    }

    componentDidMount(){
        fetch(url,{method:'GET'})
        .then((res)=>res.json())
        .then((data)=>{
            this.setState({booking:data})
        })
    }
}
export default QuickSearch;