package com.fullstackproject.EmployeeManagementSystem.Controller;

import com.fullstackproject.EmployeeManagementSystem.Repository.EmployeeRepository;
import com.fullstackproject.EmployeeManagementSystem.model.Employee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin("*")
public class EmployeeController {

    @Autowired
    private EmployeeRepository employeeRepository;

    @PostMapping("/add")
    public Employee createEmployee(@RequestBody Employee employee ){
        return employeeRepository.save(employee);
    }

    @GetMapping("/employees")
    public List<Employee> getAllEmployee(){
        return employeeRepository.findAll();

    }

    @GetMapping("/employees/{id}")
    public Employee getEmployeeById(@PathVariable Long id){
        return employeeRepository.findById(id).get();
    }

    @PutMapping("/employees")
    public Employee updateEmployee(@RequestBody Employee employee){
        return employeeRepository.save(employee);
    }

    @DeleteMapping("/employees/{id}")
    public ResponseEntity<HttpStatus> deleteEmployeeById(@PathVariable Long id){
        employeeRepository.deleteById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
