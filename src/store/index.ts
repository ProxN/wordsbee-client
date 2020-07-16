import { createStore, persist } from 'easy-peasy';
import AuthModel from './auth/auth.model';
import IStore from './store.interface';
import WordModel from './word/word.model';
import ToastModel from './toast/toast.model';

const store: IStore = {
  auth: AuthModel,
  word: WordModel,
  toast: ToastModel,
};

export default createStore<IStore>(persist(store), {
  disableImmer: true,
});
