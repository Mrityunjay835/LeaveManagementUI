import LeaveRequestForm from './LeaveRequestForm.js';
import LeaveStatus from './LeaveStatus.js';

const EmployeeDashboard = ({ employee }) => {

  return (
    <div>
      <h2>Employee Dashboard</h2>
      <LeaveRequestForm />
      {/* Add components for viewing leave status or other functionalities */}
      <LeaveStatus employeeId={employee._id}/>
    </div>
  );
};

export default EmployeeDashboard;
