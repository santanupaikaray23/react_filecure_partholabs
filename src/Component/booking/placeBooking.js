import React, {Component} from 'react';
 
const url="http://localhost:9700/placeBooking";
const patientTypeurl="http://localhost:9700/patientType";

class PlaceOrder extends Component{
    constructor(props){
        super(props)
console.log(">>>>>in constructor")
        this.state={
            id: Math.floor(Math.random()*100000),
            patientType:'',
            name:'',
            phone:'',
            email:'',
            age:'',
            gender:'',
            alternatemobile:'',
            referral:'',
            area:'',
            city:'',
            pincode:'',
            clinicalhistory:''


        }
    }

    renderpatientType = (data) => {
        if(data){
            return data.map((item)=>{
                return(
                    <option value={item._id}>
                        {item.patientType}
                    </option>
                )
            })

        }
        
    }
    render(){
        console.log(">>>>>in render>>>>", this.state.patientType)
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
                            <select className="patienttype">
                                <option>Patient Type(Default:Direct)</option>
                                {this.renderpatientType(this.state.patientType)}
                            </select>

                        </div>
                       
                    </div>
                </div>
            </div>
        )
    }

//call api
componentDidMount(){
    console.log(">>>>>in componentDidMount")
    //we get the data and upadate the state
    fetch(patientTypeurl,{method:'GET'})
    //return the promise here
    .then((res)=>(res.json()))
    //get the data
    .then((data)=>{
        //setting data in state
        this.setState({patientType:data})
    })
    //error handling
    .catch((err)=>{
        console.log(err)
    })

}

}
export default PlaceOrder;