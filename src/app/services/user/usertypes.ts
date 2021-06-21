export interface ISignUp {
  username: string;
  email: string;
  password: string;
  first_name: string;
  last_name: string;
}

export const initialSignUpState: ISignUp = {
  username: '',
  email: '',
  password: '',
  first_name: '',
  last_name: '',
};
