import React,{Component} from 'react';
import { withRouter } from 'react-router';
import {Link} from 'react-router-dom';

const url = "http://localhost:5000/api/auth/userinfo";

class Logout2 extends Component{
   
    constructor(){
        super()

        this.state={
            user:''

        }
    }
    conditionRender=()=>{
        if(this.state.user.role){
            if(this.state.user.role==="admin"){
                return(
                    <Link to="/register" className="btn btn-success">
                        Register
                    </Link>
                )
            }
        }
    }
    handleLogout = ()=>{
        sessionStorage.removeItem('ltk');
        this.props.history.push('/')
       
    }
    render(){
        if(sessionStorage.getItem('ltk')==null){
            this.props.history.push('/')
        }
        sessionStorage.setItem('rtk',this.state.user.role)
   
   
          return(
          
                <div className="panel-heading">
                    {this.conditionRender()} &nbsp;
                    <button className="btn btn-danger" onClick={this.handleLogout}>Logout</button>
                </div>
          
        )
    }
//api call with header
componentDidMount(){
    fetch(url,{
        method: 'GET',
        headers:{
            'x-access-token': sessionStorage.getItem('ltk')
        }
    })
    .then((res)=>res.json())
    .then((data)=>{
        this.setState({
            user:data
        })
    })
}

}



export default withRouter(Logout2);