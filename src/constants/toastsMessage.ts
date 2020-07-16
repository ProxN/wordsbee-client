export default {
  addWord: {
    message: 'Word has been added successfuly',
    type: 'success',
  },
  serverMessage: (message: string) => ({
    message,
    type: 'error',
  }),
};
