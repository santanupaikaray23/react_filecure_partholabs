import React, {Component} from 'react';


const url="http://localhost:5000/api/auth/login";

class Login extends Component{
    
    constructor(props){
        super(props)

        this.state={
            email:'',
            password:'',
            message:''
        
        }
    }
    handleChange = (event)=>{
        this.setState({[event.target.name]:event.target.value})
    }
    handleSubmit = () =>{
      
        fetch(url,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(this.state)
            

        })
        .then((res)=>res.json())
        .then((data)=>{
            if(data.auth == false){
                this.setState({message:data.token})
            }else{
               
                sessionStorage.setItem('ltk',data.token)
                this.props.history.push('/home')
                
            }
        })
     
       
    }
    render(){
        // const {name,phone,mail,message}=this.state;
        //      const isEnabled = name.length > 0 && phone.length > 0 && mail.length >0 && message.length > 0;

        return(
            
            <div className="container">
                <div className="panel panel-primary">
                    <div className="panel-heading">
                      <h3> Login </h3>
                    </div>
                   

                    </div>
                   <div className="panel-body">
                       <h2 style={{color:'red'}}>{this.state.message}</h2>
                    <div className="form-group">
                        <label>Email</label>
                        <input name="email" value={this.state.email}
                        className="form-control" onChange={this.handleChange}/>

                    </div>
                    <div className="form-group">
                        <label>password</label>
                        <input name="password" value={this.state.password}
                        className="form-control" onChange={this.handleChange}/>

                    </div>
                   
                   
                 
                    <button className="btn btn-success" onClick={this.handleSubmit}>
                        Login
                    </button>

                </div>
                </div>
            
        )
    }
}




export default Login;