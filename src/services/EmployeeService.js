import AxiosService from "./AxiosService";

class EmployeeService {

    addEmployee(employee) {

        return AxiosService.post("/employeePayroll", employee);

    }

}

export default new EmployeeService();