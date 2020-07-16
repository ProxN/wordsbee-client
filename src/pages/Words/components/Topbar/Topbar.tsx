import React, { useCallback } from 'react';
import { useStoreActions, useStoreState } from '../../../../hooks/typedHooks';
import Input from '../../../../components/Input';
import Button from '../../../../components/Button';
import TopbarBox from './Topbar.styles';

interface Props {
  onOpen: () => void;
}

const Topbar: React.FC<Props> = ({ onOpen }) => {
  const query = useStoreState((state) => state.word.searchQuery);
  const setQuery = useStoreActions((state) => state.word.setQuery);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>): void => {
      setQuery(e.target.value);
    },
    [setQuery]
  );

  return (
    <TopbarBox>
      <form>
        <Input
          onChange={handleChange}
          rounded
          placeholder='Search for words'
          icon='search'
          value={query}
        />
      </form>
      <Button onClick={onOpen} variant='primary' rounded size='md'>
        Add Word
      </Button>
    </TopbarBox>
  );
};

export default Topbar;
