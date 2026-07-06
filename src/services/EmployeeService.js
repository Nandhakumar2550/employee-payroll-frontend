import AxiosService from "./AxiosService";

class EmployeeService {

   addEmployee(employee){
    return AxiosService.post("/employeePayroll",employee);
}

getAllEmployee(){
    return AxiosService.get("/employeePayroll");
}

updateEmployee(id,employee){
    return AxiosService.put("/employeePayroll/"+id,employee);
}

deleteEmployee(id){
    return AxiosService.delete("/employeePayroll/"+id);
}
}

export default new EmployeeService();