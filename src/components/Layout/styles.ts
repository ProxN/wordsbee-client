import styled from 'styled-components';
import media from '../../styles/media';

export const LayoutContainer = styled.article`
  height: 100%;
  width: 100%;
`;

export const ChildWrapper = styled.main`
  display: grid;
  grid-template-columns: 230px 1fr;
  height: 100%;
  ${media.tablet} {
    grid-auto-rows: 60px 1fr;
  }
`;
