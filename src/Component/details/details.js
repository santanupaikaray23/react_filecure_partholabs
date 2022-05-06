import React,{Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import './details.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

 const url = "http://localhost:9700/servicedetails";

 class Details extends Component{
     constructor(){
         super()

         this.state={
             Details:''
         }
     }
     render(){
         let {Details} = this.state
         return(
             <div className="container">
                 <div className="panel panel-primary">
                     <div className="panel-heading">
                         <h3>{this.state.Details.name}</h3>
                       
                     </div>
                     <div className="panel-body">
                         <div className="row">
                             <div className="col-md-12">
                                 <img className="img-responsive" src={Details.thumb} style={{height:400,width:1500}}/>
                             </div>
                             <div className="col-md-6">
                                <h3>{Details.name}</h3> 
                            </div>
                         </div>
                         <hr/>
                         <Tabs>
    <TabList>
      <Tab>Details</Tab>
      <Tab>Any emergency Contact us</Tab>
    </TabList>

    <TabPanel>
     
      <h1>Here you are going to register <br/>all the details about patient</h1>
    </TabPanel>
    <TabPanel>
      <h2> Polt No:2505/555,Jharpada,Near UCO Bank Colony,<br/>
          Bhubaneswar-751006,Phone no.9937114544</h2>
    </TabPanel>
  </Tabs>
  <Link to="/home" className="btn btn-danger">Back</Link> &nbsp;
  <Link to={`/booking/${Details.name}`} className="btn btn-success">
      Proceed
  </Link>
                     </div>
                 </div>
             </div>
         )
     }
    async componentDidMount(){
         let seviceId = this.props.match.params.id;
         let response = await axios.get(`${url}/${seviceId}`)
         this.setState({Details:response.data[0]})
     }
 }

 export default Details