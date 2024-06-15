import React, { useEffect, useState } from 'react';
import { getAllLeaveRequests, updateLeaveRequestById } from '../api';

const AdminDashboard = () => {
  const [leaveRequests, setLeaveRequests] = useState([]);

  useEffect(() => {
    const fetchLeaveRequests = async () => {
      try {
        const response = await getAllLeaveRequests();
        setLeaveRequests(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchLeaveRequests();
  }, []);

  const handleUpdateStatus = async (id, status) => {
    try {
      await updateLeaveRequestById(id, { status });
      setLeaveRequests((prevRequests) =>
        prevRequests.map((request) =>
          request._id === id ? { ...request, status } : request
        )
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Leave Requests</h2>
      <ul>
        {leaveRequests.map((request) => (
          <li key={request._id}>
            {request.employee.name}: {request.reason} ({request.status})
            <button onClick={() => handleUpdateStatus(request._id, 'APPROVED')}>Approve</button>
            <button onClick={() => handleUpdateStatus(request._id, 'REJECTED')}>Reject</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;
