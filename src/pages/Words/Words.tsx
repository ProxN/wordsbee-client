import React, { useState, useEffect, useCallback } from 'react';
import { useStoreActions } from '../../hooks/typedHooks';
import Section from '../../components/Section';
import Topbar from './components/Topbar/Topbar';
import WordsList from './components/WordsList/WordsList';
import AddFormWord from './components/AddFormWord/AddFormWord';

const Words: React.FC = () => {
  const [formOpen, setFormOpen] = useState(false);
  const getWords = useStoreActions((state) => state.word.getWords);

  useEffect(() => {
    const onLoad = async (): Promise<void> => {
      await getWords();
    };
    onLoad();
  }, [getWords]);

  const handleOpenClick = useCallback((): void => {
    setFormOpen(true);
  }, [setFormOpen]);

  const handleCloseClick = useCallback((): void => {
    setFormOpen(false);
  }, [setFormOpen]);
  return (
    <Section render={<Topbar onOpen={handleOpenClick} />}>
      <WordsList />
      {formOpen && <AddFormWord onClose={handleCloseClick} />}
    </Section>
  );
};

export default Words;
