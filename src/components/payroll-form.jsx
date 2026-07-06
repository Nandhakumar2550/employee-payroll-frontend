import "./payroll-form.css";

function PayrollForm() {
    return (
        <div className="container">

            <h1>Employee Payroll Form</h1>

            <form>

                <div className="form-group">
                    <label>Name</label>
                    <input
                        type="text"
                        placeholder="Enter Employee Name"
                    />
                </div>

                <div className="form-group">

                    <label>Profile Image</label>

                    <div className="profile">

                        <label>
                            <input type="radio" name="profile"/>
                            <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="profile1"/>
                        </label>

                        <label>
                            <input type="radio" name="profile"/>
                            <img src="https://randomuser.me/api/portraits/women/2.jpg" alt="profile2"/>
                        </label>

                        <label>
                            <input type="radio" name="profile"/>
                            <img src="https://randomuser.me/api/portraits/men/3.jpg" alt="profile3"/>
                        </label>

                        <label>
                            <input type="radio" name="profile"/>
                            <img src="https://randomuser.me/api/portraits/women/4.jpg" alt="profile4"/>
                        </label>

                    </div>

                </div>

                <div className="form-group">

                    <label>Gender</label>

                    <input type="radio" name="gender"/> Male
                    &nbsp;&nbsp;

                    <input type="radio" name="gender"/> Female

                </div>

                <div className="form-group">

                    <label>Department</label>

                    <input type="checkbox"/> HR
                    &nbsp;

                    <input type="checkbox"/> Sales
                    &nbsp;

                    <input type="checkbox"/> Finance
                    &nbsp;

                    <input type="checkbox"/> Engineer

                </div>

                <div className="form-group">

                    <label>Salary</label>

                    <input
                        type="range"
                        min="30000"
                        max="150000"
                    />

                </div>

                <div className="form-group">

                    <label>Notes</label>

                    <textarea
                        rows="4"
                        placeholder="Enter Notes"
                    ></textarea>

                </div>

                <button type="submit">
                    Submit
                </button>

            </form>

        </div>
    );
}

export default PayrollForm;