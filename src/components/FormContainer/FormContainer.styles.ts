import styled from 'styled-components';

export const FormContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.99);
  z-index: 10;
`;

export const CloseContainer = styled.div`
  height: 60px;
  padding: 0 50px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const CloseBtn = styled.div`
  cursor: pointer;
  width: 30px;
  height: 30px;
  position: relative;
  display: flex;
  ::after,
  ::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    margin-top: 15px;
    background: ${({ theme }) => theme.colors.primary.light};
  }
  ::before {
    transform: rotate(45deg);
  }
  ::after {
    transform: rotate(-45deg);
  }
`;

export const FormContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -100px;
`;
