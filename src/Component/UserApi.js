import React,{Component} from 'react';
import UserDisplay from './UserDisplay';

const url = "http://localhost:5000/api/auth/users";

class UserList extends Component{
    constructor(){
        super()

        this.state={
            users:''
        }
    }
    render(){
        if(sessionStorage.getItem('ltk')==null){
            this.props.history.push('/')
        }
        if(sessionStorage.getItem('ltk') !== null && sessionStorage.getItem('rtk') !== 'Admin'){
            this.props.history.push('/Home')
        }
        return(
            <div>
                <UserDisplay userdata={this.state.users}/>
            </div>
        )
    }
   //callapi
   componentDidMount(){
       fetch(url,{methed:'GET'})
       .then((res)=>res.json())
       .then((data)=>{this.setState({users:data})})
   }
}
export default UserList;