import React, { useEffect } from 'react';
import shallowequal from 'shallowequal';
import { useParams } from 'react-router-dom';
import { useStoreActions, useStoreState } from '../../hooks/typedHooks';
import Section from '../../components/Section';
import WordContainer from './styles';
import Definition from './components/Definition/Definition';
import Definitions from './components/Definitions/Definitions';
import Loader from '../../components/Loader';
import Empty from '../../components/Empty';
import errorMessage from '../../constants/errorMessage';
import Translate from './components/Translate/Translate';

const Word: React.FC = () => {
  const { wordId } = useParams<{ wordId: string }>();
  const { setWord, getWord } = useStoreActions((state) => ({
    setWord: state.word.setWord,
    getWord: state.word.getWord,
  }));
  const { word, definitions, isEmpty, isLoading } = useStoreState(
    (state) => ({
      word: state.word.word,
      definitions: state.word.groupedDefinitions,
      isEmpty: state.word.isEmpty,
      isLoading: state.word.isLoading,
    }),
    shallowequal
  );

  useEffect(() => {
    if (isEmpty) {
      const onLoad = async (): Promise<void> => {
        await getWord(wordId);
      };
      onLoad();
    } else {
      setWord(wordId);
    }
  }, [isEmpty, wordId, getWord, setWord]);

  if (isLoading) return <Loader marginLeft='115px' />;

  if (!word) return <Empty marginLeft='115px' data={errorMessage.notFound} />;

  return (
    <Section>
      <WordContainer>
        <div>
          <Definition
            data={{
              word: word.word.word,
              ipa: word.word.pronunciation,
              definition: word.word.definition,
            }}
          />
          {definitions &&
            definitions.map((el) => <Definitions key={el.speech} data={el} />)}
        </div>
        <div>
          <Translate word={word.word.word} />
        </div>
      </WordContainer>
    </Section>
  );
};

export default Word;
