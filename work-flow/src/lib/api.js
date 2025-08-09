// src/lib/api.js
import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5001';

// Create axios instance with default config
const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add auth token to requests if available
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Auth APIs
export const authAPI = {
  signup: (data) => api.post('/api/auth/signup', data),
  signin: (data) => api.post('/api/auth/signin', data),
  getCurrentUser: () => api.get('/api/auth/me'),
};

// Onboarding APIs
export const onboardingAPI = {
  submit: (data) => api.post('/api/onboarding', data),
  get: (userId) => api.get(`/api/onboarding/${userId}`),
};

// AI APIs
export const aiAPI = {
  chat: (data) => api.post('/api/ai/chat', data),
  generateContent: (data) => api.post('/api/ai/generate-content', data),
};

// Social Media APIs
export const socialMediaAPI = {
  getFacebookAuthUrl: () => api.get('/api/auth/facebook'),
  getAccounts: () => api.get('/api/social-media/accounts'),
  disconnectAccount: (accountId) => api.delete(`/api/social-media/accounts/${accountId}`),
  sendFacebookMessage: (data) => api.post('/api/social-media/facebook/message', data),
  sendInstagramMessage: (data) => api.post('/api/social-media/instagram/message', data),
};

// Admin APIs
export const adminAPI = {
  getUsers: (params) => api.get('/api/admin/users', { params }),
  getStats: () => api.get('/api/admin/stats'),
  getOnboardingData: (params) => api.get('/api/admin/onboarding', { params }),
  updateUser: (userId, data) => api.put(`/api/admin/users/${userId}`, data),
  deleteUser: (userId) => api.delete(`/api/admin/users/${userId}`),
  createUser: (data) => api.post('/api/admin/users', data),
  resetPassword: (userId, data) => api.post(`/api/admin/users/${userId}/reset-password`, data),
};

// Analytics APIs
export const analyticsAPI = {
  getDashboardData: () => api.get('/api/analytics/dashboard'),
};

// Conversation APIs
export const conversationAPI = {
  getConversations: () => api.get('/api/conversations'),
  getMessages: (conversationId) => api.get(`/api/conversations/${conversationId}/messages`),
  sendMessage: (conversationId, message) => api.post(`/api/conversations/${conversationId}/messages`, { message }),
};

export default api;