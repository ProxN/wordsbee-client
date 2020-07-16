import { action, thunk, computed } from 'easy-peasy';
import { IToastModel } from './toast.interface';

const ToastModel: IToastModel = {
  toasts: [],
  /* Actions */

  addToast: action((state, payload) => {
    return {
      ...state,
      toasts: [...state.toasts, payload],
    };
  }),
  removeToast: action((state, payload) => {
    return {
      ...state,
      toasts: state.toasts.filter((el) => el.id !== payload),
    };
  }),
  createToast: thunk((state, payload) => {
    const timeout = 3500;
    state.addToast(payload);
    setTimeout(() => {
      state.removeToast(payload.id);
    }, timeout);
  }),

  /*  values */
  emptyToast: computed((state) => state.toasts.length === 0),
};

export default ToastModel;
