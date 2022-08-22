import React, { useState, useEffect } from 'react'
import employeeService from '../services/employee.service'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link} from 'react-router-dom'

export default function EmplyeesList() {

    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        employeeService.getAll()
            .then(res => {
                // console.log('printing the employees data', res.data);
                setEmployees(res.data);
            })
            .catch(error => {
                console.log("something went wrong", error);
            })
    })

    const hanldelDelete = (id)=> {
        employeeService.remove(id)
        .then(res=>{
            console.log("employee deleted successfully", res.data);

        })
        .catch(error => console.log("some error", error));
    }
    return (
        <div className='container'>
            <h2>List Of Employees</h2>
            <hr />
            <div>
                <Link to="/add" className='btn btn-primary mb-2'> Add Employee</Link>
                <table border={1} cellPadding="10" className='table table-border table-striped'>
                    <thead className='thead-dark'>
                        <tr>
                            <th>Name</th>
                            <th>Location</th>
                            <th>Department</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map((employee) => {
                            // console.log(employee)
                           return(
                            
                             <tr key={employee.id}>
                                <td>{employee.name}</td>
                                <td>{employee.location}</td>
                                <td>{employee.department}</td>
                                <td><Link className="btn btn-info" to={`/employees/edit/${employee.id}`}>Update</Link>
                                       <button className="btn btn-danger ml-2" onClick={() =>
                                            (hanldelDelete(employee.id))}>Delete</button>
                                </td>
                            </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>

        </div>
    )
}
