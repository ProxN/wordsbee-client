import axios from 'axios';
import { API_URL } from '../constants/config';
import getError from './getError';

interface IResponse {
  status: string;
  data: string;
}

export default async (word: string, to: string): Promise<string> => {
  try {
    const res = await axios.get<IResponse>(
      `${API_URL}/translate?word=${word}&to=${to}`
    );

    return res.data.data;
  } catch (error) {
    return getError(error);
  }
};
