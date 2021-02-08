import React from 'react';
import './RenderEmployees.css';

const RenderEmployees = ({ employees }) => {

    const employeeList =  employees.map((employee, index) => (
        <div className = { index % 2 === 0 ? "light" : "dark" }  key = { employee.id }>
            <span> { employee.name } </span>
            <span> { employee.location } </span>
        </div>
    ));

    return (
        <div className="employee_container">
            <div className="header">
                <span> Name </span>
                <span> Location </span>
            </div>
            <div className="content">
                { employeeList }
            </div>
        </div>
    );
}

export default RenderEmployees;