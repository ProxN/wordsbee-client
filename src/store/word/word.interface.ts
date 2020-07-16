import { Thunk, Action, Computed } from 'easy-peasy';

export interface IDefinitions {
  definition: string;
  examples: string[];
  partOfSpeech: string;
  _id: string;
}

export interface IWord {
  _id: string;
  createAt: number;
  word: {
    definition: string;
    pronunciation: string;
    word: string;
    _id: string;
    definitions: IDefinitions[];
  };
}

export interface IGetWordsResponse {
  status: string;
  results: number;
  data: IWord[];
}
export interface IAddWordResponse {
  status: string;
  data: IWord;
}

export interface IWordGrouped {
  speech: string;
  definitions: IDefinitions[];
}

export interface IWordModel {
  words: IWord[];
  word: IWord | null;
  isLoading: boolean;
  error: string;
  searchQuery: string;
  /* Thunk Action */
  getWords: Thunk<IWordModel>;
  createWord: Thunk<IWordModel, string>;
  getWord: Thunk<IWordModel, string>;
  /* Actions */
  setIsLoading: Action<IWordModel, boolean>;
  setWords: Action<IWordModel, IWord[]>;
  setWord: Action<IWordModel, IWord | string>;
  setError: Action<IWordModel, string>;
  addWord: Action<IWordModel, IWord>;
  setQuery: Action<IWordModel, string>;
  // getWord: Action<IWordModel>;
  clearError: Action<IWordModel>;
  /* Values */
  groupedDefinitions: Computed<IWordModel, IWordGrouped[]>;
  isEmpty: Computed<IWordModel, boolean>;
  filterdWords: Computed<IWordModel, IWord[]>;

  // filterdWords: Computed<IWordModel, (query: string) => IWord[]>;
}
