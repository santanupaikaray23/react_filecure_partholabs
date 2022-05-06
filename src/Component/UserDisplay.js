import React from 'react';

const UserDisplay = (props)=>{
    const renderUser = ({userdata})=>{
        if(userdata){
            return userdata.map((item)=>{
                return(
                    <tr>
                        <td>{item._id}</td>
                        <td>{item.name}</td>
                       <td>{item.phone}</td>
                        <td>{item.email}</td>
                        <td>{item.role}</td>
                    </tr>
                )
            })
        }

    }
    return(
        <div>
            <center>List of User</center>
            <table className="table">
                <thead>
                    <tr>
                        <th>Sno</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Mail</th>
                        <th>Role</th>
                    </tr>
                </thead>
                <tbody>
                    {renderUser(props)}
                </tbody>

            </table>
        </div>
    )
}
export default UserDisplay;