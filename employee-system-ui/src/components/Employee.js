/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Employee = ({ employee,deleteEmployee }) => {
    const navigate = useNavigate()
    const editEmployee=(e,id)=>{
        e.preventDefault();
        navigate(`/editEmployee/${id}`) 
    }
  return (
    <tr key={employee.id}>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{employee.firstName}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{employee.lastName}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{employee.emailId}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap flex gap-6">
        <a
          onClick={(e,id)=>editEmployee(e,employee.id)}          
          className="text-white font-bold px-4 py-2 rounded-md bg-indigo-600 hover:bg-indigo-800 hover:cursor-pointer"
        > 
          Edit
        </a>
        <a
          onClick={(e,id)=>deleteEmployee(e,employee.id)}
          className="text-white font-bold px-4 py-2 rounded-md bg-red-600 hover:bg-red-800 hover:cursor-pointer"
        >
          Delete
        </a>
      </td>
    </tr>
  );
};

export default Employee;
