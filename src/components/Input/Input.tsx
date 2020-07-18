import React, { ChangeEvent } from 'react';
import {
  InputContainer,
  StyledInput,
  IconBox,
  InputLabel,
  ErrorLabel,
} from './styles';
import Icon from '../Icon';

interface Props {
  placeholder?: string;
  icon?: string;
  label?: string;
  rounded?: boolean;
  fullWidth?: boolean;
  type?: 'text' | 'email' | 'password';
  margin?: boolean;
  error?: string;
  value?: string;
  name?: string;
  focus?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<Props> = (props) => {
  const {
    icon,
    placeholder,
    fullWidth,
    label,
    margin,
    error,
    onChange,
    name,
    value,
    rounded,
    type,
    focus,
  } = props;
  return (
    <InputContainer margin={margin}>
      {label && <InputLabel htmlFor={name}>{label}</InputLabel>}
      <StyledInput
        value={value || ''}
        autoComplete='off'
        autoCorrect='off'
        name={name}
        autoFocus={focus}
        id={name}
        fullWidth={fullWidth}
        placeholder={placeholder}
        type={type || 'text'}
        onChange={onChange}
        rounded={rounded}
      />
      {error && <ErrorLabel>{error}</ErrorLabel>}
      {icon && (
        <IconBox>
          <Icon name={icon} size='md' storke='#777d83' />
        </IconBox>
      )}
    </InputContainer>
  );
};

Input.defaultProps = {
  fullWidth: true,
};

export default React.memo(Input);
