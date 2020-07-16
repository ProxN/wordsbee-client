import { Action, Thunk, Computed } from 'easy-peasy';

export interface Toast {
  message: string;
  type: 'default' | 'success' | 'error';
}

export interface IToast extends Toast {
  id: number;
}

export interface IToastModel {
  toasts: IToast[];
  /* Actions */
  createToast: Thunk<IToastModel, IToast>;
  addToast: Action<IToastModel, IToast>;
  removeToast: Action<IToastModel, number>;

  /* values */
  emptyToast: Computed<IToastModel, boolean>;
}
