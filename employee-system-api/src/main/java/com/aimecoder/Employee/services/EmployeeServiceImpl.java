package com.aimecoder.Employee.services;

import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import com.aimecoder.Employee.entity.EmployeeEntity;
import com.aimecoder.Employee.model.Employee;
import com.aimecoder.Employee.repository.EmployeeRepository;

@Service
public class EmployeeServiceImpl implements EmployeeService {

    
    public EmployeeRepository employeeRepository;

    public EmployeeServiceImpl(EmployeeRepository employeeRepository){
        this.employeeRepository = employeeRepository;
    }
    
    @Override
    public Employee createEmployee(Employee employee) {
        EmployeeEntity employeeEntity = new EmployeeEntity();
        BeanUtils.copyProperties(employee, employeeEntity);
        employeeRepository.save(employeeEntity);
        return null;
    }

}
