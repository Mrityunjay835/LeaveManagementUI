import axios from 'axios';

const API_URL = 'http://localhost:4000'; // Change to your backend URL

const api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

// Authentication APIs
export const registerEmployee = (data) => api.post('/employees', data);
export const loginEmployee = (data) => api.post('/employees/login', data);
export const logoutEmployee = () => api.get('/employees/logout');
export const getExistedProfile = () => api.get('/employees/existProfile');

// Employee APIs
export const getAllEmployees = () => api.get('/employees/special');
export const getEmployeesByName = (name) => api.get(`/employees/${name}`);
export const getEmployeeByID = (id) => api.get(`/employees/${id}`);
export const updateEmployessLeave = (id, data) => api.put(`/employees/${id}`, data);
export const deleteEmployess = (id) => api.delete(`/employees/${id}`);

// Leave Request APIs
export const applyLeaveRequest = (data) => api.post('/employees/requestleave', data);
export const getLeaveStatus = (id) => api.get(`/employees/requestleave/${id}`);

// Admin APIs
export const registerAdmin = (data) => api.post('/admin/register', data);
export const loginAdmin = (data) => api.post('/admin/login', data);
export const getAllAdmin = () => api.get('/admin');
export const getAllLeaveRequests = () => api.get('/admin/leaverequests');
export const updateLeaveRequestById = (id, data) => api.put(`/admin/leaverequests/${id}`, data);