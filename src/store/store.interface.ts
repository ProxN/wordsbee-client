import { IAuthModel } from './auth/auth.interface';
import { IWordModel } from './word/word.interface';
import { IToastModel } from './toast/toast.interface';

export default interface Store {
  auth: IAuthModel;
  word: IWordModel;
  toast: IToastModel;
}
