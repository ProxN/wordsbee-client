import { Action, Thunk, Computed } from 'easy-peasy';
import { ISignUp, ISignIn } from '../../interfaces/Forms';

export interface IUser {
  _id: string;
  role: string;
  email: string;
  fullname: string;
  createdAt: number;
  updateAt: number;
}

export interface IAuthModel {
  user: IUser | null;
  isLoading: boolean;
  error: string;
  /* Actions thunk */
  signup: Thunk<IAuthModel, ISignUp>;
  signin: Thunk<IAuthModel, ISignIn>;
  getUser: Thunk<IAuthModel>;
  logout: Thunk<IAuthModel>;
  /* Actions */
  setUser: Action<IAuthModel, IUser>;
  setIsloading: Action<IAuthModel, boolean>;
  setError: Action<IAuthModel, string>;
  clearError: Action<IAuthModel>;
  setState: Action<IAuthModel>;
  /* Computed values */
  isAuthenticated: Computed<IAuthModel, boolean>;
}

export interface IUserResponse {
  status: string;
  data: IUser;
}
