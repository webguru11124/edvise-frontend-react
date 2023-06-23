export interface TextFieldProps extends React.HTMLProps<HTMLInputElement> {
  type: 'text' | 'password';
  placeholder: string;
}
