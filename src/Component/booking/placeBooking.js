import React, {Component} from 'react';
import swal from 'sweetalert'
import { BiMobileAlt } from "react-icons/bi";
// import {BiPlusCircle} from "react-icons/bi"
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlusSquare} from '@fortawesome/free-solid-svg-icons';


const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  );

const formValid = formErrors =>{
    let valid = true;

    Object.values(formErrors).forEach(val=>{val.length> 0 && (valid=false)
    });
    return valid;
}

// import show from 'show';
// import React, { useState } from 'react';
// import Popup from '../Popup';
// import Control from 'react-select/dist/declarations/src/components/Control';
// import { classNames } from 'react-select/dist/declarations/src/utils';

// const url="http://localhost:9700/placeBooking";
const designationUrl="http://localhost:9700/Designation";
const genderUrl="http://localhost:9700/Gender?service=";

class PlaceOrder extends Component{
    // const [show, setShow] = useState(false);
    constructor(props){
        super(props)
console.log(">>>>>in constructor")
        this.state={
            location:'',
            showMe:true,
            patientType:'',
            name:'',
            numtypewithcountry:'',
            phone:'',
            whatsapp:'',
            email:'',
            age:'',
            agetype:'',
            genders:'',
            alternatenumber:'',
            referral:'',
            area:'',
            city:'',
            pincode:'',
            clinicalhistory:'',
            doctername:'',
            docterphonenumber:'',
            formErrors:{
                patientType:'',
                name:'',
                numtypewithcountry:'',
                phone:'',
                whatsapp:'',
                email:'',
                age:'',
                agetype:'',
                genders:'',
                alternatenumber:'',
                referral:'',
                area:'',
                city:'',
                pincode:'',
                clinicalhistory:'',
                doctername:'',
                docterphonenumber:''

            }


        }
    }
    
    operation()
    {
        this.setState({
            showMe:false
        })
    }

    handleChange = (event) =>{
        this.setState({[event.target.name]:event.target.value})
        // const [openPopup,setopenPopup] = useState(false)
    }
    
    handleSubmit = (e) =>{
        fetch('http://localhost:9700/addplaceBooking',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(this.state)

        })
        swal(`Hi !! ${this.state.name}`, "You Registered Successfully!", "success");
        //   swal(` Name : ${this.state.name}  referral : ${this.state.referral} patientType : ${this.state.patientType} Reg no : ${this.state.id}`)
          
          
           
