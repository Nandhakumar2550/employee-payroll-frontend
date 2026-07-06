import { useState } from "react";
import "./payrollForm.css";
import EmployeeService from "../services/EmployeeService";

function PayrollForm() {

    const [employee, setEmployee] = useState({
    id: null,
    name: "",
    profile: "",
    gender: "",
    department: [],
    salary: "",
    notes: ""
});
    // Handle text, radio and range inputs
    const changeHandler = (event) => {
        const { name, value } = event.target;

        setEmployee({
            ...employee,
            [name]: value
        });
    };

    // Handle department checkboxes
    const departmentHandler = (event) => {

        const { value, checked } = event.target;

        if (checked) {
            setEmployee({
                ...employee,
                department: [...employee.department, value]
            });
        } else {
            setEmployee({
                ...employee,
                department: employee.department.filter(
                    (dept) => dept !== value
                )
            });
        }
    };

    // Save Employee
    // Save Employee
const save = (event) => {

    event.preventDefault();

    if (employee.id) {

        EmployeeService.updateEmployee(employee.id, employee)
            .then((response) => {

                alert("Employee Updated Successfully");
                console.log(response.data);

            })
            .catch((error) => {

                alert("Failed to Update Employee");
                console.log(error);

            });

    } else {

        EmployeeService.addEmployee(employee)
            .then((response) => {

                alert("Employee Added Successfully");
                console.log(response.data);

            })
            .catch((error) => {

                alert("Failed to Add Employee");
                console.log(error);

            });

    }

};
    return (

        <div className="container">

            <h1>Employee Payroll Form</h1>

            <form>

                <div className="form-group">

                    <label>Name</label>

                    <input
                        type="text"
                        name="name"
                        placeholder="Enter Employee Name"
                        onChange={changeHandler}
                    />

                </div>

                <div className="form-group">

                    <label>Profile Image</label>

                    <div className="profile">

                        <label>

                            <input
                                type="radio"
                                name="profile"
                                value="Profile1"
                                onChange={changeHandler}
                            />

                            <img
                                src="https://randomuser.me/api/portraits/men/1.jpg"
                                alt="profile1"
                            />

                        </label>

                        <label>

                            <input
                                type="radio"
                                name="profile"
                                value="Profile2"
                                onChange={changeHandler}
                            />

                            <img
                                src="https://randomuser.me/api/portraits/women/2.jpg"
                                alt="profile2"
                            />

                        </label>

                        <label>

                            <input
                                type="radio"
                                name="profile"
                                value="Profile3"
                                onChange={changeHandler}
                            />

                            <img
                                src="https://randomuser.me/api/portraits/men/3.jpg"
                                alt="profile3"
                            />

                        </label>

                        <label>

                            <input
                                type="radio"
                                name="profile"
                                value="Profile4"
                                onChange={changeHandler}
                            />

                            <img
                                src="https://randomuser.me/api/portraits/women/4.jpg"
                                alt="profile4"
                            />

                        </label>

                    </div>

                </div>

                <div className="form-group">

                    <label>Gender</label>

                    <label>

                        <input
                            type="radio"
                            name="gender"
                            value="Male"
                            onChange={changeHandler}
                        />

                        Male

                    </label>

                    <label>

                        <input
                            type="radio"
                            name="gender"
                            value="Female"
                            onChange={changeHandler}
                        />

                        Female

                    </label>

                </div>

                <div className="form-group">

                    <label>Department</label>

                    <label>

                        <input
                            type="checkbox"
                            value="HR"
                            onChange={departmentHandler}
                        />

                        HR

                    </label>

                    <label>

                        <input
                            type="checkbox"
                            value="Sales"
                            onChange={departmentHandler}
                        />

                        Sales

                    </label>

                    <label>

                        <input
                            type="checkbox"
                            value="Finance"
                            onChange={departmentHandler}
                        />

                        Finance

                    </label>

                    <label>

                        <input
                            type="checkbox"
                            value="Engineer"
                            onChange={departmentHandler}
                        />

                        Engineer

                    </label>

                </div>

                <div className="form-group">

                    <label>Salary</label>

                    <input
                        type="range"
                        name="salary"
                        min="30000"
                        max="150000"
                        onChange={changeHandler}
                    />

                </div>

                <div className="form-group">

                    <label>Notes</label>

                    <textarea
                        rows="4"
                        name="notes"
                        placeholder="Enter Notes"
                        onChange={changeHandler}
                    ></textarea>

                </div>

                <button
                    type="submit"
                    onClick={save}
                >
                    Submit
                </button>

            </form>

        </div>

    );
}

export default PayrollForm;