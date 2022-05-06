import React, {Component} from 'react';
import swal from 'sweetalert'
import { BiMobileAlt } from "react-icons/bi";
import {Link} from 'react-router-dom';




class bookingDisplay extends Component{
    constructor(props){
        super(props)
console.log(">>>>>in constructor")
        this.state={
           
            patientType:'',
            designation:'',
            name:'',
            phone:'',
            whatsapp:'',
            email:'',
            age:'',
            gender:'',
            alternatenumber:'',
            referral:'',
            area:'',
            city:'',
            pincode:'',
            clinicalhistory:''


        }
    }

    handleChange = (event) =>{
        this.setState({[event.target.name]:event.target.value})
    }
    handleSubmit = () =>{
        // console.log(this.state)
        fetch('http://localhost:9700/addplaceBooking',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(this.state)

        })
         swal(`${this.state.designation}${this.state.name}(${this.state.gender}-${this.state.age}) , Ref : ${this.state.referral}, ${this.state.patientType} , Reg No : ${this.state.id}`, "You Registered Successfully!", "success");
    //   swal(` Name : ${this.state.name}  referral : ${this.state.referral} patientType : ${this.state.patientType} Reg no : ${this.state.id}`)
      
      
       
         this.props.history.push('/viewBooking')

    }
    render(){
        //  const {patientType,designation,name,phone,whatsapp,email,age,gender,alternatenumber,referral,area,city,pincode,clinicalhistory}=this.state;
        //  const isEnabled = patientType.length > 0 && designation.length > 0 && name.length >0 && phone.length > 0 && whatsapp.length > 0 && email.length > 0 && age.length > 0 && gender.length > 0 && alternatenumber.length > 0 && referral.length > 0 && area.length > 0 && city.length >0 && pincode.length >0 && clinicalhistory.length >0;
      return(
            <div className="container">
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        Make Payment Here
                    </div>
                    <div className="panel-body">
                        <div className="form-group">
                            
                            <select className="form-control"
                            onChange={(e)=>{this.setState({patientType:e.target.value})}}>
                                 <option>Select for different price list</option>
                                <option>Direct</option>
                                <option>Patient</option>
                                </select>
                                <label>Refferial price list (Optional) </label>
                        </div>
                        <div className="form-group">
                       
                        <select className="form-control"
                           
                            onChange={(e)=>{this.setState({designation:e.target.value})}}>
                                <option>Select for different price list</option>
                                <option>Mr.</option>
                                <option>Mrs.</option>
                                <option>Ms.</option>
                                <option>Master</option>
                                <option>Miss</option>
                                <option>Smt.</option>
                                <option>Dr.</option>
                                <option>Baby or Just Born(B/o)</option>
                                <option>Baby</option>

                            </select>
                            <label>Discount Price List(Optional) </label>
                        </div>
                        
                        <div className="form-group">
                        
                            
                            <label>Test Name : </label>
                            <input name="name" value={this.state.name} 
                            className="form-control" onChange={this.handleChange}/>
                        </div>
                        <div className="form-group">
                            <label>Price (in ₹) : </label>
                            <input name="phone" value={this.state.phone} 
                            className="form-control" onChange={this.handleChange}/>
                        </div>
                        
                        <div className="form-group">
                            <label>Concession (in ₹) : </label>
                            <input name="email" value={this.state.email} 
                            className="form-control" onChange={this.handleChange}/>
                        </div>
                        <div className="form-group">
                            <label>1.THYROAD PROFILE. TOTAL : </label>
                            <input name="email" value={this.state.email} 
                            className="form-control" onChange={this.handleChange}/>
                        </div>
                       
                        {/* <p style={{color:'red'}}>After selecting all field Register button will visible.</p> */}
                         <Link to="/home" className="btn btn-danger">Back</Link> &nbsp;
                    <button className="btn btn-success" onClick={this.handleSubmit}>Register</button>
                    {/* disabled={!isEnabled} */}
                    </div>
                </div>
            </div>
        )
    }




}
export default bookingDisplay;