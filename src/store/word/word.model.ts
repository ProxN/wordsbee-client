import { thunk, action, computed } from 'easy-peasy';
import axios from 'axios';
import { API_URL } from '../../constants/config';
import {
  IWordModel,
  IGetWordsResponse,
  IAddWordResponse,
  IDefinitions,
} from './word.interface';
import { Toast } from '../toast/toast.interface';
import getError from '../../utils/getError';
import toastsMessage from '../../constants/toastsMessage';

const WordModel: IWordModel = {
  /* STate */
  words: [],
  word: null,
  error: '',
  isLoading: false,
  searchQuery: '',
  /* Actions thunk */
  getWords: thunk(async (state) => {
    state.setIsLoading(true);
    try {
      const res = await axios.get<IGetWordsResponse>(`${API_URL}/userwords`, {
        withCredentials: true,
      });
      state.setWords(res.data.data);
    } catch (error) {
      const errorMessage = getError(error);
      state.setError(errorMessage);
    }
  }),

  createWord: thunk(async (state, data) => {
    state.setIsLoading(true);
    try {
      const res = await axios.post<IAddWordResponse>(
        `${API_URL}/userwords`,
        { word: data },
        {
          withCredentials: true,
        }
      );
      state.addWord(res.data.data);
      return toastsMessage.addWord as Toast;
    } catch (error) {
      const errorMessage = getError(error);
      state.setError(errorMessage);
      return toastsMessage.serverMessage(errorMessage) as Toast;
    }
  }),

  getWord: thunk(async (state, wordId) => {
    state.setIsLoading(true);
    try {
      const res = await axios.get<IAddWordResponse>(
        `${API_URL}/userwords/${wordId}`,
        {
          withCredentials: true,
        }
      );
      state.setWord(res.data.data);
    } catch (error) {
      const errorMessage = getError(error);
      state.setError(errorMessage);
    }
  }),

  /* Actions */

  setIsLoading: action((state, payload) => {
    return {
      ...state,
      isLoading: payload,
    };
  }),

  setWords: action((state, payload) => {
    return {
      ...state,
      words: payload,
      isLoading: false,
      word: null,
    };
  }),

  setError: action((state, payload) => {
    return {
      ...state,
      error: payload,
      isLoading: false,
    };
  }),

  addWord: action((state, payload) => {
    return {
      ...state,
      words: [...state.words, payload],
      isLoading: false,
    };
  }),

  setQuery: action((state, payload) => {
    return {
      ...state,
      searchQuery: payload,
    };
  }),

  setWord: action((state, payload) => {
    if (typeof payload === 'string') {
      return {
        ...state,
        word: state.words.find((el) => el._id === payload) || null,
      };
    }
    return {
      ...state,
      word: payload,
      isLoading: false,
    };
  }),

  clearError: action((state) => {
    return {
      ...state,
      error: '',
    };
  }),

  /* Values */

  groupedDefinitions: computed((state) => {
    const res: { [key: string]: IDefinitions[] } = {};
    state.word?.word.definitions.forEach((el) => {
      res[el.partOfSpeech] = res[el.partOfSpeech] || [];
      res[el.partOfSpeech].push(el);
    });

    const groups = Object.keys(res).map((key) => {
      return { speech: key, definitions: res[key] };
    });
    return groups;
  }),
  isEmpty: computed((state) => state.words.length === 0),
  filterdWords: computed((state) => {
    const regex = new RegExp(state.searchQuery, 'i');
    const results = state.words.filter((el) => regex.exec(el.word.word));
    return results;
  }),
};

export default WordModel;
