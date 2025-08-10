import apiClient from './client';
import { LoginRequest, SignupRequest, AuthResponse, User } from './types';

export const authApi = {
  login: async (data: LoginRequest): Promise<AuthResponse> => {
    return apiClient.post('/auth/login', data);
  },

  signup: async (data: SignupRequest): Promise<AuthResponse> => {
    return apiClient.post('/auth/signup', data);
  },

  logout: async (): Promise<void> => {
    return apiClient.post('/auth/logout', {});
  },

  getCurrentUser: async (): Promise<User> => {
    return apiClient.get('/auth/me');
  },

  forgotPassword: async (email: string): Promise<{ message: string }> => {
    return apiClient.post('/auth/forgot-password', { email });
  },

  resetPassword: async (token: string, newPassword: string): Promise<{ message: string }> => {
    return apiClient.post('/auth/reset-password', { token, newPassword });
  },
};