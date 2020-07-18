import React, { useEffect } from 'react';
import shallowequal from 'shallowequal';
import { useStoreActions, useStoreState } from '../../../../hooks/typedHooks';
import useForm from '../../../../hooks/useForm';
import FormContainer from '../../../../components/FormContainer';
import Input from '../../../../components/Input';
import Button from '../../../../components/Button';
import Error from '../../../../components/Error';
import { Toast } from '../../../../store/toast/toast.interface';
import { Form, FormTitle, FormAction } from './AddFormWord.styles';

interface Props {
  onClose: () => void;
}

const AddFormWord: React.FC<Props> = ({ onClose }) => {
  const { createWord, clearError, createToast } = useStoreActions((state) => ({
    createWord: state.word.createWord,
    clearError: state.word.clearError,
    createToast: state.toast.createToast,
  }));

  const { error, isLoading } = useStoreState(
    (state) => ({
      isLoading: state.word.isLoading,
      error: state.word.error,
    }),
    shallowequal
  );

  useEffect(() => {
    clearError();
  }, [clearError]);

  const onSubmit = async (): Promise<void> => {
    const message = (await createWord(values.word)) as Toast;
    if (message.type === 'success') {
      createToast({
        ...message,
        id: Date.now(),
      });
      onClose();
    }
  };

  const { values, handleChange, handleSubmit, isSubmitting } = useForm(
    onSubmit,
    {
      word: '',
    }
  );

  return (
    <FormContainer onClick={onClose}>
      <Form onSubmit={handleSubmit}>
        <FormTitle>Add Word</FormTitle>
        {error && <Error message={error} />}
        <Input
          focus
          placeholder='Add new word'
          name='word'
          label='Word'
          onChange={handleChange}
          value={values.word}
        />
        <FormAction>
          <Button
            disabled={!isSubmitting || isLoading}
            fullWidth
            variant='primary'
          >
            {isLoading ? 'Adding...' : 'Add Word'}
          </Button>
        </FormAction>
      </Form>
    </FormContainer>
  );
};

export default AddFormWord;
