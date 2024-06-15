import React, { useState } from 'react';
import { applyLeaveRequest } from '../api';

const LeaveRequestForm = () => {
  const [formData, setFormData] = useState({
    noOfDays: '',
    reason: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await applyLeaveRequest(formData);
      if (response.data.success) {
        alert('Leave applied successfully');
        setFormData({
          noOfDays: '',
          reason: '',
        });
      } else {
        alert('Failed to apply leave');
      }
    } catch (error) {
      console.error('Error applying leave:', error);
      alert('An error occurred while applying leave');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Number of Days:
        <input type="number" name="noOfDays" value={formData.noOfDays} onChange={handleChange} required />
      </label>
      <br />
      <label>
        Reason:
        <textarea name="reason" value={formData.reason} onChange={handleChange} required />
      </label>
      <br />
      <button type="submit">Apply Leave</button>
    </form>
  );
};

export default LeaveRequestForm;
