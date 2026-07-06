import { BrowserRouter, Routes, Route } from "react-router-dom";
import PayrollForm from "./components/payrollForm";
import Home from "./components/home";

function App() {

    return (

        <BrowserRouter>

            <Routes>

                <Route path="/" element={<Home />} />

                <Route path="/addEmployee" element={<PayrollForm />} />

            </Routes>

        </BrowserRouter>

    );

}

export default App;