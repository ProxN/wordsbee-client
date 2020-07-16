export interface ISignIn {
  email: string;
  password: string;
}

export interface ISignUp extends ISignIn {
  fullname: string;
}

export interface IAddWord {
  word: string;
}

type FormTypes = ISignIn | ISignUp | IAddWord;

export default FormTypes;
