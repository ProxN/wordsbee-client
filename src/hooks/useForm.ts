import { useState, useEffect, useCallback } from 'react';
import FormTypes from '../interfaces/Forms';

interface IUseForm<T> {
  values: T;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  isSubmitting: boolean;
}

const isEmpty = (obj: FormTypes): boolean => {
  return Object.keys(obj).length === 0;
};

const useForm = <T extends FormTypes>(
  callback: () => void,
  initialValues: T
): IUseForm<T> => {
  const [values, setValues] = useState<T>(initialValues);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>): void => {
      const { value, name } = e.target;
      if (value === '') {
        setIsSubmitting(false);
      }
      setValues((prevState) => ({ ...prevState, [name]: value }));
    },
    [setValues]
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (isSubmitting) {
      callback();
    }
  };

  useEffect(() => {
    if (!isEmpty(values)) {
      const propIsEmpty = Object.values(values).some((el) => el === '');
      if (!propIsEmpty) {
        setIsSubmitting(true);
      }
    }
  }, [values]);

  return {
    values,
    handleChange,
    handleSubmit,
    isSubmitting,
  };
};

export default useForm;
