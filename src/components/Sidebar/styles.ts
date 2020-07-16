import styled from 'styled-components';
import media from '../../styles/media';

export const SideWrapper = styled.aside`
  background: ${({ theme }) => theme.colors.primary.dark};
  height: 100vh;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  position: fixed;
  width: 230px;
  ${media.tablet} {
    display: none;
  }
`;

export const SideContent = styled.div`
  width: 100%;
`;
