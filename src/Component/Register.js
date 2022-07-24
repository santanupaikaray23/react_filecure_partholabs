import React, {Component} from 'react';
import {Link} from 'react-router-dom';


const url="http://localhost:5000/api/auth/register";

class Register extends Component{
    constructor(props){
        super(props)

        this.state={
              name:'',
              email:'',
              password:'',
              phone:''
          
        
        }
    }

    handleChange = (event)=>{
        this.setState({[event.target.name]:event.target.value})
    }
    handleSubmit = () =>{
       
      
        fetch(url,{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(this.state)

        })
        .then( this.props.history.push('/home'))

        alert("Registered Successfull")
        
        
        
     
    }
    render(){
        // const {name,phone,mail,message}=this.state;
        //     const isEnabled = name.length > 0 && phone.length > 0 && mail.length >0 && message.length > 0;

        return(
            
            <div className="container">
                <div className="panel panel-info">
                    <div className="panel-heading">
                      <h3> Register </h3>
                    </div>
                   

                    </div>
                   <div className="panel-body">
                      <div className="form-group">
                        <label>Name</label>
                        <input name="name" value={this.state.name}
                        className="form-control" onChange={this.handleChange}/>

                    </div>
                     <div className="form-group">
                        <label>Phone</label>
                        <input name="phone" value={this.state.phone}
                        className="form-control" onChange={this.handleChange}/>

                    </div> 
                       
                    <div className="form-group">
                        <label>Email</label>
                        <input name="email" value={this.state.email}
                        className="form-control" onChange={this.handleChange}/>

                    </div>
                    {/* <div className="form-group">
                        <label>Phone</label>
                        <input name="phoneno" value={this.state.phoneno}
                        className="form-control" onChange={this.handleChange}/>
                    </div> */}
                    <div className="form-group">
                        <label>Set Password</label>
                        <input name="password" value={this.state.password}
                        className="form-control" onChange={this.handleChange}/>

                    </div>
                   
                   
                    <Link to="/home" className="btn btn-danger">Back</Link> &nbsp;
                    <button className="btn btn-success" onClick={this.handleSubmit}>
                        Register
                    </button>

                </div>
               
                </div>
                
            
        )
        
    }
}




export default Register;