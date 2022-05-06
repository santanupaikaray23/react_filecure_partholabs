import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import './Search.css';


const serviceUrl = "http://localhost:9700/Service";
const servicetypeUrl = "http://localhost:9700/types?service=";

class Search extends Component{
    constructor(props){
        super(props)
console.log(">>>>in constructor")
        this.state={
           Service:'',
           servicetypes:''
        }
    }

    renderService = (data) => {
        if(data){
            return data.map((item)=>{
                return(
                    <option value={item._id}>
                        {item.service_name}
                    </option>
                )
            })

        }
        
    }

    renderServicetype = (data) => {
        if(data){
            return data.map((item)=>{
                return(
                    <option value={item._id}>
                        {item.service_name}
                    </option>
                )
            })

        }
        
    }

    handleService = (event) =>{
        console.log(event.target.value)
        const serviceId = event.target.value;
        fetch(`${servicetypeUrl}${serviceId}`,{method:'GET'})
        .then ((res)=>res.json())
        .then((data)=>{
            this.setState({servicetypes:data})
        })
    }
    handleServicetype = (event) => {
        this.props.history.push(`details/${event.target.value}`)
    }
    
    render(){
        console.log(">>>in search",this.props)
        // console.log(">>>>in render", this.state.Service)
        return(
            <div className="imageContainer">
                <div id="logo">
                <img src="https://i.ibb.co/CvSTddZ/Capture.png" width="100%" height="110%"></img>
                </div>
                <div className="heading">
             Polt No:2505/555,Jharpada,Near UCO Bank Colony,Bhubaneswar-751006
                </div>
                <div className="servicetypeSelector">
                    <select className="servicetypeDropDown" onChange={this.handleService}>
                        <option>----SELECT SERVICE----</option>
                        {this.renderServicetype(this.state.Service)}
                    </select>
                    <select className="serviceDropDown" onChange={this.handleServicetype}>
                        <option>----SELECT SERVICE TYPE----</option>
                        {this.renderService(this.state.servicetypes)}
                    </select>
                </div>
            </div>
        )
    }

    ///on page load call api
    componentDidMount(){
        console.log(">>>>in componentDidMount")
    //we get the data and update the state
    fetch(serviceUrl, {method:'GET'}) 
    //return the promise here
    .then((res)=>res.json())
    //get the data
    .then((data)=>{
        this.setState({Service:data})

    })
    //error handling
    .catch((err)=>{
        console.log(err)
    })

    }
}
export default withRouter(Search);