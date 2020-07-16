import React from 'react';
import shallowequal from 'shallowequal';
import WordsListcontainer from './Wordslist.styles';
import WordCard from '../WordCard/Wordcard';
import { useStoreState } from '../../../../hooks/typedHooks';
import Empty from '../../../../components/Empty';
import errorMessage from '../../../../constants/errorMessage';
import Loader from '../../../../components/Loader';

const WordsList: React.FC = () => {
  const { words, isLoading } = useStoreState(
    (state) => ({
      words: state.word.filterdWords,
      isLoading: state.word.isLoading,
    }),
    shallowequal
  );

  if (isLoading) return <Loader />;

  return (
    <WordsListcontainer>
      {words.length > 0 ? (
        words.map((el) => <WordCard key={el._id} word={el} />)
      ) : (
        <Empty data={errorMessage.emptyWords} />
      )}
    </WordsListcontainer>
  );
};

export default React.memo(WordsList);
