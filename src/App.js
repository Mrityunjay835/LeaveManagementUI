import React, { useState } from 'react';
import Register from './components/Register';
import Login from './components/Login';
import Logout from './components/Logout';
import RegisterAdmin from './components/RegisterAdmin';
import LoginAdmin from './components/LoginAdmin';
import AdminDashboard from './components/AdminDashboard';
import EmployeeDashboard from './components/EmployeeDashboard';

const App = () => {
  const [employee, setEmployee] = useState(null);
  const [admin, setAdmin] = useState(null);

  return (
    <div>
      <h1>MERN Auth</h1>
      {!employee && !admin ? (
        <>
          <h2>Employee Registration</h2>
          <Register />
          <h2>Employee Login</h2>
          <Login setEmployee={setEmployee} />
          <h2>Admin Registration</h2>
          <RegisterAdmin />
          <h2>Admin Login</h2>
          <LoginAdmin setAdmin={setAdmin} />
        </>
      ) : employee ? (
        <>
          <h2>Welcome, {employee.name}</h2>
          <EmployeeDashboard employee={employee} />
          <Logout setUser={setEmployee} />
        </>
      ) : admin ? (
        <>
          <h2>Admin Dashboard</h2>
          <AdminDashboard />
          <Logout setUser={setAdmin} />
        </>
      ) : null}
    </div>
  );
};

export default App;
