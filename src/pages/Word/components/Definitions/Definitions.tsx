import React from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { SayButton } from 'react-say';
import Card from '../../../../components/Card';
import {
  DefinitionsContainer,
  DefinitionsContent,
  DefinitionsList,
  Heading,
  Definition,
  DefinitionDot,
  DefinitionText,
  DefinitionExample,
  SoundBox,
} from './Definitions.styles';
import Icon from '../../../../components/Icon';
import { IDefinitions } from '../../../../store/word/word.interface';

interface Props {
  data: {
    speech: string;
    definitions: IDefinitions[];
  };
}

const Definitions: React.FC<Props> = ({ data }) => {
  return (
    <DefinitionsContainer>
      <Card>
        <Heading>
          <span>{data.speech[0]}</span>
          {data.speech}
        </Heading>
        <DefinitionsContent>
          <DefinitionsList>
            {data.definitions.map((el) => (
              <Definition key={el._id}>
                <DefinitionDot />
                <DefinitionText>
                  {el.definition}
                  {el.examples.map((ex) => (
                    <DefinitionExample key={Math.random()}>
                      {ex}
                      <SoundBox as={SayButton} speak={ex}>
                        <Icon name='sound' storke='#93dd5c' size='sm' />
                      </SoundBox>
                    </DefinitionExample>
                  ))}
                </DefinitionText>
              </Definition>
            ))}

            {/* <Definition>
              <DefinitionDot />
              <DefinitionText>
                What something is used for
                <DefinitionExample>
                  The function of an auger is to borr holes
                  <SoundBox>
                    <Icon name='sound' storke='#93dd5c' size='sm' />
                  </SoundBox>
                </DefinitionExample>
              </DefinitionText>
            </Definition> */}
          </DefinitionsList>
        </DefinitionsContent>
      </Card>
    </DefinitionsContainer>
  );
};

export default Definitions;
