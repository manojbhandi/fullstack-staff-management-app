
import React, { useEffect, useState } from 'react'
import employeeService from '../services/employee.service'
import { useNavigate } from 'react-router-dom'
import {Link, useParams} from 'react-router-dom'

export default function AddEmployee() {
    const [name, setName] = useState("")
    const [location, setLocation] = useState("")
    const [department, setDepartment] = useState("")
    const navigate = useNavigate();

    const {id} = useParams();


    useEffect(() => {
        if (id) {
            employeeService.getEmployeeById(id)
                .then(employee => {
                    setName(employee.data.name);
                    setLocation(employee.data.location);
                    setDepartment(employee.data.department);
                })
                .catch(error => {
                    console.log('something went wrong', error);
                })
        }
    }, [])
    
    const saveEmployee = (e)=>{
        e.preventDefault();
        const employee = { name, location, department, id };
        
        if(id){
            //update
            employeeService.update(employee)
                .then(response => {
                    console.log("Employee Data Updated Successfully", response.data);
                    navigate("/")
                })
                .catch(error => {
                    console.log("something went wrong", error)
                })
            
        }
        else{
            //create
        
            employeeService.create(employee)
            .then(res=>{
                console.log("Employee data added successfully", res.data);
                navigate('/');
            })
                .catch(error =>{
                    console.log("something went wrong", error)
                 });
        }
    }
        
        return (
            <div className='container'>
            <h1>Add Employee</h1>
            <hr />
            <form action="">
                <div className='form-group'>
                    {/* <label htmlFor="name">Enter name of employee</label> */}
                    <input type="text"  id='name' value={name} 
                    className='form-control col-4'
                    placeholder='Enter Name'
                    onChange={(e)=>setName(e.target.value)} />
                </div>
                <div className='form-group'>
                    {/* <label htmlFor="name">Enter department of employee</label> */}
                    <input type="text"  id='department' value={department} 
                    className='form-control col-4'
                    placeholder='Enter Department'
                    onChange={(e)=>setDepartment(e.target.value)} />
                </div>

                <div className='form-group'>
                    {/* <label htmlFor="name">Enter location of employee</label> */}
                    <input type="text"  id='location' value={location} 
                    className='form-control col-4'
                    placeholder='Enter Location'
                    onChange={(e)=>setLocation(e.target.value)} />
                </div>
                
                <div>
                    <button className="btn btn-primary" onClick={(e) => saveEmployee(e)}>Save</button>
                </div>
            </form>
            <hr />
            <Link to={'/'} >Back to List</Link>
            </div>  
        )
        
    
}
