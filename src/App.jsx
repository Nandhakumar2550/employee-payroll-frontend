import { BrowserRouter, Routes, Route } from "react-router-dom";
import PayrollForm from "./components/payrollForm";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PayrollForm />} />
                <Route path="/addEmployee" element={<PayrollForm />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;