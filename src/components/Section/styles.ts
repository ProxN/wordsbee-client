import styled, { css } from 'styled-components';
import media from '../../styles/media';

export const SectionContainer = styled.section`
  width: 100%;
  height: 100%;
  position: relative;
  grid-column: 2 / -1;
  ${media.tablet} {
    grid-column: 1 /-1;
  }
`;

export const SectionContent = styled.div`
  padding: 30px 40px;
  height: 100%;
  ${media.thone} {
    padding: 30px 15px;
  }
  ${media.tiny} {
    padding: 30px 0px;
  }
`;

export const SectionTop = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
`;

export const SectionHeading = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.dark.mid};
    font-family: ${theme.fonts.secondary};
    font-size: ${theme.fontSizes.h3};
  `};
  font-weight: 500;
  text-transform: capitalize;
  line-height: 1.1;
`;
