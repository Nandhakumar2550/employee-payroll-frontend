import { useEffect, useState } from "react";
import "./home.css";
import EmployeeService from "../services/EmployeeService";

function Home() {

    const [employees, setEmployees] = useState([]);

    useEffect(() => {

        EmployeeService.getAllEmployee()
            .then((response) => {
                setEmployees(response.data);
            })
            .catch((error) => {
                console.log(error);
            });

    }, []);

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
                    </tr>
                </thead>

                <tbody>

                    {
                        employees.map((employee) => (

                            <tr key={employee.id}>

                                <td>{employee.name}</td>

                                <td>{employee.gender}</td>

                                <td>{employee.department.join(", ")}</td>

                                <td>{employee.salary}</td>

                            </tr>

                        ))
                    }

                </tbody>

            </table>

        </div>
    );

}

export default Home;