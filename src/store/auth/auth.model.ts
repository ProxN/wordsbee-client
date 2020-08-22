import { action, thunk, computed } from 'easy-peasy';
import axios from 'axios';
import { IAuthModel, IUserResponse } from './auth.interface';
import { API_URL } from '../../constants/config';
import getError from '../../utils/getError';

const AuthModel: IAuthModel = {
  /* State */
  isLoading: true,
  user: null,
  error: '',
  /* Actions thunk */
  signup: thunk(async (state, data) => {
    try {
      const { email, password, fullname } = data;
      const res = await axios.post<IUserResponse>(
        `${API_URL}/auth/signup`,
        {
          email,
          password,
          fullname,
        },
        { withCredentials: true }
      );

      state.setUser(res.data.data);
    } catch (error) {
      const errorMessage = getError(error);
      state.setError(errorMessage);
    }
  }),

  logout: thunk(async (state) => {
    try {
      await axios.get(`${API_URL}/auth/logout`, { withCredentials: true });
      state.setState();
    } catch (error) {
      const errorMessage = getError(error);
      state.setError(errorMessage);
    }
  }),
  signin: thunk(async (state, data) => {
    try {
      const { password, email } = data;
      const res = await axios.post<IUserResponse>(
        `${API_URL}/auth/signin`,
        {
          email,
          password,
        },
        { withCredentials: true }
      );
      state.setUser(res.data.data);
    } catch (error) {
      const errorMessage = getError(error);
      state.setError(errorMessage);
    }
  }),

  getUser: thunk(async (state) => {
    try {
      const res = await axios.get<IUserResponse>(`${API_URL}/users/me`, {
        withCredentials: true,
      });

      state.setUser(res.data.data);
    } catch (error) {
      const errorMessage = getError(error);
      state.setState();
    }
  }),
  /* Actions */
  setState: action((state) => {
    return {
      ...state,
      isLoading: false,
      user: null,
      error: '',
    };
  }),

  setUser: action((state, payload) => {
    return {
      ...state,
      user: payload,
      isLoading: false,
    };
  }),

  setIsloading: action((state, payload) => {
    return {
      ...state,
      isLoading: payload,
    };
  }),

  setError: action((state, payload) => {
    return {
      ...state,
      error: payload,
      isLoading: false,
      user: null,
    };
  }),

  clearError: action((state) => {
    return {
      ...state,
      error: '',
    };
  }),
  /* computed values */
  isAuthenticated: computed((state) => !!state.user),
};

export default AuthModel;
