import AxiosService from "./AxiosService";

class EmployeeService {

    addEmployee(employee) {
        return AxiosService.post("/employeePayroll", employee);
    }

    getAllEmployee() {
        return AxiosService.get("/employeePayroll");
    }
}

export default new EmployeeService();