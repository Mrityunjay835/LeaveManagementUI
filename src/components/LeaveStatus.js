import React, { useState, useEffect } from 'react';
import { getLeaveStatus } from '../api';

const LeaveStatus = ({ employeeId }) => {
  const [leaveRequests, setLeaveRequests] = useState([]);

  useEffect(() => {
    const fetchLeaveRequests = async () => {
      try {
        const response = await getLeaveStatus(employeeId);
        setLeaveRequests(response.data.leaveRequests);
      } catch (error) {
        console.error('Error fetching leave requests:', error);
      }
    };
    if (employeeId) {
      fetchLeaveRequests();
    }
  }, [employeeId]);

  if (!leaveRequests.length) return <p>No leave requests found</p>;

  return (
    <div>
      <h2>Your Leave Requests</h2>
      {leaveRequests.map((request) => (
        <div key={request._id}>
          <p>Request ID: {request._id}</p>
          <p>No of Days: {request.noOfDays}</p>
          <p>Reason: {request.reason}</p>
          <p>Status: {request.status}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default LeaveStatus;
