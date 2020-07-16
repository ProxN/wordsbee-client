import React from 'react';
import { useHistory } from 'react-router-dom';
import { WordContent, WordName, WordDefinition } from './WordCard.styles';
import Card from '../../../../components/Card';
import { IWord } from '../../../../store/word/word.interface';

interface Props {
  word: IWord;
}

const WordCard: React.FC<Props> = ({ word }) => {
  const history = useHistory();
  const { word: data } = word;

  const handleCardClick = (): void => {
    history.push(`/words/${word._id}`);
  };
  return (
    <Card onClick={handleCardClick}>
      <WordContent>
        <WordName>
          <span>{data.word[0]}</span>
          {data.word.slice(1, data.word.length)}
        </WordName>
        <WordDefinition>{data.definition}</WordDefinition>
      </WordContent>
    </Card>
  );
};

export default WordCard;
