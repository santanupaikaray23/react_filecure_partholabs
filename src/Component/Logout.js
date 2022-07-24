import React, {Component} from 'react';
import {Link} from 'react-router-dom';



const url ="http://localhost:5000/api/auth/userinfo";

class Home extends Component{
    constructor(){
        super()

        this.state={
            user:''
        }
    }
    
    handleLogout = () =>{
        sessionStorage.removeItem('ltk');
        this.props.history.push('/')

       
    }
    render(){
        if (sessionStorage.getItem('ltk') == null ){
            this.props.history.push('/')
        }
        sessionStorage.setItem('rtk',this.state.user.role)
        return(
            <div className="panel panel-success">
                <div className="panel-heading">
                    <h3>User Profile</h3>
                </div>
                <div className="panel-body">
                    <h1>Hi {this.state.user.name}</h1>
                    <h1>Your role is {this.state.user.role}</h1>
                    <h2>Thank you for visit Our site !!!</h2>
                    <h3>You have Successfully Logout </h3>
                </div>
                {this.conditionRender()}
                <button className="btn btn-danger" onClick={this.handleLogout}>ReLogin</button>
            </div>
        )
    }
    componentDidMount(){
        fetch (url,{
            method: 'GET',
            headers:{
                'x-access-token':sessionStorage.getItem('ltk')
            }
        })
        .then((res)=> res.json())
        .then((data)=>{
            this.setState({
                user:data
            })
        })
    }
}
export default Home;