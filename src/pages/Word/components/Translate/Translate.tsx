/* eslint-disable @typescript-eslint/no-unsafe-call */
import React, { useState, useEffect } from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Card from '../../../../components/Card';
import tr from '../../../../utils/translate';
import {
  DropDownRoot,
  DropDownPlaceHolder,
  DropDownControl,
  DropDownMenu,
  DropDownItem,
  TranslateResult,
} from './Translate.styles';
import languages from '../../../../constants/languages';

interface ILang {
  code: string;
  name: string;
  native: string;
  rtl?: number;
}

interface Props {
  word: string;
}

const Translate: React.FC<Props> = ({ word }) => {
  const [open, setOpen] = useState(false);
  const [translate, setTranslate] = useState('');
  const [selected, setSelected] = useState<ILang>({
    code: 'fr',
    name: 'French',
    native: 'Français',
  });

  useEffect(() => {
    const getTranslate = async (): Promise<void> => {
      const res = await tr(word, selected.code);
      setTranslate(res);
    };
    getTranslate();
  }, [selected, word]);

  const handleDropOnClick = (): void => {
    setOpen(!open);
  };

  const handleSelectClick = (lang: ILang): void => {
    setSelected(lang);
  };

  return (
    <Card heading='Translate'>
      <DropDownRoot onClick={handleDropOnClick}>
        <DropDownControl>
          <DropDownPlaceHolder>{selected.name}</DropDownPlaceHolder>
        </DropDownControl>
        {open && (
          <DropDownMenu>
            {languages.map((el) => (
              <DropDownItem key={el.code} onClick={() => handleSelectClick(el)}>
                {el.name}
              </DropDownItem>
            ))}
          </DropDownMenu>
        )}
      </DropDownRoot>
      <TranslateResult>
        &gt;&nbsp;
        {translate}
      </TranslateResult>
    </Card>
  );
};

export default Translate;
