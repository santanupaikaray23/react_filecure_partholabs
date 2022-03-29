import { render } from '@testing-library/react';
import React from 'react';

const BookingDisplay = (props) => {
    const renderTable = ({bookdata})=>{
        if(bookdata){
            return bookdata.map((item)=>{
                return(
                    <tr>
                        <td>{item.id}</td>
                        <td>{item.patientType}</td>
                        <td>{item.name}</td>
                        <td>{item. phone}</td>
                        <td>{item.email}</td>
                        <td>{item.age}</td>
                        <td>{item.gender}</td>
                        <td>{item.alternate}</td>
                        <td>{item.referral}</td>
                        <td>{item.area}</td>
                        <td>{item.city}</td>
                        <td>{item.pincode}</td>
                        <td>{item.clinicalhistory}</td>
                    </tr>
                )
            })
        }
    }
    return(
        <div className="container">
            <center><h2>Booking List</h2></center>
            <table className="table table-resposive">
                <thead>
                    <tr>
                        <th>Order Id</th>
                        <th>patientType</th>
                        <th> name</th>
                        <th> phone</th>
                        <th>  email</th>
                        <th>age</th>
                        <th>  gender</th>
                        <th>alternatemobile</th>
                        <th> referral</th>
                        <th> area</th>
                        <th> city</th>
                        <th> pincode</th>
                        <th>clinicalhistory</th>
                        
                        
                    </tr>
                </thead>
                <tbody>{renderTable(props)}</tbody>
            </table>
        </div>
    )
}

export default BookingDisplay