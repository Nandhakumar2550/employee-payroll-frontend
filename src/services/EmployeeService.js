import AxiosService from "./AxiosService";

class EmployeeService {

    addEmployee(employee) {

        AxiosService.post("/employeePayroll", employee);

    }

}

export default new EmployeeService();