         this.props.history.push('/viewBooking')
        e.preventDefault();
        // console.log(this.state)
        if(formValid(this.state.formErrors)){
            console.log(`
            Name: ${this.state.name}
            Numtypewithcountry:${this.state.numtypewithcountry}
            Phone:${this.state.phone}
            Whatsapp:${this.state.whatsapp} 
            Email:${this.state.email}
            Age:${this.state.age}
            Agetype:${this.state.agetype}
            Genders:${this.state.genders}
            Alternatenumber:${this.state.alternatenumber}
            Referral:${this.state.referral} 
            Area:${this.state.area}
            City:${this.state.city}
            Pincode:${this.state.pincode}
            Clinicalhistory:${this.state.clinicalhistory}
            Doctername:${this.state.doctername}
            Docterphonenumber:${this.state.docterphonenumber}`
            )
        }else{
            swal("", "Something is Wrong !! Please try Again.","error");
              this.props.history.push('/booking/:service_name')
        }
       
     

    }
    renderDesignation = (data) => {
        if(data){
            return data.map((item)=>{
                return(
                    <option value={item.designation}>
                        {item.designation_name}
    
                    </option>
                )
            })

        }
    
    }
    renderGender = (data) => {
        if(data){
            return data.map((item)=>{
                return(
                    <option value={item.designation}>
                        {item.service_name}
    
                    </option>
                )
            })

        }
    
    }
    handleDesignation = (event) =>{
        console.log(event.target.value)
        const servideId = event.target.value;
        fetch(`${genderUrl}${servideId}`,{method:'GET'})
        .then((res)=>res.json())
        .then((data)=>{
            this.setState({genders:data})
        })
    }
    handleChange = e =>{
        e.preventDefault();
        const {name,value} = e.target;
        let formErrors = this.state.formErrors;

       

        switch(name){
            case 'name':
                formErrors.name = 
                value.length < 3
                ? 'minimum 3 characaters required' 
                : "";
                break;
                case 'phone':
                    formErrors.phone = 
                    value.length < 10 
                    ? 'minimum 10 numbers required' 
                    : "";
                    break;
                    case 'email':
                        formErrors.email = 
                        emailRegex.test(value) && value.length > 0 
                        ? '' 
                        : 'invalid email address';
                        break;
                        case 'alternatenumber':
                            formErrors.alternatenumber = 
                            value.length < 10 
                            ? 'minimum 10 numbers required' 
                            : "";
                            break;
                            case 'doctername':
                                formErrors.doctername = 
                                value.length < 3 
                                ? 'minimum 3 characaters required' 
                                : "";
                                break;
                                case 'docterphonenumber':
                                    formErrors.docterphonenumber = 
                                    value.length < 10 
                                    ? 'minimum 10 numbers required' 
                                    : "";
                                    break;
                        
                        case 'age':
                            formErrors.age = 
                            value.length < 2 
                            ? 'minimum 2 numbers required' 
                            : "";
                            break;
                            case 'area':
                                formErrors.area = 
                                value.length < 12 
                                ? 'minimum 12 characaters required' 
                                : "";
                                break;
                                case 'city':
                                    formErrors.city = 
                                    value.length < 4  
                                    ? 'minimum 4 characaters required' 
                                    : "";
                                    break;
                                    case 'pincode':
                                        formErrors.pincode = 
                                        value.length < 6 
                                        ? 'minimum 6 characaters required' 
                                        : "";
                                        break;
                                      
                            default:
                                break;
                
        }
        this.setState({formErrors,[name]:value},()=>console.log(this.state))
    }
 
    render(){
        const {formErrors} = this.state;
        // console.log(">>>>in render>>>>>", this.state.location)
        const {patientType,name,phone,whatsapp,email,age,alternatenumber,area,city,pincode,clinicalhistory,numtypewithcountry,agetype}=this.state;
          const isEnabled = patientType.length >0 && name.length >0 && phone.length > 0 && whatsapp.length >0 && email.length >0 && age.length >0 && alternatenumber.length >0 && area.length >0 && city.length >0 && pincode.length >0 && clinicalhistory.length >0 && numtypewithcountry.length>0 && agetype.length>0;
      return(
            <div className="container">
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        Register Here
                    </div>
                    <div className="panel-body">
                        {/* <div className="form-group">
                        <label>Date : </label>
                        <input name="cdate" value={this.state.cdate}
                        className="form-conntol" readOnly/>
                           
                        </div> */}
                     <form onSubmit={this.handleSubmit} noValidate>
                        <div className="form-group">
                            <label>Patient Type : </label>
                            <select className="form-control"
                            onChange={(e)=>{this.setState({patientType:e.target.value})}}>
                                 <option>Select</option>
                                <option>Direct</option>
                                <option>Patient</option>
                                </select>
                        </div>
                        <div className="form-group" style={{width:'8%'}}>
                        <label>Name : </label> 
                            <select className='form-control' onChange={this.handleDesignation}>
                         
                        {/* <select className="form-control"
                           
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

                            </select> */}
                            <option>select</option>
                            {this.renderDesignation(this.state.location)}
                        </select>
                        </div>
                        
                        <div className="form-group" style={{width:'86%',marginTop:'-48px',marginLeft:'92px'}}>
                        <input name="name" value={this.state.name} 
                            className="form-control" onChange={this.handleChange}/>
                            {formErrors.name.length>0 && (
                                <span className='errorMessage' style={{color:'red'}}>{formErrors.name}</span>
                            )}
                        </div>
                       
                        <div className="form-group" style={{width:'8%'}}>
                        <label>Mobile Num : </label>
                            <select className="form-control"
                            onChange={(e)=>{this.setState({numtypewithcountry:e.target.value})}}>
                                 <option>Select</option>
                                <option>+91</option>
                                <option>+61</option>
                                <option>+93</option>
                                <option>+43</option>
                                 <option>+44</option>
                                </select>
                        </div>
                        <div className="form-group" style={{width:'86%',marginTop:'-48px',marginLeft:'92px'}}>
                           
                            <input name="phone" value={this.state.phone} 
                            className="form-control" onChange={this.handleChange}/>
                              {formErrors.phone.length>0 && (
                                <span className='errorMessage' style={{color:'red'}}>{formErrors.phone}</span>
                            )}
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
                              {formErrors.email.length>0 && (
                                <span className='errorMessage' style={{color:'red'}}>{formErrors.email}</span>
                            )}
                        </div>
                        <div className="form-group" style={{width:'20%'}}>
                            <label>Age: </label>
                            <input name="age" value={this.state.age} 
                            className="form-control" onChange={this.handleChange}/>
                              {formErrors.age.length>0 && (
                                <span className='errorMessage' style={{color:'red'}}>{formErrors.age}</span>
                            )}
                        </div>
                        <div className="form-group" style={{width:'20%',marginTop:'-48px',marginLeft:'228px'}}>
                       
                            <select className="form-control"
                            onChange={(e)=>{this.setState({agetype:e.target.value})}}>
                                 <option>Select Age Type</option>
                                <option>YEARS</option>
                                <option>MONTHS</option>
                                </select>
                        </div>
                     {/* <div className="form-group">
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
                        </div> */}
                         <div className="form-group">
                        <label>Gender : </label> 
                            <div className='form-control' readOnly
                         >
                        
                         {this.renderGender(this.state.genders)}
                            
                        </div>
                        </div>
                        <div className="form-group">
                            <label>Alternate Mobile : </label>
                            <input name="alternatenumber" value={this.state.alternatenumber} 
                            className="form-control" onChange={this.handleChange}/>
                              {formErrors.alternatenumber.length>0 && (
                                <span className='errorMessage' style={{color:'red'}}>{formErrors.alternatenumber}</span>
                            )}
                        </div>
                        <div onChange={()=>this.operation()} className="form-group">
                        <label> Do you have Referral ? :<span style={{color:'red'}}>*</span></label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <select className="form-control"
                            onChange={(e)=>{this.setState({referral:e.target.value})}}>
                                 <option>YES</option>
                                <option>SELF</option>
                                </select>
                            {
                                this.state.showMe?
                                <div className="form-group"><br/>
                                <label>If "YES" Add Referral : </label>
                            <button type="button" class="btn btn-info" data-toggle="modal" data-target="#exampleModal">
                            <FontAwesomeIcon icon={faPlusSquare} style={{height:'15px',cursor:'pointer'}}/>
                             
                          </button>
                          {this.state.doctername}
                          </div>
                          :null
                            }
     
                            
                                </div> 
                            
                         
                          <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Please Add Referral Details</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
          <label htmlFor="title">Enter Referral Docter's Name :</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input type="text" id="title" name='doctername' value={this.state.doctername} onChange={this.handleChange}/><br/><br/>
        {formErrors.doctername.length>0 && (
                                <span className='errorMessage' style={{color:'red',marginLeft:'220px'}}>{formErrors.doctername}</span>
                            )}
                                </div>
        {/* <label htmlFor="title">Enter Referral Hospital Name :</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input type="text" id="title" name='docterplace' value={this.state.docterplace} onChange={this.handleChange}/><br/><br/> */}
        <div class="modal-body">
        <label htmlFor="title">Enter Referral Docter's Phone no:</label>
        <input type="text" id="title" name='docterphonenumber' value={this.state.docterphonenumber} onChange={this.handleChange}/>
        {formErrors.docterphonenumber.length>0 && (
                                <span className='errorMessage' style={{color:'red',marginLeft:'220px'}}>{formErrors.docterphonenumber}</span>
                            )}
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-success" data-dismiss="modal">Save</button>
        
      
      </div>
      
      
    </div>
  </div>
</div>
   
                            
                       
                        {/* <Controls.Button text="Add New" variant="outlined" startIcon={<AddIcon/>} className={classNames.newButton} onClick={()=>setopenPopup(true)}/> */}
                        {/* <div className="form-group">
                        <label>Referral : </label>
                        <select className="form-control"
                           
                            onChange={(e)=>{this.setState({referral:e.target.value})}}>
                                <option>Select</option>
                                <option>SELF</option>
                                <option>Patia(Heart Specialist)</option>
                                <option>Subu(Skin Specialist)</option>
                                <option>Priyanka(Tooth Specialist)</option>
                                </select>
                        </div> */}
                        <div className="form-group">
                            <label>Area : </label>
                            <input name="area" value={this.state.area} 
                            className="form-control" onChange={this.handleChange}/>
                              {formErrors.area.length>0 && (
                                <span className='errorMessage' style={{color:'red'}}>{formErrors.area}</span>
                            )}
                        </div>
                        <div className="form-group">
                            <label>City : </label>
                            <input name="city" value={this.state.city} 
                            className="form-control" onChange={this.handleChange}/>
                              {formErrors.city.length>0 && (
                                <span className='errorMessage' style={{color:'red'}}>{formErrors.city}</span>
                            )}
                        </div>
                        <div className="form-group">
                            <label>Pincode : </label>
                            <input name="pincode" value={this.state.pincode} 
                            className="form-control" onChange={this.handleChange}/>
                              {formErrors.pincode.length>0 && (
                                <span className='errorMessage' style={{color:'red'}}>{formErrors.pincode}</span>
                            )}
                        </div>
                        <div className="form-group">
                        <label>Clinical History : </label>
                        <select className="form-control"
                            onChange={(e)=>{this.setState({clinicalhistory:e.target.value})}}>
                                <option>List</option>
                                <option>Diabetes</option>
                                <option>Nephrotic syndrome</option>
                                <option>High Blood Pressure</option>
                                <option>Heart Disease</option>
                                <option>Kidney Failure</option>
                                <option>Dengu</option>
                                <option>Fever</option>
                                <option>Urine infection</option>
                                <option>High Cholesterol </option>
                             

                            </select>
                        </div>
                        {/* <p style={{color:'red'}}>After selecting all field Register button will visible.</p> */}
                         <Link to="/home" className="btn btn-danger">Back</Link> &nbsp;
                    <button className="btn btn-success" disabled={!isEnabled} onClick={this.handleSubmit}>Register</button>
                    {/* disabled={!isEnabled} */}
                    {/* <Popup openPopup={openPopup}
                    setopenPopup={setopenPopup}>

                    </Popup> */}
                    </form>
                 </div>
                </div>
            </div>
        )
    }

///call api
componentDidMount(){
    fetch(designationUrl,{method:'GET'})
    .then((res)=>res.json())
    .then((data)=>{
        this.setState({location:data})
    })
    .catch((err)=>{
        console.log(err)
    })
}


}
export default PlaceOrder;