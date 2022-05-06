import React, {Component} from 'react';
import swal from 'sweetalert'
import { BiMobileAlt } from "react-icons/bi";
// import {BiPlusCircle} from "react-icons/bi"
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlusSquare} from '@fortawesome/free-solid-svg-icons'

const url="http://localhost:9700/placeBooking";

class PlaceOrder extends Component{
    constructor(props){
        super(props)
console.log(">>>>>in constructor")
        this.state={
            id: Math.floor(Math.random()*1000000),
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
         const {patientType,designation,name,phone,whatsapp,email,age,gender,alternatenumber,referral,area,city,pincode,clinicalhistory}=this.state;
         const isEnabled = patientType.length > 0 && designation.length > 0 && name.length >0 && phone.length > 0 && whatsapp.length > 0 && email.length > 0 && age.length > 0 && gender.length > 0 && alternatenumber.length > 0 && referral.length > 0 && area.length > 0 && city.length >0 && pincode.length >0 && clinicalhistory.length >0;
      return(
            <div className="container">
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        Register Here
                    </div>
                    <div className="panel-body">
                        <div className="form-group">
                            <label>Patient ID : </label>
                            <input name="id" value={this.state.id}
                            className="form-conntol" readOnly/>
                        </div>
                     
                        <div className="form-group">
                            <label>Patient Type : </label>
                            <select className="form-control"
                            onChange={(e)=>{this.setState({patientType:e.target.value})}}>
                                 <option>Select</option>
                                <option>Direct</option>
                                <option>Patient</option>
                                </select>
                        </div>
                        <div className="form-group">
                        <label>Designation : </label>
                        <select className="form-control"
                           
                            onChange={(e)=>{this.setState({designation:e.target.value})}}>
                                <option>Select</option>
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
                        </div>
                        
                        <div className="form-group">
                        
                            
                            <label>Full Name : </label>
                            <input name="name" value={this.state.name} 
                            className="form-control" onChange={this.handleChange}/>
                        </div>
                        <div className="form-group">
                            <label>Mobile Number: </label>
                            <input name="phone" value={this.state.phone} 
                            className="form-control" onChange={this.handleChange}/>
                        </div>
                        <div className="form-group">
                         <input type="checkbox" name="whatsapp" value="yes"
                            onChange={this.handleChange}/>&nbsp;
                            <label>Send WhatsApp message to Patient</label>&nbsp;<BiMobileAlt/>
                           </div>
                        <div className="form-group">
                            <label>Email: </label>
                            <input name="email" value={this.state.email} 
                            className="form-control" onChange={this.handleChange}/>
                        </div>
                        <div className="form-group">
                            <label>Age: </label>
                            <input name="age" value={this.state.age} 
                            className="form-control" onChange={this.handleChange}/>
                        </div>
                     <div className="form-group">
                        <label>Gender : </label>&nbsp;&nbsp;
                            <label>Male</label>
                            <input type="radio" name="gender" value="male"
                            onChange={this.handleChange}/>&nbsp;
                            <label>Female</label>
                            <input type="radio" name="gender" value="female"
                            onChange={this.handleChange}/>&nbsp;
                             <label>Other</label>
                            <input type="radio" name="gender" value="other"
                            onChange={this.handleChange}/>&nbsp;
                        </div>
                        <div className="form-group">
                            <label>Alternate Mobile : </label>
                            <input name="alternatenumber" value={this.state.alternatenumber} 
                            className="form-control" onChange={this.handleChange}/>
                        </div>
                        <div className="form-group" style={{width:'29%'}}>
                            <label> Referral : </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <input name="referral" value={this.state.referral} 
                            onChange={this.handleChange}/><FontAwesomeIcon icon={faPlusSquare} style={{width:'15%',height:'15px',cursor:'pointer'}}/>
                        </div>
                        <div className="form-group">
                            <label>Area : </label>
                            <input name="area" value={this.state.area} 
                            className="form-control" onChange={this.handleChange}/>
                        </div>
                        <div className="form-group">
                            <label>City : </label>
                            <input name="city" value={this.state.city} 
                            className="form-control" onChange={this.handleChange}/>
                        </div>
                        <div className="form-group">
                            <label>Pincode : </label>
                            <input name="pincode" value={this.state.pincode} 
                            className="form-control" onChange={this.handleChange}/>
                        </div>
                        <div className="form-group">
                        <label>Clinical History : </label>
                        <select className="form-control"
                            onChange={(e)=>{this.setState({clinicalhistory:e.target.value})}}>
                                <option>List</option>
                                <option>Fever</option>
                                <option>Urine infection</option>
                                <option>High Cholesterol </option>
                             

                            </select>
                        </div>
                        <p style={{color:'red'}}>After selecting all field Register button will visible.</p>
                         <Link to="/home" className="btn btn-danger">Back</Link> &nbsp;
                    <button disabled={!isEnabled} className="btn btn-success" onClick={this.handleSubmit}>Register</button>
                    {/* disabled={!isEnabled} */}
                    </div>
                </div>
            </div>
        )
    }




}
export default PlaceOrder;