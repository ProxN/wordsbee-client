import { AxiosError } from 'axios';

interface IError {
  message: string;
  status: string;
}

export default (err: AxiosError<IError>): string => {
  let errorMessage = '';
  if (err.response) {
    errorMessage = err.response.data.message;
  } else if (err.message === 'Network Error') {
    errorMessage = 'A network error has occurred! Please try again.';
  } else {
    errorMessage = err.message;
  }
  return errorMessage;
};
