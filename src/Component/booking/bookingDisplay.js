import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import swal from 'sweetalert';

// import { PayPalScriptProvider,PayPalButtons } from '@paypal/react-paypal-js';
const testUrl = "http://localhost:9700/Testname";
const priceUrl = "http://localhost:9700/Price?service=";

class bookingDisplay extends Component{
    constructor(props){
        super(props)
console.log(">>>>>in constructor")
        this.state={
            cdate: new Date().toLocaleDateString(),
            ctime: new Date().toLocaleTimeString(),
            id: Math.floor(Math.random()*1000000),
            test:'',
            price:'',
          }
    }
     handleChange = (event) =>{
        this.setState({[event.target.name]:event.target.value})
    }
    handleSubmit = () =>{
        // console.log(this.state)
        fetch('http://localhost:9700/addpaymentBooking',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(this.state)
 })
         swal("","You Registered Successfully!", "success");

    }
     renderTest = (data) => {
        if(data){
            return data.map((item)=>{
                return(
                    <option value={item._id}>
                        {item.test_name}
                    </option>
                )
            })

        }
     
    }
    renderPrice = (data) => {
        if(data){
            return data.map((item)=>{
                return(
                    <option value={item._id}>
                        {item.price_name}
                    </option>
                )
            })

        }
     
    }

    handleTest = (event) =>{
        console.log(event.target.value)
        const testId = event.target.value;
        fetch(`${priceUrl}${testId}`,{method:'GET'})
        .then((res)=> res.json())
        .then((data)=>{
            this.setState({price:data})
        })
    }
    
    render(){
    if(sessionStorage.getItem('userData')){
      return(
         
            <div className="container">
                <div className="panel panel-primary">
                  <form method="POST" action="https://payu.in/pay/BED67DD4EB928EF241E2FB7CE15EFC1F">
                    <div className="panel-body">
                    <div className="form-group">
                            <label>Date : </label>
                        <input name="cdate" value={this.state.cdate}
                        className="form-conntol" readOnly/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              <label>Time : </label>
                        <input name="ctime" value={this.state.ctime}
                        className="form-conntol" readOnly/>
                           
                        </div>
                        <div className="form-group">
                            <label>Your Reg Num (Keep it for your Reference) :</label>
                            <input name="id" value={this.state.id}
                            className="form-control" readOnly/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                           
                           
                        </div>
                        
                        <div className="form-group">
                            
                        <label>Select Test Name with Price (in ₹) :<span style={{color:'red'}}>*</span> </label>
                        <select className="form-control"
                           onChange={this.handleTest}>
                                <option>Select</option>
                               {this.renderTest(this.state.test)}  
                               </select>
                         </div>
                        <div className="form-group">
                        <label>Price (in ₹) :</label> 
                            <div className='form-control'>
                        {this.renderPrice(this.state.price)}
                             </div>
                        </div>     
            {/* <p style={{color:'red'}}>After selecting all field Register button will visible.</p> */}
                         <Link to="/home" className="btn btn-danger">Back</Link> &nbsp;
                    <button className="btn btn-success" onClick={this.handleSubmit}>Pay Now</button>
                    {/* disabled={!isEnabled} */}
                    </div>
                    <div className="panel-heading">
                    PAY WITH PAYPAL
                    </div>
                    <div className='paypal'>
               
                        {/* <PayPalScriptProvider>
              <PayPalButtons/>
          </PayPalScriptProvider> */}
                    </div>
                 </form>
                </div>
            </div>
        )
    }
    }

componentDidMount(){
    fetch(testUrl, {method:'GET'})
    .then((res)=>res.json())
    .then((data)=>{
       this.setState({test:data})
    })
    .catch((err)=>{
        console.log(err)
    })
}


}
export default bookingDisplay;