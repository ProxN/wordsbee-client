import React from 'react';
import { useStoreState } from '../../hooks/typedHooks';
import { ToastContainer, ToastBox } from './styles';

const Toast: React.FC = () => {
  const toasts = useStoreState((state) => state.toast.toasts);

  return (
    <ToastContainer>
      {toasts &&
        toasts.map((el) => (
          <ToastBox key={el.id} type={el.type}>
            {el.message}
          </ToastBox>
        ))}
    </ToastContainer>
  );
};

export default Toast;
