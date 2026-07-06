import { useEffect, useState } from "react";
import "./home.css";
import EmployeeService from "../services/EmployeeService";

function Home() {

    const [employees, setEmployees] = useState([]);

    // Load all employees
    const loadEmployees = () => {

        EmployeeService.getAllEmployee()

            .then((response) => {

                setEmployees(response.data);

            })

            .catch((error) => {

                console.log(error);

            });

    };

    // Load data when page opens
    useEffect(() => {

        loadEmployees();

    }, []);

    // Delete employee
    const deleteEmployee = (id) => {

        if (window.confirm("Are you sure you want to delete this employee?")) {

            EmployeeService.deleteEmployee(id)

                .then(() => {

                    alert("Employee Deleted Successfully");

                    loadEmployees();

                })

                .catch((error) => {

                    console.log(error);

                    alert("Unable to Delete Employee");

                });

        }

    };

    return (

        <div className="home-container">

            <h1>Employee Payroll</h1>

            <table>

                <thead>

                    <tr>

                        <th>Name</th>
                        <th>Gender</th>
                        <th>Department</th>
                        <th>Salary</th>
                        <th>Action</th>

                    </tr>

                </thead>

                <tbody>

                    {

                        employees.length > 0 ?

                            employees.map((employee) => (

                                <tr key={employee.id}>

                                    <td>{employee.name}</td>

                                    <td>{employee.gender}</td>

                                    <td>{employee.department.join(", ")}</td>

                                    <td>{employee.salary}</td>

                                    <td>

                                        <button
                                            onClick={() => deleteEmployee(employee.id)}
                                        >
                                            Delete
                                        </button>

                                    </td>

                                </tr>

                            ))

                            :

                            <tr>

                                <td colSpan="5">
                                    No Employees Found
                                </td>

                            </tr>

                    }

                </tbody>

            </table>

        </div>

    );

}

export default Home;