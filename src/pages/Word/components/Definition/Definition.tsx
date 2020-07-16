import React from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { SayButton } from 'react-say';
import Card from '../../../../components/Card';
import Icon from '../../../../components/Icon';
import {
  DefintionContainer,
  WordName,
  FlexLeft,
  Content,
  WordIpa,
  FlexRight,
  Title,
  Text,
  SoundBox,
} from './Definition.styles';

interface Props {
  data: {
    ipa: string;
    word: string;
    definition: string;
  };
}

const Definition: React.FC<Props> = ({ data }) => {
  return (
    <DefintionContainer>
      <Card>
        <Content>
          <FlexLeft>
            <WordName>
              {data.word}
              <SoundBox as={SayButton} speak={data.word}>
                <Icon storke='#93dd5c' name='sound' size='md' />
              </SoundBox>
            </WordName>
            <WordIpa>{`[${data.ipa}]`}</WordIpa>
          </FlexLeft>
          <FlexRight>
            <Title>definition</Title>
            <Text>{data.definition}</Text>
          </FlexRight>
        </Content>
      </Card>
    </DefintionContainer>
  );
};

export default Definition;
