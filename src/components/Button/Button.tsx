import React from 'react';
import StyledButton from './styles';

interface Props {
  children?: React.ReactNode;
  icon?: React.ReactNode;
  variant?: 'primary' | 'dashed' | 'danger' | 'default';
  size?: 'sm' | 'md' | 'lg';
  rounded?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

const Button: React.FC<Props> = (props) => {
  const { children, icon, size, rounded, variant, disabled } = props;
  return (
    <StyledButton
      size={size}
      rounded={rounded}
      variant={variant}
      disabled={disabled}
      {...props}
    >
      {icon && icon}
      {children}
    </StyledButton>
  );
};

Button.defaultProps = {
  size: 'md',
  rounded: false,
  variant: 'default',
  disabled: false,
  fullWidth: false,
};

export default React.memo(Button);
